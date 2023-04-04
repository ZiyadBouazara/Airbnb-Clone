from flask import Flask, render_template, request, jsonify
from database import insert_user, check_user_mdp

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "GET":
        return render_template("index.html") # TODO retourner le bon template pour le login
    else:

        data = request.json

        email = data["username"]
        mdp = data["password"]

        if check_user_mdp(email, mdp):
            response = {
                "status": 200
            }
        else:
            response = {
                "status": 403,
                "message": "Mauvaise informations de connexion"
            }

        return jsonify(response)


@app.route("/signin", methods=["POST"])
def login():
    if request.method == "POST":

        data = request.json

        email = data["username"]
        phone = data["phone"]
        nom = data["nom"]
        mdp = data["mdp"]
        age = data ["age"]

        insert_user(email, phone, nom, mdp, age)

        response = {
            "status": 200
        }

        return jsonify(response)




if __name__ == '__main__':
    app.run()

