USE glo_2005_webapp;

CREATE TABLE IF NOT EXISTS Immeuble(address VARCHAR(30), secteur VARCHAR(20), nom VARCHAR(50),
type ENUM('Condo/Loft', 'Appartements', 'Commercial'), hot_water TINYINT, electricity TINYINT,
wifi TINYINT, parking TINYINT, gym TINYINT, backyard TINYINT, elevator TINYINT, pool TINYINT, ev_charger TINYINT,
air_conditioner TINYINT, terrasse TINYINT,
PRIMARY KEY(address));

CREATE TABLE IF NOT EXISTS Logement(id_logement VARCHAR(50), contient varchar(30) NOT NULL, available TINYINT, pieces VARCHAR(50), taille VARCHAR(10), numero INTEGER,
UNIQUE(contient, numero),
PRIMARY KEY(id_logement),
FOREIGN KEY (contient) REFERENCES Immeuble(address) ON UPDATE CASCADE ON DELETE CASCADE);

CREATE TABLE IF NOT EXISTS User(id VARCHAR(50), email VARCHAR(50), phone VARCHAR(15), nom VARCHAR(50), age INTEGER,
UNIQUE(email), UNIQUE(nom, age),
PRIMARY KEY(id),
CONSTRAINT age_legal CHECK ( age BETWEEN 18 AND 112));

CREATE TABLE IF NOT EXISTS Locataire(id VARCHAR(50), email VARCHAR(50), phone VARCHAR(15), nom VARCHAR(50), age INTEGER,
PRIMARY KEY (id),
UNIQUE (email), UNIQUE (nom, age),
FOREIGN KEY (id) REFERENCES User(id) ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (email) REFERENCES User(email) ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (phone) REFERENCES User(phone) ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (nom) REFERENCES User(nom) ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (age) REFERENCES User(age) ON UPDATE CASCADE ON DELETE CASCADE);

CREATE TABLE Louer(id varchar(50), id_logement varchar(50), date_debut DATE, date_fin DATE,
PRIMARY KEY(id_logement, id),
FOREIGN KEY (id) REFERENCES Locataire(id) ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (id_logement) REFERENCES Logement(id_logement) ON UPDATE CASCADE ON DELETE CASCADE);

CREATE TABLE Aime(id_logement varchar(50), id varchar(50),
PRIMARY KEY(id_logement, id),
FOREIGN KEY (id_logement) REFERENCES Logement(id_logement) ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (id) REFERENCES User(id) ON UPDATE CASCADE ON DELETE CASCADE);

CREATE TABLE Contient(address varchar(50), id_logement varchar(50), price INTEGER,
PRIMARY KEY(address, id_logement),
FOREIGN KEY (address) REFERENCES Immeuble(address) ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (id_logement) REFERENCES Logement(id_logement) ON UPDATE CASCADE ON DELETE CASCADE);

DELIMITER //
CREATE TRIGGER AjoutLocataire
AFTER INSERT ON Locataire
FOR EACH ROW
BEGIN
    INSERT INTO Louer(id)
    VALUES (NEW.id);
END //
DELIMITER ;
# Cette trigger ajoute immediatement un tuple dans Louer lorsque un tuple Locataire est ajoute.
# L'ajoute de la maniere suivant : (id_locataire, null, null, null)
# Donc il reste a aller chercher les dates de locations et le id_logement a ajouter au tuple


DELIMITER //
CREATE TRIGGER EndOfLocation
    AFTER DELETE ON Louer
    FOR EACH ROW
    BEGIN
        UPDATE Logement
            SET available = TRUE
            WHERE Logement.id_logement = OLD.id_logement;

        IF (SELECT COUNT (*) FROM Louer WHERE id = OLD.id) = 1
        THEN
            DELETE FROM Locataire WHERE Locataire.id = OLD.id;
        END IF ;
    END //
    DELIMITER ;
# Cette trigger verifie apres avoir supprimer un tuple de Louer si le locataire possede une autre location.
# Si il n'en a pas d'autre, alors il n'est plus un locataire donc on le supprime de la Table Locataire
# Si il possede une autre location, alors on fait rien car il est encore un locataire
# + On set a available le logement qui a ete libere par le locataire dans tout les cas

DELIMITER //
CREATE TRIGGER AjoutImmeuble
    AFTER INSERT ON Immeuble
    FOR EACH ROW
    BEGIN
        INSERT INTO Contient(address)
            VALUES (NEW.address);
    END //
    DELIMITER ;
# Cette trigger ajoute immediatement un tuple dans Contient lorsque un tuple Immeuble est ajoute.
# L'ajoute de la maniere suivant : (address, null, null)
# Donc il reste a aller chercher le id_logement de Logement et le prix reste a etre fixe

show tables;

DELIMITER //
CREATE TRIGGER AucunLogementVerif
    BEFORE DELETE ON Contient
    FOR EACH ROW
    BEGIN

        IF (SELECT COUNT (*) FROM Contient WHERE address = OLD.address) = 1
        THEN
            SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'Cette immeuble ne possède plus de logements ni de revenus.';
        END IF ;
    END //
    DELIMITER ;
#Avant de supprimer le dernier logement d'un immeuble, on signale que c'est le dernier et que l'immeuble n'est plus profitable.
#En tant que telle on va seulement supprimer un logement de notre immeuble si par exemple on decide de faire des
# renovations et enlever des logements. Donc c'est une precaution.

#Pour Locataire/Louer et Immeuble/Contient: Solution avec gachette de Participation Totale

# Avant supression d'un tuple dans Louer on regarde si il existe un autre tuple pour le locataire.
# Si c'est le dernier et que son bail est fini, on le supprime de Locataire et Louer et le tuple de Logement redevient available

# Il faut stocker les MDP des Users dans une nouvelle relation completement a part entiere
