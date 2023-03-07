import pymysql, pymysql.cursors

connection = pymysql.connect(
    host="localhost",
    user="root",
    password="!@##@!Ziyo",
    db="glo_2005_webapp",
    autocommit=True
)

cursor = connection.cursor()




if __name__ == '__main__':
    # create_table = "CREATE TABLE Immeubles(name VARCHAR(50), secteur VARCHAR(50), address VARCHAR(50), " \
    #                "type VARCHAR(50), hot_water TINYINT, electricity TINYINT, wifi TINYINT, " \
    #                "parking TINYINT, gym TINYINT, backyard TINYINT, elevator TINYINT, pool TINYINT, " \
    #                "ev_charger TINYINT, air_conditioner TINYINT, PRIMARY KEY(name));"
     create_table2 = "CREATE TABLE Locataires(id_locataire VARCHAR(50), email VARCHAR(50), phone VARCHAR(50), name VARCHAR(50), age INTEGER, PRIMARY KEY(id_locataire));"
                    #"CREATE TABLE Logements(id_logement VARCHAR(50), available TINYINT, price INTEGER," \
                     #" taille VARCHAR(50), number INTEGER, PRIMARY KEY(id_logement));" \

    cursor.execute(create_table2)
    #cursor.execute(create_table)

