import pymysql, pymysql.cursors
import csv

connection = pymysql.connect(
    host="localhost",
    user="root",
    password="!@##@!Ziyo",
    db="glo_2005_webapp",
    autocommit=True
)

cursor = connection.cursor()


if __name__ == '__main__':


