USE glo_2005_webapp;

CREATE TABLE IF NOT EXISTS Immeuble(address VARCHAR(50), secteur VARCHAR(50), nom VARCHAR(50), type VARCHAR(50), hot_water TINYINT,
electricity TINYINT, wifi TINYINT, parking TINYINT, gym TINYINT, backyard TINYINT,
elevator TINYINT, pool TINYINT, ev_charger TINYINT, air_conditioner TINYINT, PRIMARY KEY(address));

CREATE TABLE IF NOT EXISTS Logement(id_logement VARCHAR(50), contient varchar(50) NOT NULL, available TINYINT, price INTEGER, taille VARCHAR(50), numero INTEGER,
PRIMARY KEY(id_logement), FOREIGN KEY (contient) REFERENCES Immeuble(address) ON UPDATE CASCADE ON DELETE CASCADE);

CREATE TABLE IF NOT EXISTS Locataire(id_locataire VARCHAR(50), email VARCHAR(50), phone VARCHAR(50), nom VARCHAR(50), age INTEGER,
UNIQUE(email), UNIQUE(nom, age), PRIMARY KEY(id_locataire));

CREATE TABLE IF NOT EXISTS User(id_user VARCHAR(50), user_email VARCHAR(50), UNIQUE (user_email), PRIMARY KEY(id_user));

CREATE TABLE Louer(id_locataire varchar(50), id_logement varchar(50), date_debut DATE, date_fin DATE,
PRIMARY KEY(id_logement, id_locataire), FOREIGN KEY (id_locataire) REFERENCES Locataire(id_locataire) ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (id_logement) REFERENCES Logement(id_logement) ON UPDATE CASCADE ON DELETE CASCADE);

CREATE TABLE Aime(id_logement varchar(50), id_user varchar(50), PRIMARY KEY(id_logement, id_user),
FOREIGN KEY (id_logement) REFERENCES Logement(id_logement) ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (id_user) REFERENCES User(id_user) ON UPDATE CASCADE ON DELETE CASCADE);

CREATE TABLE Contient(address varchar(50), id_logement varchar(50), PRIMARY KEY(address, id_logement),
FOREIGN KEY (address) REFERENCES Immeuble(address) ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (id_logement) REFERENCES Logement(id_logement) ON UPDATE CASCADE ON DELETE CASCADE);


show tables;

#Immeuble type doit etre changer en un Enum (condo, appartement, commercial, achat-maison, ...)

#Pour Locataire/Louer et Immeuble/Contient: Solution avec gachette de Participation Totale

# Apres insertion d'un locataire on ajoute automatiquement a la relation Louer.

# Avant supression d'un tuple dans Louer on regarde si il existe un autre tuple pour le locataire.
# Si c'est le dernier et que son bail est fini, on le supprime de Locataire et Louer et le tuple de Logement redevient available
