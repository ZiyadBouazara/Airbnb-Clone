USE glo_2005_webapp;

CREATE TABLE IF NOT EXISTS Immeubles(name VARCHAR(50), secteur VARCHAR(50), address VARCHAR(50), type VARCHAR(50), hot_water TINYINT,
electricity TINYINT, wifi TINYINT, parking TINYINT, gym TINYINT, backyard TINYINT,
elevator TINYINT, pool TINYINT, ev_charger TINYINT, air_conditioner TINYINT, PRIMARY KEY(name));

CREATE TABLE IF NOT EXISTS Logements(id_logement VARCHAR(50), available TINYINT, price INTEGER, taille VARCHAR(50), number INTEGER, PRIMARY KEY(id_logement));

CREATE TABLE IF NOT EXISTS Locataires(id_locataire VARCHAR(50), email VARCHAR(50), phone VARCHAR(50), name VARCHAR(50), age INTEGER, PRIMARY KEY(id_locataire));
show tables;
