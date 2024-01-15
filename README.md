# GLO-2005 Web App - ImmoFab
# Web App Pictures
## Main Page
![Screenshot 2024-01-15 at 2 39 38 PM](https://github.com/ZiyadBouazara/Real-Estate-WebApp/assets/97689339/b0d99471-26ce-423e-8543-73854ab6098c)

## Registering Menu
![Screenshot 2024-01-15 at 2 40 02 PM](https://github.com/ZiyadBouazara/Real-Estate-WebApp/assets/97689339/65ee1995-f918-49c8-8157-3531d5407d11)

## Show Building and the Apartments
![Screenshot 2024-01-15 at 2 41 27 PM](https://github.com/ZiyadBouazara/Real-Estate-WebApp/assets/97689339/cd3307b5-3c61-4902-876e-9f92ee47fb6e)

## Contact Company page by Email
![Screenshot 2024-01-15 at 2 42 30 PM](https://github.com/ZiyadBouazara/Real-Estate-WebApp/assets/97689339/f1ce1bea-dc0d-4ec6-88cc-21df5779c7f2)

## Backend
### init.py

Fichier utilisé pour peupler la base de données à l'aide de fichiers csv.

Librairies utilisées:
- pymysql
- pymysql.cursors
- csv
- passlib.hash
- random

Connection à la base de données `glo_2005_webapp` avec `user` et `password`:
```python
def db_connection():
    conn = pymysql.connect(
        host="localhost",
        user="root",  # Utilisateur pour se connecter
        password="abcdef",  # Mot de passe de l'utilisateur pour se connecter
        db="glo_2005_webapp",
        autocommit=True
    )
    c = conn.cursor()
    return conn, c
```

### database.py

Fichier utilisé pour intéragir avec la base de données.

Librairies utilisées:
- pymysql
- pymysql.cursors
- passlib.hash

Connection à la base de données `glo_2005_webapp` avec `user` et `password`:

```python
connection = pymysql.connect(
    host="localhost",
    user="root",  # Utilisateur pour se connecter
    password="abcdef",  # Mot de passe de l'utilisateur pour se connecter
    db="glo_2005_webapp",
    autocommit=True
)
```

### server.py

Fichier utilisé pour rouler l'API.

Librairies utilisées:
- flask
- flask_cors
- smtplib
- email
## Frontend

Construit à l'aide de TypeScript, React, React Router, TailwindCSS, Vite ainsi que JavaScript Cookie.

### Prérequis
- [Node.js](https://nodejs.org/en/) (version LTS recommandée)

Vérifier que Node est installé avec la commande:
```bash
node -v
```
Vérifier que npm est installé avec la commande:
```bash
npm -v
```

### Installation


```bash
# Installer les dépendences
npm install
```

### Scripts disponibles

Dans le dossier frontend (à partir de root: `cd frontend`):
```bash
npm run dev
```
Exécute l'application en mode de développement \
Ouvrir [http://localhost:5173/](http://localhost:5173/) pour y accéder à partir d'un browser.

La page va rafraichir si vous faites des modifications.


```bash
npm run build
```
Construit l'application de production dans le dossier `dist`.\
Regroupe correctement React en mode production et optimise la construction pour les meilleures performances.

Consultez la section sur le [déploiement](https://vitejs.dev/guide/build.html) pour plus d'informations.
