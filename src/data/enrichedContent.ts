// Contenu enrichi pour les leçons Python - Tous les niveaux
// Ce fichier contient du contenu très complet et universel

export const enrichedLessonContent = {
  // DÉBUTANT
  'lesson1-1': {
    title: 'Qu\'est-ce que Python?',
    content: `
# 🎯 Introduction à Python

## Qu'est-ce que Python?

Python est un **langage de programmation interprété et polyvalent** créé en **1989 par Guido van Rossum**. Son nom provient de la série comique britannique "Monty Python", reflétant l'approche ludique et accessible du langage.

### Caractéristiques Principales

**1. Syntaxe Simple et Lisible**
- Python privilégie la clarté du code
- L'indentation a une signification syntaxique
- Moins de symboles confus que d'autres langages
- Ressemble presque à de l'anglais naturel

**2. Langage Interprété**
- Pas de compilation nécessaire
- Code exécuté ligne par ligne
- Parfait pour le prototypage rapide
- Idéal pour l'apprentissage

**3. Multiparadigme**
- Programmation procédurale
- Programmation orientée objet
- Programmation fonctionnelle
- Tous les paradigmes sont supportés

**4. Multiplateforme**
- Fonctionne sur Windows, macOS, Linux
- Code portable sans modification
- Même code pour tous les OS

**5. Écosystème Riche**
- Milliers de bibliothèques disponibles
- NumPy, Pandas pour la science des données
- Django, Flask pour le web
- Pygame pour les jeux
- TensorFlow pour l'IA

### Pourquoi Apprendre Python?

**🚀 Demande du Marché**
- L'un des trois langages les plus demandés
- Salaires compétitifs
- Nombreuses offres d'emploi

**📊 Applications Variées**
- **Data Science & IA**: Pandas, NumPy, Scikit-learn, TensorFlow
- **Web Development**: Django, Flask, FastAPI
- **Automatisation**: Scripts pour tâches répétitives
- **DevOps**: Configuration et déploiement
- **Jeux**: Pygame, Panda3D
- **Sécurité**: Pentesting, forensics
- **Science**: Simulation, analyse de données

**📈 Courbe d'Apprentissage Douce**
- Facile pour les débutants
- Puissant pour les experts
- Progression naturelle

**🔍 Communauté Active**
- Millions de développeurs
- Ressources abondantes
- Support excellent

### Comparaison avec d'autres Langages

| Langage | Facilité | Vitesse | Utilisation |
|---------|----------|---------|-------------|
| Python | Très facile | Moyenne | Polyvalent |
| Java | Difficile | Rapide | Entreprise |
| C++ | Très difficile | Très rapide | Systèmes |
| JavaScript | Facile | Moyenne | Web |

### Différentes Utilisations de Python

**1. Web Development**
\`\`\`
Django: Framework web complet
Flask: Microframework léger
FastAPI: APIs modernes et rapides
\`\`\`

**2. Data Science**
\`\`\`
Pandas: Manipulation de données
NumPy: Calculs scientifiques
Matplotlib: Visualisation
\`\`\`

**3. Machine Learning**
\`\`\`
Scikit-learn: ML classique
TensorFlow: Deep learning
PyTorch: Recherche en IA
\`\`\`

**4. Automatisation**
\`\`\`
Selenium: Test web
Requests: Requêtes HTTP
Schedule: Planification de tâches
\`\`\`

### Versions de Python

- **Python 2**: Obsolète depuis 2020
- **Python 3**: Version moderne actuelle
- **Version stable actuelle**: 3.12+

### Prochaines Étapes

Une fois que vous aurez maîtrisé les bases:
1. Apprenez les concepts intermédiaires
2. Explorez les bibliothèques spécialisées
3. Construisez des projets réels
4. Contribuez à l'open source

**Prêt à commencer? Continuons avec l'installation et les premiers pas!**
    `,
    codeExample: `# Votre premier programme Python
print("Bonjour, Codiko!")
print("Bienvenue dans le monde de Python!")

# Python peut faire des calculs
print(2 + 3)           # Addition
print(10 * 5)          # Multiplication
print(20 / 4)          # Division
print(2 ** 8)          # Exposant (2 puissance 8)

# Ceci est un commentaire
# Les commentaires ne sont pas exécutés

# Afficher plusieurs valeurs
nom = "Alice"
age = 25
print(f"Nom: {nom}, Age: {age}")`
  },

  'lesson1-2': {
    title: 'Installation et Configuration',
    content: `
# 🛠️ Installation et Configuration de Python

## Télécharger Python

### Étape 1: Aller sur python.org

1. Visitez **https://www.python.org**
2. Cliquez sur **Downloads**
3. Téléchargez la **dernière version stable** (3.12 ou plus récent)

### Étape 2: Installation

**Windows:**
1. Exécutez l'installateur
2. **IMPORTANT**: Cochez "Add Python to PATH"
3. Cliquez sur "Install Now"
4. Attendez la fin de l'installation

**macOS:**
1. Téléchargez le fichier .pkg
2. Double-cliquez pour installer
3. Suivez les instructions
4. Python est maintenant disponible dans Terminal

**Linux (Ubuntu/Debian):**
\`\`\`bash
sudo apt-get update
sudo apt-get install python3 python3-pip
\`\`\`

### Étape 3: Vérifier l'Installation

Ouvrez un terminal/invite de commande et tapez:

\`\`\`bash
python --version
python -c "print('Python est installé!')"
\`\`\`

## Choisir un Environnement de Développement

### Option 1: IDLE (Simple)
- Inclus avec Python
- Éditeur + interpréteur basique
- Parfait pour débuter

### Option 2: VS Code (Recommandé)
**Avantages:**
- Léger et puissant
- Extensions Python excellentes
- Gratuit et open source
- Utilisé par les professionnels

**Installation:**
1. Téléchargez VS Code depuis code.visualstudio.com
2. Installez l'extension "Python" de Microsoft
3. Ouvrez un fichier .py et commencez à coder

### Option 3: PyCharm (Complet)
- IDE Python professionnel
- Très puissant
- Version Community gratuite
- Idéal pour les gros projets

### Option 4: En Ligne
**Replit.com** ou **Google Colab:**
- Pas d'installation nécessaire
- Code dans le navigateur
- Parfait pour l'apprentissage
- Gratuit

## Créer Votre Premier Fichier

### Étape 1: Créer un fichier
1. Ouvrez votre éditeur (VS Code, IDLE, etc.)
2. Créez un nouveau fichier
3. Nommez-le \`mon_premier_programme.py\`

### Étape 2: Écrire du Code
\`\`\`python
print("Bonjour, Python!")
print("Je suis un programmeur!")
\`\`\`

### Étape 3: Exécuter le Code
\`\`\`bash
python mon_premier_programme.py
\`\`\`

## Prise en Main du Terminal/Invite de Commande

### Commandes de Base

**Afficher le répertoire courant:**
\`\`\`bash
pwd          # macOS/Linux
cd           # Windows
\`\`\`

**Lister les fichiers:**
\`\`\`bash
ls           # macOS/Linux
dir          # Windows
\`\`\`

**Naviguer vers un dossier:**
\`\`\`bash
cd chemin/vers/dossier
cd ..        # Dossier parent
\`\`\`

**Lancer Python:**
\`\`\`bash
python       # Mode interactif
python fichier.py  # Exécuter un fichier
\`\`\`

## Mode Interactif Python

Tapez simplement \`python\` pour entrer en mode interactif:

\`\`\`
>>> 2 + 2
4
>>> nom = "Alice"
>>> print(nom)
Alice
>>> exit()
\`\`\`

## Résoudre les Problèmes Courants

**Problème:** "python: command not found"
**Solution:** 
- Vérifiez que Python est dans le PATH
- Réinstallez en cochant "Add to PATH"

**Problème:** Permission denied
**Solution:**
- Assurez-vous que le fichier est exécutable
- Sur Linux: \`chmod +x fichier.py\`

**Problème:** Erreur "ModuleNotFoundError"
**Solution:**
- Installez le module: \`pip install nom_du_module\`

## Pip: Le Gestionnaire de Paquets

### Installer des Packages

\`\`\`bash
pip install requests      # Installer un package
pip install requests==2.28.0  # Version spécifique
pip install -r requirements.txt  # Depuis un fichier
\`\`\`

### Gérer les Packages

\`\`\`bash
pip list                   # Lister les packages
pip upgrade nom_package    # Mettre à jour
pip uninstall nom_package  # Désinstaller
\`\`\`

## Conseil: Environnements Virtuels

Pour éviter les conflits entre projets:

\`\`\`bash
python -m venv mon_env     # Créer un environnement
source mon_env/bin/activate  # Activer (macOS/Linux)
mon_env\\Scripts\\activate    # Activer (Windows)
\`\`\`

**Vous êtes prêt! 🎉** Passez à la leçon suivante pour apprendre les variables.
    `,
    codeExample: `# Tester votre installation avec ce script complet

import sys
import platform

print("=== Informations Python ===")
print(f"Version: {sys.version}")
print(f"Plateforme: {platform.system()}")
print(f"Répertoire Python: {sys.executable}")
print()

# Test: Les opérations mathématiques
print("=== Test Mathématique ===")
print(f"2 + 2 = {2 + 2}")
print(f"10 - 3 = {10 - 3}")
print(f"4 * 5 = {4 * 5}")
print(f"20 / 4 = {20 / 4}")
print()

# Test: Les variables
print("=== Test Variables ===")
nom = "Développeur Python"
annee = 2026
print(f"Nom: {nom}")
print(f"Année: {annee}")
print(f"Bienvenue {nom}! Nous sommes en {annee}")
print()

print("✅ Python est correctement installé et fonctionne!")`
  },

  // Leçon Variables et Types - complètement enrichie
  'lesson2-1': {
    title: 'Variables et Types de Données',
    content: `
# 💾 Variables et Types de Données

## Qu'est-ce qu'une Variable?

Une **variable** est un conteneur qui stocke une valeur de données. Pensez à une variable comme une **boîte étiquetée** qui contient une information.

### Analogie du Monde Réel

\`\`\`
📦 Boîte avec étiquette "age"
   Contenue: 25

📦 Boîte avec étiquette "nom"
   Contenue: "Alice"
\`\`\`

## Créer une Variable

**Syntaxe de base:**
\`\`\`
nom_variable = valeur
\`\`\`

### Exemples

\`\`\`python
age = 25              # Nombre entier
nom = "Alice"         # Texte
taille = 1.75         # Nombre décimal
est_etudiant = True   # Booléen (Vrai/Faux)
\`\`\`

## Règles de Nommage des Variables

### ✅ Noms Valides
- Doivent commencer par une **lettre** ou **underscore** (_)
- Peuvent contenir des **lettres, chiffres, underscores**
- Sont **sensibles à la casse** (age ≠ Age ≠ AGE)

### Conventions Python (PEP 8)

\`\`\`python
# ✅ BON: snake_case (recommandé)
mon_age = 25
nom_complet = "Alice Dupont"
est_actif = True

# ❌ MAUVAIS: camelCase
monAge = 25
nomComplet = "Alice Dupont"

# ❌ MAUVAIS: CONSTANT si variable
MON_AGE = 25  # Réservé aux constantes

# ❌ INVALIDE: commence par un chiffre
25age = 25    # ERREUR!

# ❌ INVALIDE: contient un tiret
mon-age = 25  # ERREUR!

# ❌ INVALIDE: mot-clé Python
def = 5       # ERREUR! (def est réservé)
\`\`\`

### Mots-clés Réservés de Python

Ces mots ne peuvent **pas** être utilisés comme noms de variables:

\`\`\`python
if, elif, else, for, while, break, continue, pass
def, return, class, import, from, as, try, except
and, or, not, in, is, True, False, None
\`\`\`

## Les 5 Types de Données Principales

### 1️⃣ String (str) - Texte

**Stocke du texte (n'importe quoi entre guillemets)**

\`\`\`python
# Guillemets simples ou doubles
titre = 'Python pour Débutants'
description = "Python est amusant"

# Chaînes multi-lignes
texte_long = """Ceci est un texte
sur plusieurs lignes
très utile!"""

# Longueur d'une chaîne
nom = "Alice"
print(len(nom))  # 5

# Accéder à un caractère
print(nom[0])    # 'A' (premier caractère)
print(nom[-1])   # 'e' (dernier caractère)
\`\`\`

**Utilité:** Noms, descriptions, messages

### 2️⃣ Integer (int) - Nombres Entiers

**Nombres sans décimales (positifs ou négatifs)**

\`\`\`python
age = 25
année_naissance = 1998
temperature = -5
population = 1000000

# Taille illimitée
grand_nombre = 123456789012345678901234567890

# Opérations
print(10 + 5)      # 15
print(10 - 3)      # 7
print(4 * 3)       # 12
print(20 // 3)     # 6 (division entière)
print(20 % 3)      # 2 (modulo/reste)
print(2 ** 3)      # 8 (exposant)
\`\`\`

**Utilité:** Ages, compteurs, IDs

### 3️⃣ Float (float) - Nombres Décimaux

**Nombres avec des décimales**

\`\`\`python
taille = 1.75
prix = 19.99
pi = 3.14159
température = 36.5

# Notation scientifique
grand_nombre = 1.5e10  # 15 milliards
petit_nombre = 2.5e-3  # 0.0025

# Attention aux arrondis
print(0.1 + 0.2)  # 0.30000000000000004 (erreur d'arrondi)
\`\`\`

**Utilité:** Prix, températures, mesures précises

### 4️⃣ Boolean (bool) - Vrai ou Faux

**Seulement deux valeurs possibles**

\`\`\`python
est_actif = True
est_fermé = False

# Résultats de comparaisons
print(5 > 3)       # True
print(5 < 3)       # False
print(5 == 5)      # True
print(5 != 3)      # True

# En conditions
if est_actif:
    print("L'utilisateur est actif")
\`\`\`

**Utilité:** Conditions, drapeaux, états

### 5️⃣ NoneType (None) - Absence de Valeur

**Représente l'absence délibérée de valeur**

\`\`\`python
resultat = None  # Pas de valeur

# Très utile pour les fonctions
def chercher_utilisateur(id):
    if id == 1:
        return "Alice"
    return None  # Utilisateur non trouvé

# Vérifier si None
if resultat is None:
    print("Pas de résultat")
\`\`\`

**Utilité:** Valeurs par défaut, absence d'information

## Vérifier le Type d'une Variable

\`\`\`python
age = 25
nom = "Alice"
taille = 1.75
est_actif = True

print(type(age))      # <class 'int'>
print(type(nom))      # <class 'str'>
print(type(taille))   # <class 'float'>
print(type(est_actif))  # <class 'bool'>
print(type(None))     # <class 'NoneType'>
\`\`\`

## Convertir Entre les Types

**Conversion (casting)**

\`\`\`python
# String → Integer
age_str = "25"
age_int = int(age_str)
print(age_int + 5)  # 30 ✓

# Integer → String
nombre = 42
texte = str(nombre)
print(texte + " ans")  # "42 ans" ✓

# String → Float
prix_str = "19.99"
prix = float(prix_str)
print(prix * 2)  # 39.98 ✓

# Integer → Float
nombre = 5
decimal = float(nombre)
print(decimal)  # 5.0 ✓

# Boolean → Integer
vrai = True
print(int(vrai))  # 1
print(int(False))  # 0
\`\`\`

## Affectation Multiple

\`\`\`python
# Assigner plusieurs variables
x, y, z = 1, 2, 3
print(x, y, z)  # 1 2 3

# Même valeur pour plusieurs variables
a = b = c = 0
print(a, b, c)  # 0 0 0

# Échange de variables
x, y = 10, 20
x, y = y, x  # Échange!
print(x, y)  # 20 10
\`\`\`

## Bonne Pratique: Nommer Ses Variables

\`\`\`python
# ❌ Noms vagues
x = 25
y = "Alice"

# ✅ Noms clairs et descriptifs
age_utilisateur = 25
nom_complet = "Alice Martin"
est_administrateur = True
\`\`\`

**Les bons noms de variables:**
- Décrivent ce qu'ils contiennent
- Sont en français ou anglais (cohérent)
- Utilisent snake_case
- Sont ni trop longs ni trop courts
    `,
    codeExample: `# Démonstration complète des types de données

print("=== NOMBRES ENTIERS ===")
age = 25
annee = 2026
print(f"Age: {age} (type: {type(age).__name__})")
print(f"Année: {annee}")
print(f"Age dans 10 ans: {age + 10}")

print("\\n=== NOMBRES DÉCIMAUX ===")
taille = 1.75
prix = 19.99
print(f"Taille: {taille}m (type: {type(taille).__name__})")
print(f"Prix: {prix}€")
print(f"Prix total pour 3: {prix * 3}€")

print("\\n=== TEXTE ===")
nom = "Alice"
prenom = "Dupont"
email = "alice@example.com"
print(f"Nom complet: {nom} {prenom}")
print(f"Email: {email}")
print(f"Nombre de caractères: {len(nom)}")

print("\\n=== BOOLÉENS ===")
est_etudiant = True
est_employe = False
print(f"Est étudiant: {est_etudiant}")
print(f"Est employé: {est_employe}")
print(f"5 > 3: {5 > 3}")
print(f"10 < 5: {10 < 5}")

print("\\n=== CONVERSIONS ===")
nombre_str = "42"
nombre_int = int(nombre_str)
print(f"String '42' + 8 = {nombre_int + 8}")

age_int = 30
age_str = str(age_int)
print(f"Int 30 + ' ans' = {age_str + ' ans'}")`
  }
};

export default enrichedLessonContent;
