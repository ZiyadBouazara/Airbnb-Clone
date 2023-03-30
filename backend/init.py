import pymysql, pymysql.cursors
import csv
import hashlib

def db_connection():
    conn = pymysql.connect(
        host="localhost",
        user="root",
        password="abcdef",
        db="glo_2005_webapp",
        autocommit=True
    )
    c = conn.cursor()
    return conn, c


def create_tables():
    r1 = "CREATE TABLE IF NOT EXISTS Immeuble(address VARCHAR(30), nombre_logements INTEGER, secteur VARCHAR(20)," \
         " nom VARCHAR(50), type ENUM('Condo/Loft', 'Appartements', 'Commercial'), photos VARCHAR(255), descriptif VARCHAR(500), hot_water TINYINT(1)," \
         " electricity TINYINT(1), wifi TINYINT(1), parking TINYINT(1), gym TINYINT(1), backyard TINYINT(1)," \
         " elevator TINYINT(1), pool TINYINT(1), ev_charger TINYINT(1), air_conditioner TINYINT(1)," \
         " terrasse TINYINT(1), PRIMARY KEY(address));"

    r2 = "CREATE TABLE IF NOT EXISTS Logement(id_logement VARCHAR(50), contient varchar(30) NOT NULL," \
         " available TINYINT(1), pieces VARCHAR(50), taille VARCHAR(10), numero INTEGER, price INTEGER," \
         " UNIQUE(contient, numero)," \
         " PRIMARY KEY(id_logement)," \
         " FOREIGN KEY (contient) REFERENCES Immeuble(address) ON UPDATE CASCADE ON DELETE CASCADE);"

    r3 = "CREATE TABLE IF NOT EXISTS User(id VARCHAR(50), email VARCHAR(50), phone VARCHAR(15), nom VARCHAR(50), mdp VARCHAR(255)," \
         " age INTEGER, UNIQUE(email), UNIQUE(nom, age), PRIMARY KEY(id), " \
         "CONSTRAINT age_legal CHECK ( age BETWEEN 18 AND 112));"

    r4 = "CREATE TABLE IF NOT EXISTS Locataire(id VARCHAR(50), " \
         "PRIMARY KEY (id), FOREIGN KEY (id) REFERENCES User(id) ON UPDATE CASCADE ON DELETE CASCADE);"

    r5 = "CREATE TABLE IF NOT EXISTS Louer(id varchar(50), id_logement varchar(50), date_debut DATE, date_fin DATE," \
         "PRIMARY KEY(id_logement, id)," \
         "FOREIGN KEY (id) REFERENCES Locataire(id) ON UPDATE CASCADE ON DELETE CASCADE," \
         "FOREIGN KEY (id_logement) REFERENCES Logement(id_logement) ON UPDATE CASCADE ON DELETE CASCADE);"

    r6 = "CREATE TABLE IF NOT EXISTS Aime(id_logement varchar(50), id varchar(50)," \
         "PRIMARY KEY(id_logement, id)," \
         "FOREIGN KEY (id_logement) REFERENCES Logement(id_logement) ON UPDATE CASCADE ON DELETE CASCADE," \
         "FOREIGN KEY (id) REFERENCES User(id) ON UPDATE CASCADE ON DELETE CASCADE);"

    r7 = "CREATE TABLE IF NOT EXISTS Contient(address varchar(50), id_logement varchar(50), " \
         "PRIMARY KEY(address, id_logement)," \
         "FOREIGN KEY (address) REFERENCES Immeuble(address) ON UPDATE CASCADE ON DELETE CASCADE," \
         "FOREIGN KEY (id_logement) REFERENCES Logement(id_logement) ON UPDATE CASCADE ON DELETE CASCADE);"

    cursor.execute(r1)
    cursor.execute(r2)
    cursor.execute(r3)
    cursor.execute(r4)
    cursor.execute(r5)
    cursor.execute(r6)
    cursor.execute(r7)


def create_triggers():
    # t1 = """
    # CREATE TRIGGER AjoutLocataire AFTER INSERT ON Locataire
    # FOR EACH ROW
    # BEGIN
    #     INSERT INTO Louer(id) VALUES (NEW.id);
    # END
    # """
    # Cette trigger ajoute immediatement un tuple dans Louer lorsque un tuple Locataire est ajoute.
    # L'ajoute de la maniere suivant : (id_locataire, null, null, null)
    # Donc il reste a aller chercher les dates de locations (on peut randomize) et le id_logement a ajouter au tuple


    t2 = """
    CREATE TRIGGER EndOfLocation
    AFTER DELETE ON Louer
    FOR EACH ROW
    BEGIN
        UPDATE Logement
        SET available = 1
        WHERE Logement.id_logement = OLD.id_logement;
        
        IF (SELECT COUNT(*) FROM Louer WHERE id = OLD.id) = 1 THEN
            DELETE FROM Locataire WHERE Locataire.id = OLD.id; 
        END IF ;
    END
    """
    # Cette trigger verifie apres avoir supprimer un tuple de Louer si le locataire possede une autre location.
    # Si il n'en a pas d'autre, alors il n'est plus un locataire donc on le supprime de la Table Locataire
    # Si il possede une autre location, alors on fait rien car il est encore un locataire
    # + On set a available le logement qui a ete libere par le locataire dans tout les cas


    t4 = """
    CREATE TRIGGER AjoutLogement
    AFTER INSERT ON Logement
    FOR EACH ROW
    BEGIN
        INSERT INTO Contient(address, id_logement) VALUES (NEW.contient, NEW.id_logement);
    END
    """
    # Cette trigger ajoute immediatement apres un ajout de logement le tuple unique de ce logement a Contient
    # Donc AjoutImmeuble et AjoutLogement travaillent ensemble
    # exemple :
    # on ajoute un nouvel immeuble -> on ajoute les logements
    # -> pour chaque ajout de logement AjoutLogement ajoute le tuple a Contient


    t5 = """
    CREATE TRIGGER AucunLogementVerif
    BEFORE DELETE ON Contient
    FOR EACH ROW
    BEGIN
        IF (SELECT COUNT(*) FROM Contient WHERE address = OLD.address) = 1
        THEN
            SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'Cette immeuble ne possède plus de logements ni de revenus.';
        END IF ;
    END
    """
    #Avant de supprimer le dernier logement d'un immeuble, on signale que c'est le dernier et que l'immeuble n'est plus profitable.
    #En tant que telle on va seulement supprimer un logement de notre immeuble si par exemple on decide de faire des
    # renovations et enlever des logements. Donc c'est une precaution.

    t6 = """
    CREATE TRIGGER ImmeubleExisteVerif
    BEFORE INSERT ON Contient
    FOR EACH ROW
    BEGIN
        IF (SELECT COUNT(*) FROM Immeuble WHERE Immeuble.address = NEW.address) = 0
        THEN
            SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'Cette immeuble nexiste pas.';
        END IF ;
    END
    """
    #Avant d'ajouter un tuple a Contient, on s'assure que l'immeuble pour lequel on ajoute ces tuples existes. On ne doit jamais avoir des logements sans Immeuble.
    # ADD ORDER : 1-Immeuble, 2-Logements, 3-Contient
    # DELETE ORDER: 1-Immeuble -> Cascade (Les tuples dans contient et logements seront automatiquement supprime)
    # Si on supprime un Logement, les tuples dans Contient de ce logement seront supprime automatiquement


    #cursor.execute(t1)
    cursor.execute(t2)
    cursor.execute(t4)
    cursor.execute(t5)
    cursor.execute(t6)


def init():
    immeubles = []
    with open('immeubles.csv', newline='') as csvfile:
        spamreader = csv.reader(csvfile, delimiter=',')
        for row in spamreader:
            immeubles.append(row)

    sqlImmeubles = "INSERT INTO Immeuble (address, nombre_logements, secteur, nom, type, photos, descriptif, hot_water, electricity," \
                   "wifi, parking, gym, backyard, elevator, pool, ev_charger, air_conditioner, terrasse) " \
                   "VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"

    logements = []
    with open('logements.csv', newline='') as csvfile:
        spamreader = csv.reader(csvfile, delimiter=',')
        for row in spamreader:
            logements.append(row)

    sqlLogements = "INSERT INTO Logement (id_logement, contient, available, pieces, taille, numero, price) " \
                   "VALUES (%s, %s, %s, %s, %s, %s, %s)"

    users = []
    with open('users.csv', newline='') as csvfile:
        spamreader = csv.reader(csvfile, delimiter=',')
        for row in spamreader:
            row[4] = hashlib.sha256(bytes(row[4], 'utf-8')).hexdigest()
            users.append(row)

    sqlUsers = "INSERT INTO User (id, email, phone, nom, mdp, age) " \
               "VALUES (%s, %s, %s, %s, %s, %s)"

    louer = []
    locataire = []
    with open('louer.csv', newline='') as csvfile:
        spamreader = csv.reader(csvfile, delimiter=',')
        for row in spamreader:
            louer.append(row)
            locataire.append(row[0])

    sqlLouer = "INSERT INTO Louer (id, id_logement, date_debut, date_fin) " \
               "VALUES (%s, %s, %s, %s)"
    sqlLocataire = "INSERT INTO Locataire (id) VALUES (%s)"

    cursor.executemany(sqlImmeubles, immeubles)
    cursor.executemany(sqlLogements, logements)
    cursor.executemany(sqlUsers, users)
    cursor.executemany(sqlLocataire, locataire)
    cursor.executemany(sqlLouer, louer)


if __name__ == '__main__':
    connection, cursor = db_connection()
    create_tables()
    create_triggers()
    init()

