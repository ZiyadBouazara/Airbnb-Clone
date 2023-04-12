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
    sqlRequest = f"DELETE FROM Aime WHERE id_logement = '{logement_id}' AND id = '{user_id}';"
    cursor.execute(sqlRequest)


def check_user_mdp(email, mdp):
    # Cette fonction valide le mot de passe d'un utilisateur
    sqlRequest = f"SELECT mdp FROM safe WHERE email = '{email}';"
    cursor.execute(sqlRequest)
    hashed_mdp = cursor.fetchone()
    if hashed_mdp:
        return pbkdf2_sha256.verify(mdp, hashed_mdp['mdp'])
    else:
        return False


def get_user_favorites(userId):
    # Cette fonction retourne les tuples des logements favoris d'un utilisateur
    sqlRequest = f"SELECT * FROM Logement AS l INNER JOIN Aime AS a ON a.id_logement = l.id_logement WHERE id = '{userId}';"
    cursor.execute(sqlRequest)
    logements_favoris = cursor.fetchall()
    return logements_favoris


def get_immeubles(immeubleId=None, query=None):
    # Cette fonction retourne un ou plusieurs immeubles
    if immeubleId is not None:
        sqlRequest = f"SELECT i.*, l.price FROM Immeuble AS i INNER JOIN Logement AS l ON i.iid = l.contient WHERE i.iid = '{immeubleId}' AND l.price = (SELECT MIN(price) FROM Logement WHERE contient = l.contient);"
    elif query is not None:
        addresseIndex = f"SELECT * FROM Immeuble WHERE address LIKE '{query}'"
        nomIndex = f"SELECT * FROM Immeuble WHERE nom LIKE '{query}'"
        secteurIndex = f"SELECT * FROM Immeuble WHERE secteur LIKE '{query}'"
        union = " UNION "
        sqlRequest = addresseIndex+union+nomIndex+union+secteurIndex+';'
    else:
        sqlRequest = "SELECT i.*, l.price FROM Immeuble AS i INNER JOIN Logement AS l ON i.iid = l.contient WHERE l.price = (SELECT MIN(price) FROM Logement WHERE contient = l.contient);"
    cursor.execute(sqlRequest)
    immeubles = cursor.fetchall()
    return immeubles


def get_logements(immeubleId, logementId=None):
    # Cette fonction retourne un ou plusieurs logements
    if logementId is not None:
        sqlRequest = f"SELECT * FROM Logement WHERE contient = '{immeubleId}' AND id_logement = '{logementId}';"
    else:
        sqlRequest = f"SELECT * FROM Logement WHERE contient = '{immeubleId}';"
    cursor.execute(sqlRequest)
    logements = cursor.fetchall()
    return logements


def get_users(userId=None):
    # Cette fonction retourne un ou plusieurs users
    if userId is not None:
        sqlRequest = f"SELECT * FROM User WHERE id = '{userId}';"
    else:
        sqlRequest = "SELECT * FROM User;"
    cursor.execute(sqlRequest)
    users = cursor.fetchall()
    return users


if __name__ == '__main__':

