import pymysql
import pymysql.cursors
from passlib.hash import pbkdf2_sha256

connection = pymysql.connect(
    host="localhost",
    user="root",
    password="abcdef",
    db="glo_2005_webapp",
    autocommit=True
)

cursor = connection.cursor(pymysql.cursors.DictCursor)


def insert_user(email, phone, nom, mdp, age):
    # Cette fonction insère un nouvel utilisateur dans la table Users
    hashed_mdp = pbkdf2_sha256.hash(mdp)
    sqlRequest = f"INSERT INTO User (id, email, phone, nom, age) VALUE (NULL, '{email}', '{phone}', '{nom}', {age});"
    cursor.execute(sqlRequest)
    sqlRequest = f"INSERT INTO safe (email, mdp) VALUE ('{email}', '{hashed_mdp}');"
    cursor.execute(sqlRequest)


def insert_favorite(logement_id, user_id):
    # Cette fonction insère un nouveau logement dans Aime
    sqlRequest = f"INSERT INTO Aime (id_logement, id) VALUE ({logement_id}, {user_id});"
    cursor.execute(sqlRequest)


def delete_favorite(logement_id, user_id):
    # Cette fonction insère un nouveau logement dans Aime
    sqlRequest = f"DELETE FROM Aime WHERE id_logement = {logement_id} AND id = {user_id};"
    cursor.execute(sqlRequest)


def check_user_mdp(email, mdp):
    # Cette fonction valide le mot de passe d'un utilisateur
    sqlRequest = f"SELECT mdp FROM safe WHERE email LIKE '{email}';"
    cursor.execute(sqlRequest)
    hashed_mdp = cursor.fetchone()
    if hashed_mdp:
        return pbkdf2_sha256.verify(mdp, hashed_mdp['mdp'])
    else:
        return False

def get_user_id(email):
    # Cette fonction retourne le id d'un user en fonction de son email
    sqlRequest = f"SELECT id FROM USER WHERE email LIKE '{email}';"
    cursor.execute(sqlRequest)
    user_id = cursor.fetchone()
    return user_id


def get_user_favorites(userId, search=None):
    # Cette fonction retourne les tuples des logements favoris d'un utilisateur
    if search:
        piecesIndex = f"SELECT * FROM Logement AS l INNER JOIN Aime AS a ON a.id_logement = l.id_logement WHERE pieces LIKE '{search}'"
        tailleIndex = f"SELECT * FROM Logement AS l INNER JOIN Aime AS a ON a.id_logement = l.id_logement WHERE taille LIKE '{search}'"
        priceIndex = f"SELECT * FROM Logement AS l INNER JOIN Aime AS a ON a.id_logement = l.id_logement WHERE price LIKE '{search}'"
        union = " UNION "
        sqlRequest = piecesIndex + union + tailleIndex + union + priceIndex + ';'
    else:
        sqlRequest = f"SELECT * FROM Logement AS l INNER JOIN Aime AS a ON a.id_logement = l.id_logement WHERE id = {userId};"
    cursor.execute(sqlRequest)
    logements_favoris = cursor.fetchall()
    return logements_favoris


def get_immeubles(immeubleId=None, search=None, typeImm=None):
    # Cette fonction retourne un ou plusieurs immeubles
    if immeubleId is not None:
        sqlRequest = f"SELECT i.*, l.price FROM Immeuble AS i INNER JOIN Logement AS l ON i.iid = l.contient WHERE i.iid = {immeubleId} AND l.price = (SELECT MIN(price) FROM Logement WHERE contient = l.contient);"
    elif typeImm and search:
        sqlRequest = f"SELECT i.*, l.price FROM Immeuble AS i INNER JOIN Logement AS l ON i.iid = l.contient WHERE type LIKE '{typeImm}';"
    elif search:
        if typeImm:
            t = f" AND type LIKE '{typeImm}'"
            typeIndex = ""
        else:
            t = ""
            typeIndex = f" UNION SELECT i.*, l.price FROM Immeuble AS i INNER JOIN Logement AS l ON i.iid = l.contient WHERE type LIKE '{search}'"

        addresseIndex = f"SELECT i.*, l.price FROM Immeuble AS i INNER JOIN Logement AS l ON i.iid = l.contient WHERE address LIKE '{search}'"
        nomIndex = f"SELECT i.*, l.price FROM Immeuble AS i INNER JOIN Logement AS l ON i.iid = l.contient WHERE nom LIKE '{search}'"
        secteurIndex = f"SELECT i.*, l.price FROM Immeuble AS i INNER JOIN Logement AS l ON i.iid = l.contient WHERE secteur LIKE '{search}'"
        union = " UNION "
        sqlRequest = addresseIndex+t+union+nomIndex+t+union+secteurIndex+t+typeIndex+';'
    else:
        sqlRequest = "SELECT i.*, l.price FROM Immeuble AS i INNER JOIN Logement AS l ON i.iid = l.contient WHERE l.price = (SELECT MIN(price) FROM Logement WHERE contient = l.contient);"
    cursor.execute(sqlRequest)
    immeubles = cursor.fetchall()
    return immeubles


def get_logements(immeubleId, logementId=None, search=None):
    # Cette fonction retourne un ou plusieurs logements
    if logementId is not None:
        sqlRequest = f"SELECT * FROM Logement WHERE contient = {immeubleId} AND id_logement = {logementId};"
    elif search:
        piecesIndex = f"SELECT * FROM Logement WHERE contient = {immeubleId} AND pieces LIKE '{search}'"
        tailleIndex = f"SELECT * FROM Logement WHERE contient = {immeubleId} AND taille LIKE '{search}'"
        priceIndex = f"SELECT * FROM Logement WHERE contient = {immeubleId} AND price LIKE '{search}'"
        union = " UNION "
        sqlRequest = piecesIndex+union+tailleIndex+union+priceIndex+';'
    else:
        sqlRequest = f"SELECT * FROM Logement WHERE contient = {immeubleId};"
    print(sqlRequest)
    cursor.execute(sqlRequest)
    logements = cursor.fetchall()
    return logements


def get_users(userId=None):
    # Cette fonction retourne un ou plusieurs users
    if userId is not None:
        sqlRequest = f"SELECT * FROM User WHERE id = {userId};"
    else:
        sqlRequest = "SELECT * FROM User;"
    cursor.execute(sqlRequest)
    users = cursor.fetchall()
    return users

def get_locations(userId):
    # Cette fonction retourne les locations d'un user
    sqlRequest = f"SELECT lou.*, log.* FROM LOUER AS lou INNER JOIN Logement AS log ON lou.id_logement = log.id_logement WHERE id = {userId}"
    cursor.execute(sqlRequest)
    locations = cursor.fetchall()
    return locations

def insert_location(userId, logementId, dateDebut, dateFin):
    # Cette fonction insère une nouvelle location dans louer
    sqlRequest = f"INSERT INTO Louer (id, id_logement, date_debut, date_fin) VALUE ({userId}, {logementId}, '{dateDebut}', '{dateFin}');"
    cursor.execute(sqlRequest)

def delete_location(userId, logementId):
    # Cette fonction enleve une location dans louer
    sqlRequest = f"DELETE FROM Louer WHERE id = {userId} AND id_logement = {logementId};"
    cursor.execute(sqlRequest)

if __name__ == '__main__':
    print(get_logements("1", None, "2199"))
    print(get_users())
    print(get_user_id("nsarark@clickbank.net"))
    print(get_logements("1"))
    print(get_immeubles(1, None, "Condo/Loft"))
    insert_location(1, 1, "2023-04-14", "2024-04-14")
    print(getLocations(1))
    delete_location(1, 1)