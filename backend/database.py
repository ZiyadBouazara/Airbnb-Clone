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
    hashed_mdp = pbkdf2_sha256.hash(mdp)
    sqlRequest = f"INSERT INTO users (id, email, phone, nom, mdp, age) VALUE (NULL, '{email}', '{phone}', '{nom}', '{hashed_mdp}', '{age}');"
    cursor.execute(sqlRequest)


def check_user_mdp(email, mdp):
    sqlRequest = f"SELECT mdp FROM User WHERE email = '{email}';"
    cursor.execute(sqlRequest)
    hashed_mdp = cursor.fetchone()[0]
    return pbkdf2_sha256.verify(mdp, hashed_mdp)


if __name__ == '__main__':


