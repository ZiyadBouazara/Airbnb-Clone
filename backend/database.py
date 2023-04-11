import pymysql, pymysql.cursors
from passlib.hash import pbkdf2_sha256

connection = pymysql.connect(
    host="localhost",
    user="root",
    password="abcdef",
    db="glo_2005_webapp",
    autocommit=True
)

cursor = connection.cursor()

def insert_user(email, phone, nom, mdp, age):
    # Cette fonction insère un nouvel utilisateur dans la table Users
    hashed_mdp = pbkdf2_sha256.hash(mdp)
    sqlRequest = f"INSERT INTO User (id, email, phone, nom, age) VALUE (NULL, '{email}', '{phone}', '{nom}', '{age}');"
    cursor.execute(sqlRequest)
    sqlRequest = f"INSERT INTO safe (email, mdp) VALUE ('{email}', '{hashed_mdp}');"
    cursor.execute(sqlRequest)

def insert_favorite(logement_id, user_id):
    # Cette fonction insère un nouveau logement dans Aime
    sqlRequest = f"INSERT INTO Aime (id_logement, id) VALUE ('{logement_id}', '{user_id}');"
    cursor.execute(sqlRequest)

def delete_favorite(logement_id, user_id):
    # Cette fonction insère un nouveau logement dans Aime
    sqlRequest = f"DELETE FROM Aime (id_logement, id) WHERE id_logement = logement_id AND id = user_id;"
    cursor.execute(sqlRequest)

def check_user_mdp(email, mdp):
    # Cette fonction valide le mot de passe d'un utilisateur
    sqlRequest = f"SELECT mdp FROM safe WHERE email = '{email}';"
    cursor.execute(sqlRequest)
    hashed_mdp = cursor.fetchone()[0]
    return pbkdf2_sha256.verify(mdp, hashed_mdp)

def get_user_favorites(userId):
    # Cette fonction retourne les tuples des logements favoris d'un utilisateur
    sqlRequest = f"SELECT * FROM Logement AS l INNER JOIN Aime AS a ON a.id_logement = l.id_logement WHERE id = '{userId}';"
    cursor.execute(sqlRequest)
    logements_favoris = cursor.fetchone()[0]
    return logements_favoris

def get_immeubles(immeubleId=None):
    # Cette fonction retourne un ou plusieurs immeubles
    if immeubleId is not None:
        sqlRequest = f"SELECT i.*, l.price FROM Immeuble AS i INNER JOIN Logement AS l ON i.iid = l.contient WHERE i.iid = '{immeubleId}' AND l.price = (SELECT MIN(price) FROM Logement WHERE contient = l.contient);"
    else:
        sqlRequest = "SELECT * FROM Immeuble;"
    cursor.execute(sqlRequest)
    immeubles = cursor.fetchone()[0]
    return immeubles

def get_logements(immeubleId, logementId=None):
    # Cette fonction retourne un ou plusieurs logements
    if logementId is not None:
        sqlRequest = f"SELECT * FROM Logement WHERE contient = '{immeubleId}' AND id_logement = '{logementId}';"
    else:
        sqlRequest = f"SELECT * FROM Logement WHERE contient = '{immeubleId}';"
    cursor.execute(sqlRequest)
    logements = cursor.fetchone()[0]
    return logements

def get_users(userId=None):
    # Cette fonction retourne un ou plusieurs users
    if userId is not None:
        sqlRequest = f"SELECT * FROM User WHERE id = '{userId}';"
    else:
        sqlRequest = "SELECT * FROM User;"
    cursor.execute(sqlRequest)
    users = cursor.fetchone()[0]
    return users



if __name__ == '__main__':


