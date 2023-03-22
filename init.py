import pymysql.cursors
import csv

connection = pymysql.connect(
    host="localhost",
    user="root",
    password="!@##@!Ziyo",
    db="glo_2005_webapp",
    autocommit=True
)

cursor = connection.cursor()

#def create_tables():
#    r1 = "CREATE TABLE ..."

#def create_triggers():
#    pass

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
#    create_tables()
#    create_triggers()
    init()