from flask import Flask, render_template, request, jsonify
from database import insert_user, check_user_mdp, get_user_favorites, get_immeubles

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")

@app.route("/login", methods=["POST"])
def login():
    # Valide le mot de passe d'un utilisateur
    # Retourne : status : 200 pour un mot de passe valide
    #               ou
    #            status : 403 pour un mot de passe non valide

    if request.method == "POST":

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


@app.route("/users/<user_id>/favorites", methods=["GET"])
def getFavorites(user_id):
    # Fonction qui retourne les logements favoris d'un utilisateur
    # Retourne status : 200 pour un succès
    #          favoris : tuples des logements favoris
    #               ou
    #          status : 204 pour un succès, mais l'utilisateur n'a pas de logements favoris
    #          favoris : tuples des logements favoris (vide)

    if request.method == "GET":

        logements_favoris = get_user_favorites(user_id)
        if logements_favoris:
            response = {
                "status": 200,
                "favoris": f"{logements_favoris}"
            }
        else:
            response = {
                "status": 204,
                "favoris": f"{logements_favoris}"
            }
        return jsonify(response)

@app.route("/signin", methods=["POST"])
def signin():
    # Insère un nouvel utilisateur dans la base de données
    # Retourne status : 201 pour un succès
    if request.method == "POST":

        data = request.json

        email = data["username"]
        phone = data["phone"]
        nom = data["nom"]
        mdp = data["mdp"]
        age = data ["age"]

        insert_user(email, phone, nom, mdp, age)

        response = {
            "status": 201
        }

        return jsonify(response)

@app.route("/immeubles", methods=["GET"])
def getImmeubles():
    # Fonction qui retourne tous les immeubles
    # Retourne status : 200 pour un succès
    #          immeubles : tuples des immeubles
    #               ou
    #          status : 204 pour un succès, mais il n'y a pas d'immeubles
    #          immeubles : tuples des immeubles (vide)
    if request.method == "GET":
        immeubles = get_immeubles()
        if immeubles:
            response = {
                "status": 200,
                "immeubles": f"{immeubles}"
            }
        else:
            response = {
                "status": 204,
                "immeubles": f"{immeubles}"
            }
        return jsonify(response)

@app.route("/immeubles/<immeuble_id>", methods=["GET"])
def getImmeuble(immeuble_id):
    # Fonction qui retourne le tuple d'un immeuble en fonction de son adresse
    # Retourne status : 200 pour un succès
    #          immeuble : tuples de l'immeuble
    #               ou
    #          status : 204 pour un succès, mais il n'y a pas d'immeuble a cette adresse
    #          immeuble : tuples de l'immeuble (vide)
    if request.method == "GET":
        immeuble = get_immeubles(immeuble_id)
        if immeuble:
            response = {
                "status": 200,
                "immeuble": f"{immeuble}"
            }
        else:
            response = {
                "status": 204,
                "immeuble": f"{immeuble}"
            }
        return jsonify(response)


if __name__ == '__main__':
    app.run()

