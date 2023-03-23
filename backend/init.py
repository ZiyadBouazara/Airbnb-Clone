import pymysql, pymysql.cursors
import csv


def db_connection():
    conn = pymysql.connect(
        host="localhost",
        user="root",
        password="Caliss1925",
        db="glo_2005_webapp",
        autocommit=True
    )
    c = conn.cursor()
    return conn, c


def create_tables():
    r1 = "CREATE TABLE IF NOT EXISTS Immeuble(address VARCHAR(30), nombre_logements INTEGER, secteur VARCHAR(20)," \
         " nom VARCHAR(50), type ENUM('Condo/Loft', 'Appartements', 'Commercial'), hot_water TINYINT(1)," \
         " electricity TINYINT(1), wifi TINYINT(1), parking TINYINT(1), gym TINYINT(1), backyard TINYINT(1)," \
         " elevator TINYINT(1), pool TINYINT(1), ev_charger TINYINT(1), air_conditioner TINYINT(1)," \
         " terrasse TINYINT(1), PRIMARY KEY(address));"

    r2 = "CREATE TABLE IF NOT EXISTS Logement(id_logement VARCHAR(50), contient varchar(30) NOT NULL," \
         " available TINYINT(1), pieces VARCHAR(50), taille VARCHAR(10), numero INTEGER, UNIQUE(contient, numero)," \
         " PRIMARY KEY(id_logement)," \
         " FOREIGN KEY (contient) REFERENCES Immeuble(address) ON UPDATE CASCADE ON DELETE CASCADE);"

    r3 = "CREATE TABLE IF NOT EXISTS User(id VARCHAR(50), email VARCHAR(50), phone VARCHAR(15), nom VARCHAR(50)," \
         " age INTEGER, UNIQUE(email), UNIQUE(nom, age), PRIMARY KEY(id), " \
         "CONSTRAINT age_legal CHECK ( age BETWEEN 18 AND 112));"

    r4 = "CREATE TABLE IF NOT EXISTS Locataire(id VARCHAR(50), email VARCHAR(50), phone VARCHAR(15), nom VARCHAR(50)," \
         " age INTEGER,PRIMARY KEY (id),UNIQUE (email), UNIQUE (nom, age)," \
         "FOREIGN KEY (id) REFERENCES User(id) ON UPDATE CASCADE ON DELETE CASCADE," \
         "FOREIGN KEY (email) REFERENCES User(email) ON UPDATE CASCADE ON DELETE CASCADE," \
         "FOREIGN KEY (phone) REFERENCES User(phone) ON UPDATE CASCADE ON DELETE CASCADE," \
         "FOREIGN KEY (nom) REFERENCES User(nom) ON UPDATE CASCADE ON DELETE CASCADE," \
         "FOREIGN KEY (age) REFERENCES User(age) ON UPDATE CASCADE ON DELETE CASCADE);"

    r5 = "CREATE TABLE Louer(id varchar(50), id_logement varchar(50), date_debut DATE, date_fin DATE," \
         "PRIMARY KEY(id_logement, id)," \
         "FOREIGN KEY (id) REFERENCES Locataire(id) ON UPDATE CASCADE ON DELETE CASCADE," \
         "FOREIGN KEY (id_logement) REFERENCES Logement(id_logement) ON UPDATE CASCADE ON DELETE CASCADE);"

    r6 = "CREATE TABLE Aime(id_logement varchar(50), id varchar(50)," \
         "PRIMARY KEY(id_logement, id)," \
         "FOREIGN KEY (id_logement) REFERENCES Logement(id_logement) ON UPDATE CASCADE ON DELETE CASCADE," \
         "FOREIGN KEY (id) REFERENCES User(id) ON UPDATE CASCADE ON DELETE CASCADE);"

    r7 = "CREATE TABLE Contient(address varchar(50), id_logement varchar(50), price INTEGER," \
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
    t1 = "DELIMITER //" \
         "CREATE TRIGGER AjoutLocataire" \
         "AFTER INSERT ON Locataire" \
         "FOR EACH ROW" \
         "BEGIN" \
         "  INSERT INTO Louer(id)" \
         "  VALUES (NEW.id);" \
         "END //" \
         "DELIMITER ;"
    # Cette trigger ajoute immediatement un tuple dans Louer lorsque un tuple Locataire est ajoute.
    # L'ajoute de la maniere suivant : (id_locataire, null, null, null)
    # Donc il reste a aller chercher les dates de locations et le id_logement a ajouter au tuple

    t2 = "DELIMITER //" \
         "CREATE TRIGGER EndOfLocation" \
         "  AFTER DELETE ON Louer" \
         "  FOR EACH ROW" \
         "  BEGIN" \
         "      UPDATE Logement" \
         "          SET available = 1" \
         "          WHERE Logement.id_logement = OLD.id_logement;" \
         "  IF (SELECT COUNT (*) FROM Louer WHERE id = OLD.id) = 1" \
         "  THEN" \
         "      DELETE FROM Locataire WHERE Locataire.id = OLD.id;" \
         "  END IF ;" \
         "END //" \
         "DELIMITER ;"
    # Cette trigger verifie apres avoir supprimer un tuple de Louer si le locataire possede une autre location.
    # Si il n'en a pas d'autre, alors il n'est plus un locataire donc on le supprime de la Table Locataire
    # Si il possede une autre location, alors on fait rien car il est encore un locataire
    # + On set a available le logement qui a ete libere par le locataire dans tout les cas

    t3 ="DELIMITER //" \
        "CREATE TRIGGER AjoutImmeuble" \
        "    AFTER INSERT ON Immeuble" \
        "    FOR EACH ROW" \
        "    BEGIN" \
        "        DECLARE counter INT;" \
        "        SET counter = 1;" \
        "        boucleCounter: WHILE (counter != (NEW.nombre_logements + 1)) DO" \
        "            INSERT INTO Logement(id_logement, contient, available, pieces, taille, numero)" \
        "            VALUES (createIDLogement(NEW.address, counter), NEW.address, 1, getPieces(), getTaille(), counter);" \
        "            SET counter = counter + 1;" \
        "            END WHILE boucleCounter ;" \
        "    END //" \
        "    DELIMITER ;"
    # Cette trigger ajoute immediatement des tuples (selon le nombre_logement) dans Logement lorsque un tuple Immeuble est ajoute.
    # Donc plus simplement, elle ajoute les logements de l'immeuble numerote de 1 au nombre_logement.

    t4 ="DELIMITER //" \
        "CREATE TRIGGER AjoutLogement" \
        "    AFTER INSERT ON Logement" \
        "    FOR EACH ROW" \
        "    BEGIN" \
        "        INSERT INTO Contient(address, id_logement, price) VALUES (NEW.contient, NEW.id_logement, getPrice());" \
        "    END //" \
        "    DELIMITER ;"
    # Cette trigger ajoute immediatement apres un ajout de logement le tuple unique de ce logement a Contient
    # Donc AjoutImmeuble et AjoutLogement travaillent ensemble
    # exemple :
    # on ajoute un nouvel immeuble -> Trigger AjoutImmeuble ajoute les logements a Logement
    # -> pour chaque ajout de logement AjoutLogement ajoute le tuple a Contient

    t5 ="DELIMITER //" \
        "CREATE TRIGGER AucunLogementVerif" \
        "    BEFORE DELETE ON Contient" \
        "    FOR EACH ROW" \
        "    BEGIN" \
        "        IF (SELECT COUNT (*) FROM Contient WHERE address = OLD.address) = 1" \
        "        THEN" \
        "            SIGNAL SQLSTATE '45000'" \
        "            SET MESSAGE_TEXT = 'Cette immeuble ne possède plus de logements ni de revenus.';" \
        "        END IF ;" \
        "    END //" \
        "    DELIMITER ;"
    #Avant de supprimer le dernier logement d'un immeuble, on signale que c'est le dernier et que l'immeuble n'est plus profitable.
    #En tant que telle on va seulement supprimer un logement de notre immeuble si par exemple on decide de faire des
    # renovations et enlever des logements. Donc c'est une precaution.

    t6 ="DELIMITER //" \
        "CREATE TRIGGER ImmeubleExisteVerif" \
        "    BEFORE INSERT ON Contient" \
        "    FOR EACH ROW" \
        "    BEGIN" \
        "        IF (SELECT COUNT (*) FROM Immeuble WHERE Immeuble.address = NEW.address) = 0" \
        "        THEN" \
        "            SIGNAL SQLSTATE '45000'" \
        "            SET MESSAGE_TEXT = 'Cette immeuble nexiste pas.';" \
        "        END IF ;" \
        "    END //" \
        "    DELIMITER ;"
    #Avant d'ajouter un tuple a Contient, on s'assure que l'immeuble pour lequel on ajoute ces tuples existes. On ne doit jamais avoir des logements sans Immeuble.
    # ADD ORDER : 1-Immeuble, 2-Contient, 3-Logements
    # DELETE ORDER: 1-Immeuble -> Cascade (Les tuples dans contient et logements seront automatiquement supprime)
    # Si on supprime un Logement, les tuples dans Contient de ce logement seront supprime automatiquement

    # TODO: Fonction qui cree un id_logement a laquelle on peut faire appel. Par exemple, une fois qu'on ajoute un immeuble a 36 logements,
    #  la trigger AjoutImmeuble doit ajoute automatique tout les tuples a Logement ENSUITE a Contient et les logements numerote de 1 a 36 avec des tailles, pieces, random et tous available.
    #  Pour le id_logement, on fera appel a la fonction qui les cree pour chacun en utilisant l'adresse du logement et le numero du logement (adresse, numero)
    # *TO DO: Create the following functions : createIDLogement(address, numero), getPieces(), getTaille(), getPrice()
    # createID()

    cursor.execute(t1)
    cursor.execute(t2)
    cursor.execute(t3)
    cursor.execute(t4)
    cursor.execute(t5)
    cursor.execute(t6)


def init():
    immeubles = []
    with open('immeubles.csv', newline='') as csvfile:
        spamreader = csv.reader(csvfile, delimiter=' ', quotechar='|')
        for row in spamreader:
            immeubles.append(row)

    sqlImmeubles = "INSERT INTO Immeuble (address, nombre_logements, secteur, nom, type, hot_water, electricity," \
                   "wifi, parking, gym, backyard, elevator, pool, ev_charger, air_conditioner, terrasse) " \
                   "VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"

    logements = []
    with open('logements.csv', newline='') as csvfile:
        spamreader = csv.reader(csvfile, delimiter=' ', quotechar='|')
        for row in spamreader:
            logements.append(row)

    sqlLogements = "INSERT INTO Logement (id_logement, contient, available, pieces, taille, numero) " \
                   "VALUES (%s, %s, %s, %s, %s, %s)"

    users = []
    with open('users.csv', newline='') as csvfile:
        spamreader = csv.reader(csvfile, delimiter=' ', quotechar='|')
        for row in spamreader:
            users.append(row)

    sqlUsers = "INSERT INTO User (id, email, phone, nom, age) " \
               "VALUES (%s, %s, %s, %s, %s)"

    cursor.executemany(sqlImmeubles, immeubles)
    cursor.executemany(sqlLogements, logements)
    cursor.executemany(sqlUsers, users)


if __name__ == '__main__':
    connection, cursor = db_connection()
    create_tables()
    create_triggers()
    init()

