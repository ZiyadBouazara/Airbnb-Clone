from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from database import insert_user, check_user_mdp, get_user_favorites, get_immeubles, get_logements, get_users,\
    insert_favorite, delete_favorite, get_user_id, get_locations

app = Flask(__name__)
CORS(app)


@app.route("/login", methods=["POST"])
def login():
    # Valide le mot de passe d'un utilisateur
    # Retourne : status : 200 pour un mot de passe valide
    #            user_id : id du user
    #               ou
    #            status : 403 pour un mot de passe non valide
    #               ou
    #            status : 500 pour un server-side error

    if request.method == "POST":
        user_id = {}
        try:
            data = request.json
            email = data["username"]
            mdp = data["password"]
            if check_user_mdp(email, mdp):
                status = 200
                user_id = get_user_id(email)
            else:  # Si le user existe pas ou si le mdp est inexact
                status = 403
        except:
            status = 500
        return jsonify(user_id), status


@app.route("/users/<user_id>/favorites", methods=["GET"])
def getFavorites(user_id):
    # Fonction qui retourne les logements favoris d'un utilisateur
    # Retourne status : 200 pour un succès
    #          favoris : tuples des logements favoris
    #               ou
    #          status : 204 pour un succès, mais l'utilisateur n'a pas de logements favoris
    #          favoris : tuples des logements favoris (vide)
    #               ou
    #            status : 500 pour un server-side error

    try:
        search = request.args['search']
        search = search.replace("+", " ")
    except:
        search = None

    if request.method == "GET":
        logements_favoris = {}
        try:
            logements_favoris = get_user_favorites(user_id, search)
            if logements_favoris:
                status = 201
            else:
                status = 204
        except:
            status = 500
        return jsonify(logements_favoris), status


@app.route("/signup", methods=["POST"])
def signup():
    # Insère un nouvel utilisateur dans la base de données
    # Retourne status : 201 pour un succès
    #          user_id : id du user
    #               ou
    #          status : 500 pour un server-side error

    if request.method == "POST":
        user_id = {}
        try:
            data = request.json
            email = data["email"]
            phone = data["phoneNumber"]
            nom = data["nom"]
            mdp = data["password"]
            age = data["age"]
            insert_user(email, phone, nom, mdp, age)
            status = 201
            user_id = get_user_id(email)
        except:
            status = 500
        return user_id, status


@app.route("/immeubles", methods=["GET"])
def getImmeubles():
    # Fonction qui retourne les immeubles d'une recherche
    # Retourne status : 200 pour un succès
    #          immeubles : tuples des immeubles
    #               ou
    #          status : 204 pour un succès, mais il n'y a pas d'immeubles
    #          immeubles : tuples des immeubles (vide)
    #               ou
    #          status : 500 pour un server-side error

    try:
        search = request.args['search']
        search = search.replace("+", " ")
    except:
        search = None

    try:
        typeImm = request.args['type']
        typeImm = typeImm.replace("+", " ")
    except:
        typeImm = None

    if request.method == "GET":
        immeubles = {}
        try:
            immeubles = get_immeubles(None, search, typeImm)
            if immeubles:
                status = 200
            else:
                status = 204
        except:
            status = 500
        return jsonify(immeubles), status

@app.route("/immeubles/<immeuble_id>", methods=["GET"])
def getImmeuble(immeuble_id):
    # Fonction qui retourne le tuple d'un immeuble en fonction de son id
    # Retourne status : 200 pour un succès
    #          immeuble : tuples de l'immeuble
    #               ou
    #          status : 204 pour un succès, mais il n'y a pas d'immeuble avec cet id
    #          immeuble : tuples de l'immeuble (vide)
    #               ou
    #          status : 500 pour un server-side error

    if request.method == "GET":
        immeuble = {}
        try:
            immeuble = get_immeubles(immeuble_id)
            if immeuble:
                status = 200
            else:
                status = 204
        except:
            status = 500
        return jsonify(immeuble), status


@app.route("/immeubles/<immeuble_id>/logements", methods=["GET"])
def searchLogements(immeuble_id):
    # Fonction qui retourneles logements d'un immeuble en fonction d'une recherche
    # Retourne status : 200 pour un succès
    #          logements : tuples des logements
    #               ou
    #          status : 204 pour un succès, mais il n'y a pas de logements
    #          logements : tuples des logements (vide)
    #               ou
    #          status : 500 pour un server-side error

    try:
        search = request.args['search']
        search = search.replace("+", " ")
    except:
        search = None

    if request.method == "GET":
        logements = {}
        try:
            logements = get_logements(immeuble_id, None, search)
            if logements:
                status = 200
            else:
                status = 204
        except:
            status = 500
        return jsonify(logements), status


@app.route("/immeubles/<immeuble_id>/logements/<logement_id>", methods=["GET"])
def getLogement(immeuble_id, logement_id):
    # Fonction qui retourne le tuple d'un logement en fonction de son id
    # Retourne status : 200 pour un succès
    #          logement : tuples du logement
    #               ou
    #          status : 204 pour un succès, mais il n'y a pas de logement avec cet id
    #          logement : tuples du logement (vide)
    #               ou
    #          status : 500 pour un server-side error

    if request.method == "GET":
        logement = {}
        try:
            logement = get_logements(immeuble_id, logement_id)
            if logement:
                status = 200
            else:
                status = 204
        except:
            status = 500
        return jsonify(logement), status


@app.route("/users", methods=["GET"])
def getUsers():
    # Fonction qui retourne tous les users
    # Retourne status : 200 pour un succès
    #          users : tuples des users
    #               ou
    #          status : 204 pour un succès, mais il n'y a pas d'users
    #          users : tuples des users (vide)
    #               ou
    #          status : 500 pour un server-side error

    if request.method == "GET":
        users = {}
        try:
            users = get_users()
            if users:
                status = 200
            else:
                status = 204
        except:
            status = 500
        return jsonify(users), status


@app.route("/users/<user_id>", methods=["GET"])
def getUser(user_id):
    # Fonction qui retourne le tuple d'un user en fonction de son id
    # Retourne status : 200 pour un succès
    #          user : tuples de l'user
    #               ou
    #          status : 204 pour un succès, mais il n'y a pas d'user avec cet id
    #          user : tuples de l'user (vide)
    #               ou
    #          status : 500 pour un server-side error

    if request.method == "GET":
        user = {}
        try:
            user = get_users(user_id)
            if user:
                status = 200
            else:
                status = 204
        except:
            status = 500
        return jsonify(user), status


@app.route("/users/<user_id>/favorites/<logement_id>", methods=["POST"])
def addFavorite(user_id, logement_id):
    # Fonction qui insère un tuple dans la table aime
    # Retourne status : 201 pour un succès
    #               ou
    #          status : 500 pour un server-side error

    if request.method == "POST":
        try:
            insert_favorite(logement_id, user_id)
            status = 201
        except:
            status = 500
        return "", status


@app.route("/users/<user_id>/favorites/<logement_id>", methods=["DELETE"])
def deleteFavorite(user_id, logement_id):
    # Fonction qui retire un tuple dans la table aime
    # Retourne status : 204 pour un succès
    #               ou
    #          status : 500 pour un server-side error

    if request.method == "DELETE":
        try:
            delete_favorite(logement_id, user_id)
            status = 204
        except:
            status = 500
        return "", status

@app.route("/users/<user_id>/locations", methods=["GET"])
def getLocations(user_id):
    # Fonction qui retourne les tuples des location d'un user en fonction de son id
    # Retourne status : 200 pour un succès
    #          locations : tuples des locations
    #               ou
    #          status : 204 pour un succès, mais il n'y a pas de locations
    #          user : tuples des locations (vide)
    #               ou
    #          status : 500 pour un server-side error

    if request.method == "GET":
        locations = {}
        try:
            locations = get_locations(user_id)
            if locations:
                status = 200
            else:
                status = 204
        except:
            status = 500
        return jsonify(locations), status

if __name__ == '__main__':
    app.run()
