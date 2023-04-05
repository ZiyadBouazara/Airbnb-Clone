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
    sqlRequest = f"INSERT INTO User (id, email, phone, nom, mdp, age) VALUE (NULL, '{email}', '{phone}', '{nom}', '{hashed_mdp}', '{age}');"
    cursor.execute(sqlRequest)



def check_user_mdp(email, mdp):
    # Cette fonction valide le mot de passe d'un utilisateur
    sqlRequest = f"SELECT mdp FROM User WHERE email = '{email}';"
    cursor.execute(sqlRequest)
    hashed_mdp = cursor.fetchone()[0]
    return pbkdf2_sha256.verify(mdp, hashed_mdp)

def get_user_favorites(userId):
    # Cette fonction retourne les tuples des logements favoris d'un utilisateur
    sqlRequest = f"SELECT * FROM Logement AS l INNER JOIN Aime AS a ON a.id_logement = l.id_logement WHERE id = '{userId}';"
    cursor.execute(sqlRequest)
    logements_favoris = cursor.fetchone()[0]
    return logements_favoris

def get_immeubles(immeubleAdresse=None):
    # Cette fonction retourne un ou plusieurs immeubles
    if immeubleAdresse is not None:
        sqlRequest = f"SELECT * FROM Immeuble WHERE address = '{immeubleAdresse}';"
    else:
        sqlRequest = "SELECT * FROM Immeuble;"
    cursor.execute(sqlRequest)
    immeubles = cursor.fetchone()[0]
    return immeubles



if __name__ == '__main__':


