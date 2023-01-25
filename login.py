from flask import Flask, render_template, request
import pymysql, pymysql.cursors

app = Flask(__name__)
ProfileUtilisateur = {}

@app.route("/")
def main():
    return render_template('login.html')
 

@app.route("/login", methods=['POST'])
def login():
    
    courriel = '"'+request.form.get('courriel')+'"'
    passe = request.form.get('motpasse')

    conn= pymysql.connect(host='localhost',user='root',                                                                 password='sirius3',db='testdb')
    cmd='SELECT motpasse FROM utilisateurs WHERE courriel='+courriel+';'
    cur=conn.cursor()
    cur.execute(cmd)
    passeVrai = cur.fetchone()

    if (passeVrai!=None) and (passe==passeVrai[0]):

        cmd='SELECT * FROM utilisateurs WHERE courriel='+courriel+';'
        cur=conn.cursor()
        cur.execute(cmd)
        info = cur.fetchone()

        global ProfileUtilisateur
        ProfileUtilisateur["courriel"]=courriel
        ProfileUtilisateur["nom"]=info[2]
        ProfileUtilisateur["avatar"]=info[3]
        return render_template('bienvenu.html', profile=ProfileUtilisateur)

    return render_template('login.html', message="Informations invalides!")
    

if __name__ == "__main__":
    app.run()


