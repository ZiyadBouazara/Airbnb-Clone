import pymysql
import pymysql.cursors
import csv
from passlib.hash import pbkdf2_sha256
import random


def db_connection():
    conn = pymysql.connect(
        host="localhost",
        user="root",  # Utilisateur pour se connecter
        password="abcdef",  # Mot de passe de l'utilisateur pour se connecter
        db="glo_2005_webapp",
        autocommit=True
    )
    c = conn.cursor()
    return conn, c


def create_tables():
    # Cette fonction crée les tables nécéssaires à la BD

    r1 = "CREATE TABLE IF NOT EXISTS Immeuble(iid INT AUTO_INCREMENT, address VARCHAR(30), nombre_logements INTEGER, secteur VARCHAR(50)," \
         " nom VARCHAR(50), type ENUM('Condo/Loft', 'Appartements', 'Commercial'), photos VARCHAR(255), descriptif VARCHAR(800), hot_water TINYINT(1)," \
         " electricity TINYINT(1), wifi TINYINT(1), parking TINYINT(1), gym TINYINT(1), backyard TINYINT(1)," \
         " elevator TINYINT(1), pool TINYINT(1), ev_charger TINYINT(1), air_conditioner TINYINT(1)," \
         " terrasse TINYINT(1), PRIMARY KEY(iid), UNIQUE (address));"

    r2 = "CREATE TABLE IF NOT EXISTS Logement(id_logement INT AUTO_INCREMENT, contient INT NOT NULL," \
         " available TINYINT(1), pieces VARCHAR(50), taille VARCHAR(10), numero INTEGER, price INTEGER, photos VARCHAR(1000)," \
         " UNIQUE(contient, numero)," \
         " PRIMARY KEY(id_logement)," \
         " FOREIGN KEY (contient) REFERENCES Immeuble(iid) ON UPDATE CASCADE ON DELETE CASCADE);"

    r3 = "CREATE TABLE IF NOT EXISTS User(id INT AUTO_INCREMENT, email VARCHAR(50), phone VARCHAR(15), nom VARCHAR(50)," \
         " age INTEGER, UNIQUE(email), UNIQUE(nom, age), PRIMARY KEY(id), " \
         "CONSTRAINT age_legal CHECK ( age BETWEEN 18 AND 112));"

    # r4 = "CREATE TABLE IF NOT EXISTS Locataire(id  INT, " \
    #     "PRIMARY KEY (id), FOREIGN KEY (id) REFERENCES User(id) ON UPDATE CASCADE ON DELETE CASCADE);"

    r5 = "CREATE TABLE IF NOT EXISTS Louer(id  INT, id_logement INT, date_debut DATE, date_fin DATE," \
         "PRIMARY KEY(id_logement, id)," \
         "FOREIGN KEY (id) REFERENCES User(id) ON UPDATE CASCADE ON DELETE CASCADE," \
         "FOREIGN KEY (id_logement) REFERENCES Logement(id_logement) ON UPDATE CASCADE ON DELETE CASCADE);"

    r6 = "CREATE TABLE IF NOT EXISTS Aime(id_logement INT, id INT," \
         "PRIMARY KEY(id_logement, id)," \
         "FOREIGN KEY (id_logement) REFERENCES Logement(id_logement) ON UPDATE CASCADE ON DELETE CASCADE," \
         "FOREIGN KEY (id) REFERENCES User(id) ON UPDATE CASCADE ON DELETE CASCADE);"

    r7 = "CREATE TABLE IF NOT EXISTS Contient(iid INT, id_logement  INT, " \
         "PRIMARY KEY(iid, id_logement)," \
         "FOREIGN KEY (iid) REFERENCES Immeuble(iid) ON UPDATE CASCADE ON DELETE CASCADE," \
         "FOREIGN KEY (id_logement) REFERENCES Logement(id_logement) ON UPDATE CASCADE ON DELETE CASCADE);"

    r8 = "CREATE TABLE IF NOT EXISTS Safe(email VARCHAR(50), mdp VARCHAR(255)," \
         "PRIMARY KEY (email)," \
         "FOREIGN KEY(email) REFERENCES User(email) ON UPDATE CASCADE ON DELETE CASCADE);"

    cursor.execute(r1)
    cursor.execute(r2)
    cursor.execute(r3)
    # cursor.execute(r4)
    cursor.execute(r5)
    cursor.execute(r6)
    cursor.execute(r7)
    cursor.execute(r8)


def create_indexes():
    # Cette fonction cree les index
    # (Immeuble.address, Immeuble.nom, Immeuble.secteur, Logement.pieces, Logement.taille, Logement.price, Immeuble.type)

    i1 = "CREATE INDEX idx_immeuble_address ON Immeuble(address);"

    i2 = "CREATE INDEX idx_immeuble_nom ON Immeuble(nom);"

    i3 = "CREATE INDEX idx_immeuble_secteur ON Immeuble(secteur);"

    i4 = "CREATE INDEX idx_logement_pieces ON Logement(pieces);"

    i5 = "CREATE INDEX idx_logement_taille ON Logement(taille);"

    i6 = "CREATE INDEX idx_logement_price ON Logement(price);"

    i7 = "CREATE INDEX idx_immeuble_type ON Immeuble(type);"

    cursor.execute(i1)
    cursor.execute(i2)
    cursor.execute(i3)
    cursor.execute(i4)
    cursor.execute(i5)
    cursor.execute(i6)
    cursor.execute(i7)


def create_triggers():
    # Cette fonction crée les triggers nécéssaires à la BD

    t1 = """
    CREATE TRIGGER AjoutLouer AFTER INSERT ON Louer
    FOR EACH ROW
    BEGIN
        UPDATE Logement
        SET Logement.available = 0
        WHERE NEW.id_logement = Logement.id_logement;
    END
    """
    # Cette trigger set available a FALSE (0) lorsque l'on Loue un logement
    # Donc le logement n'est plus disponible, il est loue

    t2 = """
    CREATE TRIGGER EndOfLocation
    AFTER DELETE ON Louer
    FOR EACH ROW
    BEGIN
        UPDATE Logement
        SET available = 1
        WHERE Logement.id_logement = OLD.id_logement;
    END
    """
    # Cette trigger set a available le logement qui a ete libere par le locataire dans tout les cas

    t3 = """
    CREATE TRIGGER SupprimeLogement
    AFTER DELETE ON Logement
    FOR EACH ROW
    BEGIN
        UPDATE Immeuble
        SET Immeuble.nombre_logements = Immeuble.nombre_logements - 1
        WHERE OLD.contient = Immeuble.iid;
    END
    """
    # Cette trigger update le compte de nombre_logement apres suppression de logement en decrementant

    t4 = """
    CREATE TRIGGER AjoutLogement
    AFTER INSERT ON Logement
    FOR EACH ROW
    BEGIN
        UPDATE Immeuble
        SET Immeuble.nombre_logements = Immeuble.nombre_logements + 1
        WHERE NEW.contient = Immeuble.iid;
        
        INSERT INTO Contient(iid, id_logement) VALUES (NEW.contient, NEW.id_logement);
    END
    """
    # Cette trigger ajoute immediatement apres un ajout de logement le tuple unique de ce logement a Contient
    # Update le compte de nombre_logement en incrementant (Voir t3 pour decrement)
    # Pour chaque ajout de logement AjoutLogement ajoute le tuple a Contient

    t5 = """
    CREATE TRIGGER AucunLogementVerif
    BEFORE DELETE ON Contient
    FOR EACH ROW
    BEGIN
        IF (SELECT COUNT(*) FROM Contient WHERE iid = OLD.iid) = 1
        THEN
            SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'Cette immeuble ne possède plus de logements ni de revenus si vous supprimez ces logements. Veuillez supprimer Immeuble voulue directement.';
        END IF ;
    END
    """
    # Avant de supprimer le dernier logement d'un immeuble, on signale que c'est le dernier et que l'immeuble n'est plus profitable.
    # En tant que telle on va seulement supprimer un logement de notre immeuble si par exemple on decide de faire des
    # renovations et enlever des logements. Donc c'est une precaution.

    t6 = """
    CREATE TRIGGER ImmeubleExisteVerif
    BEFORE INSERT ON Contient
    FOR EACH ROW
    BEGIN
        IF (SELECT COUNT(*) FROM Immeuble WHERE Immeuble.iid = NEW.iid) = 0
        THEN
            SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'Cette immeuble nexiste pas.';
        END IF ;
    END
    """
    # Avant d'ajouter un tuple a Contient, on s'assure que l'immeuble pour lequel on ajoute ces tuples existes. On ne doit jamais avoir des logements sans Immeuble.
    # ADD ORDER : 1-Immeuble, 2-Logements, 3-Contient
    # DELETE ORDER: 1-Immeuble -> Cascade (Les tuples dans contient et logements seront automatiquement supprime)
    # Si on supprime un Logement, les tuples dans Contient de ce logement seront supprime automatiquement

    t7 = """
    CREATE TRIGGER AucunLogementVerif2
    BEFORE DELETE ON Logement
    FOR EACH ROW
    BEGIN
        IF (SELECT COUNT(*) FROM Logement WHERE contient = OLD.contient) = 1
        THEN
            SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'Cette immeuble ne possède plus de logements ni de revenus si vous supprimez ces logements. Veuillez supprimer Immeuble voulue directement.';
        END IF ;
    END
    """
    # Avant de supprimer le dernier logement d'un immeuble, on signale que c'est le dernier et que l'immeuble n'est plus profitable.
    # En tant que telle on va seulement supprimer un logement de notre immeuble si par exemple on decide de faire des
    # renovations et enlever des logements. Donc c'est une precaution. On defend ce type de suppression sur Logement et Contient

    cursor.execute(t1)
    cursor.execute(t2)
    cursor.execute(t3)
    cursor.execute(t4)
    cursor.execute(t5)
    cursor.execute(t6)
    cursor.execute(t7)


def init():
    # Cette fonction insere des données fictives dans la BD
    immeubles = []
    with open('immeubles.csv', newline='') as csvfile:
        spamreader = csv.reader(csvfile, delimiter=',')
        photos = ['https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=600',
                  'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=600',
                  'https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&w=600',
                  'https://images.pexels.com/photos/430216/pexels-photo-430216.jpeg?auto=compress&cs=tinysrgb&w=600',
                  'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600',
                  'https://images.pexels.com/photos/1717272/pexels-photo-1717272.jpeg?auto=compress&cs=tinysrgb&w=600',
                  'https://images.pexels.com/photos/439382/pexels-photo-439382.jpeg?auto=compress&cs=tinysrgb&w=600',
                  'https://images.pexels.com/photos/1031593/pexels-photo-1031593.jpeg?auto=compress&cs=tinysrgb&w=600',
                  'https://images.pexels.com/photos/2077937/pexels-photo-2077937.jpeg?auto=compress&cs=tinysrgb&w=600',
                  'https://images.pexels.com/photos/259781/pexels-photo-259781.jpeg?auto=compress&cs=tinysrgb&w=600',
                  'https://images.pexels.com/photos/932328/pexels-photo-932328.jpeg?auto=compress&cs=tinysrgb&w=600',
                  'https://images.pexels.com/photos/425047/pexels-photo-425047.jpeg?auto=compress&cs=tinysrgb&w=600',
                  'https://images.pexels.com/photos/425343/pexels-photo-425343.jpeg?auto=compress&cs=tinysrgb&w=600',
                  'https://images.pexels.com/photos/3499176/pexels-photo-3499176.jpeg?auto=compress&cs=tinysrgb&w=600',
                  'https://images.pexels.com/photos/1560065/pexels-photo-1560065.jpeg?auto=compress&cs=tinysrgb&w=600',
                  'https://images.pexels.com/photos/1021189/pexels-photo-1021189.jpeg?auto=compress&cs=tinysrgb&w=600',
                  'https://images.pexels.com/photos/1671051/pexels-photo-1671051.jpeg?auto=compress&cs=tinysrgb&w=600',
                  'https://images.pexels.com/photos/2090651/pexels-photo-2090651.jpeg?auto=compress&cs=tinysrgb&w=600',
                  'https://images.pexels.com/photos/1755287/pexels-photo-1755287.jpeg?auto=compress&cs=tinysrgb&w=600',
                  'https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&w=600']
        i = 0
        for row in spamreader:
            row.insert(4, photos[i])
            immeubles.append(row)
            i += 1

    sqlImmeubles = "INSERT INTO Immeuble (iid, address, nombre_logements, secteur, nom, type, photos, descriptif, hot_water, electricity," \
                   "wifi, parking, gym, backyard, elevator, pool, ev_charger, air_conditioner, terrasse) " \
                   "VALUES (NULL, %s, 0, %s, %s, %s, %s," \
                   " %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"

    logements = []

    photos_chambre = [
        "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600,",
        "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=600,",
        "https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=600,",
        "https://images.pexels.com/photos/2029731/pexels-photo-2029731.jpeg?auto=compress&cs=tinysrgb&w=600,",
        "https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg?auto=compress&cs=tinysrgb&w=600,",
        "https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=600,",
        "https://images.pexels.com/photos/276671/pexels-photo-276671.jpeg?auto=compress&cs=tinysrgb&w=600,",
        "https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&w=600,",
        "https://images.pexels.com/photos/3144580/pexels-photo-3144580.jpeg?auto=compress&cs=tinysrgb&w=600,",
        "https://images.pexels.com/photos/3209035/pexels-photo-3209035.jpeg?auto=compress&cs=tinysrgb&w=600,"
    ]
    photos_cuisine = [
        "https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg?auto=compress&cs=tinysrgb&w=600,",
        "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600,",
        "https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=600,",
        "https://images.pexels.com/photos/3016430/pexels-photo-3016430.jpeg?auto=compress&cs=tinysrgb&w=600,",
        "https://images.pexels.com/photos/3623785/pexels-photo-3623785.jpeg?auto=compress&cs=tinysrgb&w=600,"
    ]
    photos_toilettes = [
        "https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/2988865/pexels-photo-2988865.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1599790/pexels-photo-1599790.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/6487944/pexels-photo-6487944.jpeg?auto=compress&cs=tinysrgb&w=600"
    ]

    with open('logements.csv', newline='') as csvfile:
        spamreader = csv.reader(csvfile, delimiter=',')
        for row in spamreader:
            photos = random.choice(
                photos_chambre)+random.choice(photos_cuisine)+random.choice(photos_toilettes)
            row.append(photos)
            logements.append(row)

    sqlLogements = "INSERT INTO Logement (id_logement, contient, available, pieces, taille, numero, price, photos) " \
                   "VALUES (NULL, %s, 1, %s, %s, %s, %s, %s)"
    users = []
    safe = []
    with open('users.csv', newline='') as csvfile:
        spamreader = csv.reader(csvfile, delimiter=',')
        for row in spamreader:
            safe.append([row[0], pbkdf2_sha256.hash(row[3])])
            users.append(row)

    sqlUsers = "INSERT INTO User (id, email, phone, nom, age) " \
               "VALUES (NULL, %s, %s, %s, %s)"
    sqlSafe = "INSERT INTO Safe (email, mdp) " \
        "VALUES (%s, %s)"

    louer = []
    #locataire = []
    with open('louer.csv', newline='') as csvfile:
        spamreader = csv.reader(csvfile, delimiter=',')
        for row in spamreader:
            louer.append(row)
            # locataire.append(row[0])

    sqlLouer = "INSERT INTO Louer (id, id_logement, date_debut, date_fin) " \
               "VALUES (%s, %s, %s, %s)"
    #sqlLocataire = "INSERT INTO Locataire (id) VALUES (%s)"

    cursor.executemany(sqlImmeubles, immeubles)
    cursor.executemany(sqlLogements, logements)
    cursor.executemany(sqlUsers, users)
    cursor.executemany(sqlSafe, safe)
    #cursor.executemany(sqlLocataire, locataire)
    cursor.executemany(sqlLouer, louer)


if __name__ == '__main__':
    connection, cursor = db_connection()
    create_tables()
    create_indexes()
    create_triggers()
    init()
