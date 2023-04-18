# GLO-2005 Web App - ImmoFab
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
