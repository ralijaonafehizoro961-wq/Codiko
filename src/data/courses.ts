export interface Lesson {
  id: string;
  title: string;
  content: string;
  codeExample?: string;
}

export interface Exercise {
  id: string;
  title: string;
  description: string;
  initialCode: string;
  solution: string;
  expectedOutput: string;
  hints: string[];
  explanation?: string;
}

export interface Chapter {
  id: string;
  courseId: string;
  title: string;
  description: string;
  lessons: Lesson[];
  exercise: Exercise;
  duration: number; // in minutes
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface Course {
  id: string;
  title: string;
  description: string;
  image?: string;
  chapters: Chapter[];
  totalDuration: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  language: 'fr' | 'en' | 'mg';
}

export const pythonCourses: Course[] = [
  // ======================= NIVEAU DÉBUTANT =======================
  {
    id: 'python-basics',
    title: 'Bases de Python',
    description: 'Apprenez les concepts fondamentaux de Python et commencez votre voyage en programmation.',
    chapters: [
      {
        id: 'ch1-intro',
        courseId: 'python-basics',
        title: 'Introduction à Python',
        description: 'Découvrez ce qu\'est Python et pourquoi c\'est un langage si populaire',
        duration: 30,
        difficulty: 'beginner',
        lessons: [
          {
            id: 'lesson1-1',
            title: 'Qu\'est-ce que Python?',
            content: `# 🎯 Introduction à Python

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
- Django: Framework web complet
- Flask: Microframework léger
- FastAPI: APIs modernes et rapides

**2. Data Science**
- Pandas: Manipulation de données
- NumPy: Calculs scientifiques
- Matplotlib: Visualisation

**3. Machine Learning**
- Scikit-learn: ML classique
- TensorFlow: Deep learning
- PyTorch: Recherche en IA

**4. Automatisation**
- Selenium: Test web
- Requests: Requêtes HTTP
- Schedule: Planification de tâches

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

**Prêt à commencer? Continuons avec l'installation et les premiers pas!**`,
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
          {
            id: 'lesson1-2',
            title: 'Installation et Configuration',
            content: `# 🛠️ Installation et Configuration de Python

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

**Vous êtes prêt! 🎉** Passez à la leçon suivante pour apprendre les variables.`,
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
          }
        ],
        exercise: {
          id: 'ex1-1',
          title: 'Premier Programme',
          description: 'Écrivez un programme qui affiche "Bienvenue sur Codiko!" et votre nom',
          initialCode: `# Écrivez votre code ici
print("Bienvenue sur Codiko!")
# Ajoutez votre nom`,
          solution: `print("Bienvenue sur Codiko!")
print("Mon nom est...")`,
          expectedOutput: 'Bienvenue sur Codiko!\nMon nom est...',
          hints: ['Utilisez la fonction print()', 'Vous pouvez utiliser deux print() différents']
        }
      },
      {
        id: 'ch2-variables',
        courseId: 'python-basics',
        title: 'Variables et Types de Données',
        description: 'Apprenez à créer et utiliser des variables en Python',
        duration: 45,
        difficulty: 'beginner',
        lessons: [
          {
            id: 'lesson2-1',
            title: 'Variables en Python',
            content: `# 💾 Variables et Types de Données

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
- Sont ni trop longs ni trop courts`,
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
          },
          {
            id: 'lesson2-2',
            title: 'Types de Données',
            content: `Python a plusieurs types de données:

1. String (str) - Texte
   Exemple: "Bonjour", 'Python'

2. Integer (int) - Nombres entiers
   Exemple: 5, -10, 0

3. Float (float) - Nombres décimaux
   Exemple: 3.14, -0.5, 2.0

4. Boolean (bool) - Vrai ou Faux
   Exemple: True, False

5. List - Collection ordonnée
   Exemple: [1, 2, 3], ["a", "b", "c"]

6. Dictionary - Paires clé-valeur
   Exemple: {"nom": "Jean", "age": 25}

Vous pouvez vérifier le type avec type():`,
            codeExample: `# Vérifier les types
print(type("Bonjour"))      # <class 'str'>
print(type(42))             # <class 'int'>
print(type(3.14))           # <class 'float'>
print(type(True))           # <class 'bool'>

# Conversion de types
nombre_str = "123"
nombre_int = int(nombre_str)
print(nombre_int + 10)      # 133`
          }
        ],
        exercise: {
          id: 'ex2-1',
          title: 'Créer et Utiliser des Variables',
          description: 'Créez des variables pour stocker votre nom, âge, et pays, puis affichez-les',
          initialCode: `# Créez vos variables ici
# nom = 
# age = 
# pays = 

# Affichez-les ici
`,
          solution: `nom = "Marie"
age = 20
pays = "France"

print(nom)
print(age)
print(pays)`,
          expectedOutput: 'Marie\n20\nFrance',
          hints: ['Utilisez = pour assigner une valeur', 'Utilisez print() pour afficher les variables']
        }
      },
      {
        id: 'ch3-operators',
        courseId: 'python-basics',
        title: 'Opérateurs',
        description: 'Maîtrisez les opérateurs arithmétiques et logiques',
        duration: 40,
        difficulty: 'beginner',
        lessons: [
          {
            id: 'lesson3-1',
            title: 'Opérateurs Arithmétiques',
            content: `Les opérateurs arithmétiques sont utilisés pour effectuer des calculs mathématiques:

+ (Addition)
- (Soustraction)
* (Multiplication)
/ (Division)
// (Division entière)
% (Modulo - reste)
** (Exposant)

Exemples:
10 + 5 = 15
10 - 5 = 5
10 * 5 = 50
10 / 5 = 2.0
10 // 3 = 3
10 % 3 = 1
2 ** 3 = 8`,
            codeExample: `# Opérateurs arithmétiques
a = 10
b = 3

print(a + b)        # 13
print(a - b)        # 7
print(a * b)        # 30
print(a / b)        # 3.333...
print(a // b)       # 3
print(a % b)        # 1
print(a ** b)       # 1000`
          },
          {
            id: 'lesson3-2',
            title: 'Opérateurs de Comparaison et Logiques',
            content: `Opérateurs de Comparaison (retournent True ou False):
== (Égal)
!= (Pas égal)
> (Plus grand que)
< (Moins grand que)
>= (Plus grand ou égal)
<= (Moins grand ou égal)

Opérateurs Logiques:
and - Les deux conditions doivent être True
or - Au moins une condition doit être True
not - Inverse le résultat booléen`,
            codeExample: `# Comparaison
x = 10
y = 5

print(x == y)       # False
print(x != y)       # True
print(x > y)        # True
print(x < y)        # False

# Logiques
print(x > 5 and y < 10)     # True
print(x > 5 or y > 10)      # True
print(not x > y)            # False`
          }
        ],
        exercise: {
          id: 'ex3-1',
          title: 'Calculatrice Simple',
          description: 'Écrivez un programme qui calcule la somme, la différence et le produit de deux nombres',
          initialCode: `# Déclachez deux nombres
num1 = 20
num2 = 8

# Calculez et affichez les résultats
`,
          solution: `num1 = 20
num2 = 8

somme = num1 + num2
difference = num1 - num2
produit = num1 * num2

print(somme)
print(difference)
print(produit)`,
          expectedOutput: '28\n12\n160',
          hints: ['Utilisez les opérateurs +, -, *', 'Stockez les résultats dans des variables']
        }
      },
      {
        id: 'ch4-conditionals',
        courseId: 'python-basics',
        title: 'Conditions (if, elif, else)',
        description: 'Apprenez à contrôler le flux du programme avec les conditions',
        duration: 50,
        difficulty: 'beginner',
        lessons: [
          {
            id: 'lesson4-1',
            title: 'Structure if-elif-else',
            content: `Les conditions vous permettent d'exécuter différents blocs de code selon certaines conditions.

Structure de base:
if condition:
    # code à exécuter si True
elif condition2:
    # code à exécuter si condition2 est True
else:
    # code à exécuter si aucune condition n'est True

Important: L'indentation est essentielle en Python!

Exemples:`,
            codeExample: `age = 18

if age >= 18:
    print("Vous êtes un adulte")
elif age >= 13:
    print("Vous êtes un adolescent")
else:
    print("Vous êtes un enfant")

# Conditions imbriquées
nom = "Jean"
age = 25

if age >= 18:
    if nom == "Jean":
        print("Bienvenue Jean!")
    else:
        print("Bienvenue!")
else:
    print("Trop jeune")`
          }
        ],
        exercise: {
          id: 'ex4-1',
          title: 'Note de Lettre',
          description: 'Écrivez un programme qui affiche la note de lettre (A, B, C, etc.) selon un score numérique',
          initialCode: `# Score entre 0 et 100
score = 85

# Votre code ici
# A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: <60
`,
          solution: `score = 85

if score >= 90:
    print("A")
elif score >= 80:
    print("B")
elif score >= 70:
    print("C")
elif score >= 60:
    print("D")
else:
    print("F")`,
          expectedOutput: 'B',
          hints: ['Utilisez if-elif-else', 'Comparez le score avec les seuils']
        }
      },
      {
        id: 'ch5-loops',
        courseId: 'python-basics',
        title: 'Boucles (for et while)',
        description: 'Apprenez à répéter du code avec les boucles',
        duration: 50,
        difficulty: 'beginner',
        lessons: [
          {
            id: 'lesson5-1',
            title: 'Boucle for',
            content: `La boucle for est utilisée pour itérer sur une séquence (liste, string, etc.)

Syntaxe:
for variable in sequence:
    # code à répéter

Exemples:`,
            codeExample: `# Boucle sur une liste
nombres = [1, 2, 3, 4, 5]
for num in nombres:
    print(num)

# Utiliser range()
for i in range(5):  # 0, 1, 2, 3, 4
    print(i)

# Boucler sur une string
for char in "Python":
    print(char)`
          },
          {
            id: 'lesson5-2',
            title: 'Boucle while',
            content: `La boucle while répète du code tant qu\'une condition est True.

Syntaxe:
while condition:
    # code à répéter

ATTENTION: Assurez-vous que la condition devient False un jour pour éviter une boucle infinie!`,
            codeExample: `# Boucle while simple
i = 0
while i < 5:
    print(i)
    i = i + 1

# Compte à rebours
count = 5
while count > 0:
    print(count)
    count = count - 1
print("Terminé!")`
          }
        ],
        exercise: {
          id: 'ex5-1',
          title: 'Table de Multiplication',
          description: 'Affiche la table de multiplication pour le nombre 5 (5x1 à 5x10)',
          initialCode: `# Affichage de la table de 5
`,
          solution: `for i in range(1, 11):
    resultat = 5 * i
    print(f"5 × {i} = {resultat}")`,
          expectedOutput: '5 × 1 = 5\n5 × 2 = 10\n5 × 3 = 15\n5 × 4 = 20\n5 × 5 = 25\n5 × 6 = 30\n5 × 7 = 35\n5 × 8 = 40\n5 × 9 = 45\n5 × 10 = 50',
          hints: ['Utilisez range(1, 11)', 'Vous pouvez utiliser f-strings ou concatenation']
        }
      },
      {
        id: 'ch6-functions',
        courseId: 'python-basics',
        title: 'Fonctions',
        description: 'Apprenez à écrire et utiliser des fonctions',
        duration: 55,
        difficulty: 'intermediate',
        lessons: [
          {
            id: 'lesson6-1',
            title: 'Définir et Appeler des Fonctions',
            content: `Une fonction est un bloc de code réutilisable qui effectue une tâche spécifique.

Syntaxe:
def nom_fonction(parametres):
    # code de la fonction
    return resultat

Avantages des fonctions:
- Réutilisabilité du code
- Code plus organisé et lisible
- Facilite la maintenance`,
            codeExample: `# Définir une fonction
def saluer(nom):
    return f"Bonjour, {nom}!"

# Appeler la fonction
message = saluer("Marie")
print(message)

# Fonction sans paramètres
def obtenirHeureActuelle():
    return "14:30"

print(obtenirHeureActuelle())

# Fonction avec plusieurs paramètres
def additionner(a, b):
    return a + b

print(additionner(5, 3))  # 8`
          },
          {
            id: 'lesson6-2',
            title: 'Paramètres par Défaut et Args',
            content: `Vous pouvez définir des valeurs par défaut pour les paramètres:

def fonction(param1, param2="valeur_defaut"):
    # code

*args permet de passer un nombre variable d'arguments:
def fonction(*args):
    for arg in args:
        print(arg)`,
            codeExample: `# Paramètres par défaut
def afficher_info(nom, age=0):
    print(f"Nom: {nom}, Age: {age}")

afficher_info("Jean")              # Age = 0
afficher_info("Marie", 25)         # Age = 25

# Utiliser *args
def somme(*nombres):
    total = 0
    for num in nombres:
        total += num
    return total

print(somme(1, 2, 3))        # 6
print(somme(1, 2, 3, 4, 5))  # 15`
          }
        ],
        exercise: {
          id: 'ex6-1',
          title: 'Fonction Carrée',
          description: 'Écrivez une fonction qui retourne le carré d\'un nombre',
          initialCode: `# Définir la fonction
def carre(nombre):
    # Votre code ici
    pass

# Tester la fonction
print(carre(5))
`,
          solution: `def carre(nombre):
    return nombre * nombre

print(carre(5))`,
          expectedOutput: '25',
          hints: ['Multipliez le nombre par lui-même', 'Utilisez return pour retourner le résultat']
        }
      }
    ],
    totalDuration: 270,
    difficulty: 'beginner',
    language: 'fr'
  },

  // ======================= NIVEAU INTERMÉDIAIRE =======================
  {
    id: 'python-intermediate',
    title: 'Python Intermédiaire',
    description: 'Maîtrisez les concepts avancés : structures de données, POO, gestion d\'erreurs et modules.',
    chapters: [
      {
        id: 'ch-int-1',
        courseId: 'python-intermediate',
        title: 'Listes et Manipulation de Données',
        description: 'Apprenez à travailler avec les listes, indexation, slicing et méthodes utiles',
        duration: 60,
        difficulty: 'intermediate',
        lessons: [
          {
            id: 'lesson-int-1-1',
            title: 'Listes Avancées et Slicing',
            content: `Les listes sont des collections flexibles et puissantes en Python.

Opérations avancées:

1. Slicing (découpage):
   liste[debut:fin:pas]
   liste[1:4]     # Éléments aux indices 1, 2, 3
   liste[::2]     # Tous les éléments pairs
   liste[::-1]    # Inverse la liste

2. Méthodes utiles:
   append()       # Ajoute un élément
   extend()       # Fusionne deux listes
   insert()       # Insère à un index
   remove()       # Supprime une valeur
   pop()          # Supprime et retourne un élément
   sort()         # Trie la liste
   reverse()      # Inverse l'ordre
   count()        # Compte les occurrences

3. List Comprehension (très Python!):
   Créer des listes de manière élégante et efficace`,
            codeExample: `# Slicing
nombres = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
print(nombres[2:5])        # [2, 3, 4]
print(nombres[::2])        # [0, 2, 4, 6, 8]
print(nombres[::-1])       # [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

# Méthodes
fruits = ["pomme", "banane"]
fruits.append("orange")
print(fruits)              # ['pomme', 'banane', 'orange']

# List Comprehension
carres = [x**2 for x in range(5)]
print(carres)              # [0, 1, 4, 9, 16]

pairs = [x for x in range(10) if x % 2 == 0]
print(pairs)               # [0, 2, 4, 6, 8]`
          },
          {
            id: 'lesson-int-1-2',
            title: 'Dictionnaires et Tuples',
            content: `Dictionnaires: Stockage de paires clé-valeur

Caractéristiques:
- Clés doivent être uniques
- Accès rapide par clé
- Modificables (mutables)
- Pas d'ordre garanti (Python < 3.7)

Tuples: Séquences immuables

Caractéristiques:
- Immuables (ne peuvent pas être modifiés)
- Plus rapides que les listes
- Peuvent être utilisés comme clés de dictionnaire
- Excellents pour protéger les données`,
            codeExample: `# Dictionnaires
personne = {
    "nom": "Jean",
    "age": 25,
    "ville": "Paris"
}

print(personne["nom"])     # Jean
personne["age"] = 26       # Modification
personne["email"] = "jean@example.com"  # Ajout

# Itération
for cle, valeur in personne.items():
    print(f"{cle}: {valeur}")

# Tuples
coordonnees = (10, 20)
x, y = coordonnees         # Déballage
print(x, y)                # 10 20

# Tuple immuable
point = (5, 10)
# point[0] = 7  # Erreur!

# Dict avec tuples comme clés
positions = {
    (0, 0): "centre",
    (1, 1): "coin"
}`
          }
        ],
        exercise: {
          id: 'ex-int-1',
          title: 'Gestionnaire de Contacts',
          description: 'Créez un dictionnaire de contacts avec noms et emails, puis manipulez-le',
          initialCode: `# Créer un dictionnaire de contacts
contacts = {}

# Ajouter des contacts
# contacts["Jean"] = "jean@example.com"
# ...

# Afficher tous les contacts
# for nom, email in contacts.items():
#     print(f"{nom}: {email}")

# Chercher un contact
`,
          solution: `contacts = {
    "Jean": "jean@example.com",
    "Marie": "marie@example.com",
    "Pierre": "pierre@example.com"
}

for nom, email in contacts.items():
    print(f"{nom}: {email}")

print(contacts.get("Jean"))`,
          expectedOutput: 'Jean: jean@example.com\nMarie: marie@example.com\nPierre: pierre@example.com\njean@example.com',
          hints: ['Utilisez un dictionnaire pour stocker les données', 'Utilisez .items() pour itérer']
        }
      },
      {
        id: 'ch-int-2',
        courseId: 'python-intermediate',
        title: 'Programmation Orientée Objet (POO)',
        description: 'Découvrez les classes, les objets et l\'encapsulation',
        duration: 90,
        difficulty: 'intermediate',
        lessons: [
          {
            id: 'lesson-int-2-1',
            title: 'Classes et Objets',
            content: `La Programmation Orientée Objet permet d'organiser le code de manière logique.

Concepts clés:

1. Classe: Blueprint pour créer des objets
2. Objet: Instance d'une classe
3. Attribut: Données de l'objet
4. Méthode: Fonction de la classe
5. Constructor (__init__): Initialise l'objet

Avantages:
- Code plus organisé et réutilisable
- Modélise le monde réel
- Maintien et extension faciles`,
            codeExample: `class Personne:
    def __init__(self, nom, age):
        self.nom = nom
        self.age = age
    
    def presentation(self):
        return f"Bonjour, je suis {self.nom} et j'ai {self.age} ans"
    
    def celebrer_anniversaire(self):
        self.age += 1
        return f"{self.nom} a maintenant {self.age} ans"

# Créer des objets
p1 = Personne("Jean", 25)
p2 = Personne("Marie", 30)

print(p1.presentation())
p1.celebrer_anniversaire()
print(p1.age)              # 26`
          },
          {
            id: 'lesson-int-2-2',
            title: 'Héritage et Polymorphisme',
            content: `Héritage: Une classe enfant hérite des propriétés d'une classe parent

Polymorphisme: Capacité d'une méthode à avoir différents comportements

Concepts:
- super(): Appelle la méthode parent
- @staticmethod: Méthode sans self
- @classmethod: Méthode avec la classe en paramètre
- Redéfinition de méthodes`,
            codeExample: `class Animal:
    def __init__(self, nom):
        self.nom = nom
    
    def faire_bruit(self):
        return "Bruit générique"

class Chien(Animal):
    def faire_bruit(self):
        return "Woof!"

class Chat(Animal):
    def faire_bruit(self):
        return "Miaou!"

# Polymorphisme
animaux = [Chien("Rex"), Chat("Minou")]
for animal in animaux:
    print(f"{animal.nom}: {animal.faire_bruit()}")`
          }
        ],
        exercise: {
          id: 'ex-int-2',
          title: 'Créer une classe Voiture',
          description: 'Créez une classe Voiture avec marque, modèle, et vitesse, avec des méthodes',
          initialCode: `class Voiture:
    def __init__(self, marque, modele):
        # À compléter
        pass
    
    def accelerer(self):
        # À compléter
        pass
    
    def afficher_info(self):
        # À compléter
        pass

# Créer et tester
`,
          solution: `class Voiture:
    def __init__(self, marque, modele):
        self.marque = marque
        self.modele = modele
        self.vitesse = 0
    
    def accelerer(self):
        self.vitesse += 10
    
    def afficher_info(self):
        return f"{self.marque} {self.modele} - Vitesse: {self.vitesse} km/h"

v = Voiture("Toyota", "Corolla")
v.accelerer()
v.accelerer()
print(v.afficher_info())`,
          expectedOutput: 'Toyota Corolla - Vitesse: 20 km/h',
          hints: ['Utilisez __init__ pour initialiser', 'Utilisez self pour accéder aux attributs']
        }
      },
      {
        id: 'ch-int-3',
        courseId: 'python-intermediate',
        title: 'Gestion des Erreurs et Exceptions',
        description: 'Apprenez à gérer les erreurs proprement avec try-except',
        duration: 45,
        difficulty: 'intermediate',
        lessons: [
          {
            id: 'lesson-int-3-1',
            title: 'Try-Except-Finally',
            content: `Gestion des erreurs pour écrire du code robuste

Structure:
try:
    # Code qui peut causer une erreur
except TypeErreur:
    # Gérer l'erreur
except AutreErreur:
    # Gérer une autre erreur
else:
    # S'exécute si aucune erreur
finally:
    # S'exécute toujours

Exceptions communes:
- ValueError: Mauvaise valeur
- TypeError: Mauvais type
- ZeroDivisionError: Division par zéro
- IndexError: Index invalide
- KeyError: Clé inexistante`,
            codeExample: `def diviser(a, b):
    try:
        resultat = a / b
    except ZeroDivisionError:
        print("Erreur: Division par zéro!")
        return None
    except TypeError:
        print("Erreur: Types invalides!")
        return None
    else:
        return resultat
    finally:
        print("Opération terminée")

print(diviser(10, 2))
print(diviser(10, 0))`
          }
        ],
        exercise: {
          id: 'ex-int-3',
          title: 'Convertisseur de Type Sécurisé',
          description: 'Créez une fonction qui convertit une chaîne en nombre de manière sécurisée',
          initialCode: `def convertir_en_nombre(chaine):
    try:
        # À compléter
        pass
    except:
        # À compléter
        pass

# Tester
`,
          solution: `def convertir_en_nombre(chaine):
    try:
        return int(chaine)
    except ValueError:
        return float(chaine)

print(convertir_en_nombre("42"))
print(convertir_en_nombre("3.14"))`,
          expectedOutput: '42\n3.14',
          hints: ['Utilisez try-except', 'int() et float() lèvent des exceptions']
        }
      }
    ],
    totalDuration: 195,
    difficulty: 'intermediate',
    language: 'fr'
  },

  // ======================= NIVEAU AVANCÉ =======================
  {
    id: 'python-advanced',
    title: 'Python Avancé',
    description: 'Maîtrisez les patterns avancés : décorateurs, générateurs, asyncio et optimisation.',
    chapters: [
      {
        id: 'ch-adv-1',
        courseId: 'python-advanced',
        title: 'Décorateurs et Métaprogrammation',
        description: 'Écrivez du code plus élégant avec les décorateurs',
        duration: 75,
        difficulty: 'advanced',
        lessons: [
          {
            id: 'lesson-adv-1-1',
            title: 'Fonctions comme Objets de Première Classe',
            content: `En Python, les fonctions sont des objets de première classe:
- Peuvent être assignées à des variables
- Peuvent être passées comme arguments
- Peuvent être retournées par d'autres fonctions
- Peuvent être stockées dans des structures de données

Closures: Fonctions qui "capturent" des variables

Décorateurs: Fonctions qui modifient le comportement d'autres fonctions

Pattern: @decorator applique un décorateur à une fonction`,
            codeExample: `# Fonction comme objet
def saluer(nom):
    return f"Bonjour, {nom}!"

fonction = saluer
print(fonction("Marie"))

# Closure
def creer_multiplicateur(n):
    def multiplier(x):
        return x * n
    return multiplier

double = creer_multiplicateur(2)
print(double(5))           # 10

# Décorateur simple
def mon_decorateur(func):
    def wrapper(*args, **kwargs):
        print("Avant l'appel")
        resultat = func(*args, **kwargs)
        print("Après l'appel")
        return resultat
    return wrapper

@mon_decorateur
def dire_bonjour(nom):
    return f"Bonjour, {nom}!"

dire_bonjour("Jean")`
          },
          {
            id: 'lesson-adv-1-2',
            title: 'Décorateurs Pratiques',
            content: `Décorateurs utiles en pratique:

@property: Transforme une méthode en attribut
@staticmethod: Méthode sans self
@classmethod: Méthode avec la classe
@functools.wraps: Préserve les métadonnées
@functools.lru_cache: Cache les résultats (memoization)

Cas d'usage:
- Mesurer le temps d'exécution
- Logger les appels
- Valider les arguments
- Cacher les résultats`,
            codeExample: `import time
from functools import wraps, lru_cache

def mesurer_temps(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        debut = time.time()
        resultat = func(*args, **kwargs)
        fin = time.time()
        print(f"{func.__name__} a pris {fin-debut:.4f}s")
        return resultat
    return wrapper

@mesurer_temps
def fonction_lente():
    time.sleep(1)
    return "Fait!"

print(fonction_lente())

# Caching
@lru_cache(maxsize=128)
def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(10))`
          }
        ],
        exercise: {
          id: 'ex-adv-1',
          title: 'Créer un Décorateur de Validation',
          description: 'Créez un décorateur qui valide les arguments d\'une fonction',
          initialCode: `def valider_positif(func):
    def wrapper(*args, **kwargs):
        # À compléter: vérifier que tous les arguments sont positifs
        pass
    return wrapper

@valider_positif
def diviser(a, b):
    return a / b

# Tester
`,
          solution: `def valider_positif(func):
    def wrapper(*args, **kwargs):
        for arg in args:
            if isinstance(arg, (int, float)) and arg < 0:
                raise ValueError("Les arguments doivent être positifs")
        return func(*args, **kwargs)
    return wrapper

@valider_positif
def diviser(a, b):
    return a / b

print(diviser(10, 2))`,
          expectedOutput: '5.0',
          hints: ['Vérifiez les types et les valeurs', 'Levez une exception si invalide']
        }
      },
      {
        id: 'ch-adv-2',
        courseId: 'python-advanced',
        title: 'Générateurs et Itérateurs',
        description: 'Économisez la mémoire avec les générateurs',
        duration: 60,
        difficulty: 'advanced',
        lessons: [
          {
            id: 'lesson-adv-2-1',
            title: 'Itérateurs et le Protocole Iterator',
            content: `Itérateurs: Objets qui implémentent __iter__() et __next__()

Protocole Iterator:
- __iter__(): Retourne l'itérateur lui-même
- __next__(): Retourne le prochain élément
- StopIteration: Levée quand il n'y a plus d'éléments

Générateurs: Fonction spéciale avec yield

Avantages:
- Économise la mémoire (pas de liste complète)
- Traitement lazy (calcul à la demande)
- Code plus lisible`,
            codeExample: `# Itérateur personnalisé
class Compteur:
    def __init__(self, max):
        self.max = max
        self.current = 0
    
    def __iter__(self):
        return self
    
    def __next__(self):
        if self.current < self.max:
            self.current += 1
            return self.current
        else:
            raise StopIteration

for i in Compteur(3):
    print(i)

# Générateur
def compteur_gen(max):
    current = 0
    while current < max:
        current += 1
        yield current

for i in compteur_gen(3):
    print(i)`
          },
          {
            id: 'lesson-adv-2-2',
            title: 'Applications Pratiques des Générateurs',
            content: `Cas d'usage des générateurs:

1. Traiter de grands fichiers ligne par ligne
2. Générer des suites infinies
3. Pipelines de traitement de données
4. Éviter les allocations mémoire massives

Expressions génératrices: (x for x in range(10) if x % 2 == 0)

Comparé aux listes:
- Générateur: Aucune mémoire allouée jusqu'à utilisation
- Liste: Toute la mémoire allouée immédiatement`,
            codeExample: `# Générateur infini
def nombres_infinis():
    n = 0
    while True:
        yield n
        n += 1

gen = nombres_infinis()
print(next(gen))  # 0
print(next(gen))  # 1

# Pipeline de traitement
def lire_lignes(fichier):
    with open(fichier) as f:
        for ligne in f:
            yield ligne.strip()

def filtrer_vides(lignes):
    for ligne in lignes:
        if ligne:
            yield ligne

# Expression génératrice
carres = (x**2 for x in range(1000000))
print(sum(carres))`
          }
        ],
        exercise: {
          id: 'ex-adv-2',
          title: 'Générateur de Fibonacci',
          description: 'Créez un générateur pour la suite de Fibonacci',
          initialCode: `def fibonacci_gen():
    # À compléter
    pass

# Tester
`,
          solution: `def fibonacci_gen():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

gen = fibonacci_gen()
for i in range(10):
    print(next(gen))`,
          expectedOutput: '0\n1\n1\n2\n3\n5\n8\n13\n21\n34',
          hints: ['Utilisez yield', 'Maintenez l\'état avec des variables']
        }
      },
      {
        id: 'ch-adv-3',
        courseId: 'python-advanced',
        title: 'Programmation Asynchrone',
        description: 'Écrire du code concurrent avec async/await',
        duration: 90,
        difficulty: 'advanced',
        lessons: [
          {
            id: 'lesson-adv-3-1',
            title: 'Async/Await Fondamentaux',
            content: `Programmation asynchrone: Exécuter plusieurs tâches concurremment

Concepts:
- async def: Définit une coroutine
- await: Attend la fin d'une opération asynchrone
- asyncio: Bibliothèque pour gérer l'asynchrone
- Event loop: Ordonnanceur des coroutines

Cas d'usage:
- Requêtes HTTP
- Opérations I/O (fichiers, réseau)
- Tâches concurrentes
- Amélioration des performances`,
            codeExample: `import asyncio

async def tache_rapide():
    print("Tâche rapide")
    return "Fini!"

async def tache_lente():
    print("Tâche lente commence")
    await asyncio.sleep(2)
    print("Tâche lente finie")
    return "Résultat"

async def main():
    # Exécuter en parallèle
    resultats = await asyncio.gather(
        tache_rapide(),
        tache_lente(),
        tache_rapide()
    )
    print(resultats)

asyncio.run(main())`
          },
          {
            id: 'lesson-adv-3-2',
            title: 'Patterns Asynchrones Avancés',
            content: `Patterns utiles:

1. Tasks: Créer des tâches indépendantes
2. Queue: Communication entre coroutines
3. Locks: Synchronisation
4. Timeouts: Limiter le temps d'attente

asyncio.create_task(): Crée une tâche
asyncio.Queue(): Partage de données
asyncio.Lock(): Exclusion mutuelle
asyncio.wait_for(): Timeout`,
            codeExample: `import asyncio

async def producteur(queue):
    for i in range(5):
        print(f"Produit: {i}")
        await queue.put(i)
        await asyncio.sleep(1)

async def consommateur(queue):
    while True:
        item = await queue.get()
        print(f"Consommé: {item}")
        queue.task_done()

async def main():
    queue = asyncio.Queue()
    
    await asyncio.gather(
        producteur(queue),
        consommateur(queue)
    )

# asyncio.run(main())`
          }
        ],
        exercise: {
          id: 'ex-adv-3',
          title: 'Requêtes Asynchrones Parallèles',
          description: 'Simulez des requêtes HTTP asynchrones',
          initialCode: `import asyncio

async def requete(id, delai):
    # À compléter
    pass

async def main():
    # À compléter
    pass

# asyncio.run(main())
`,
          solution: `import asyncio

async def requete(id, delai):
    print(f"Requête {id} commence")
    await asyncio.sleep(delai)
    print(f"Requête {id} terminée")
    return f"Résultat {id}"

async def main():
    resultats = await asyncio.gather(
        requete(1, 2),
        requete(2, 1),
        requete(3, 1.5)
    )
    print(resultats)

asyncio.run(main())`,
          expectedOutput: 'Requête 1 commence\nRequête 2 commence\nRequête 3 commence\nRequête 2 terminée\nRequête 3 terminée\nRequête 1 terminée\n[\'Résultat 1\', \'Résultat 2\', \'Résultat 3\']',
          hints: ['Utilisez async/await', 'Utilisez asyncio.gather() pour la parallelisation']
        }
      },
      {
        id: 'ch-adv-4',
        courseId: 'python-advanced',
        title: 'Optimisation et Performance',
        description: 'Optimisez votre code Python pour les performances',
        duration: 75,
        difficulty: 'advanced',
        lessons: [
          {
            id: 'lesson-adv-4-1',
            title: 'Profilage et Mesure de Performance',
            content: `Mesurer avant d'optimiser!

Outils:
- timeit: Mesurer le temps d'exécution
- cProfile: Profiler complet
- memory_profiler: Analyse mémoire
- perf: Performance Python avancée

Optimisations courantes:
- Utiliser les bonnes structures de données
- Vectoriser avec NumPy
- Compiler avec Cython
- Utiliser des implémentations C`,
            codeExample: `import timeit

# Timeit simple
temps = timeit.timeit('x = 1 + 1', number=1000000)
print(f"Temps: {temps:.4f}s")

# Comparer des approches
setup = 'liste = list(range(100))'

temps1 = timeit.timeit('[x*2 for x in liste]', setup=setup, number=100000)
temps2 = timeit.timeit('list(map(lambda x: x*2, liste))', setup=setup, number=100000)

print(f"List comp: {temps1:.4f}s")
print(f"Map: {temps2:.4f}s")`
          },
          {
            id: 'lesson-adv-4-2',
            title: 'Algorithmes Efficaces',
            content: `Complexité algorithmique: Big O notation

- O(1): Constant
- O(n): Linéaire
- O(n²): Quadratique
- O(log n): Logarithmique
- O(n log n): Optimal pour trier

Structures de données optimales:
- Liste: O(n) pour recherche, O(1) pour accès
- Dictionnaire: O(1) pour accès
- Set: O(1) pour existence
- Heap: O(log n) pour insertion/suppression`,
            codeExample: `# Recherche inefficace O(n)
def contient_dans_liste(element, liste):
    for item in liste:
        if item == element:
            return True
    return False

# Efficace O(1)
def contient_dans_set(element, ensemble):
    return element in ensemble

# Pour les grands datasets
import time

# Liste: O(n)
liste = list(range(1000000))
start = time.time()
contient_dans_liste(999999, liste)
print(f"Liste: {time.time() - start:.6f}s")

# Set: O(1)
ensemble = set(range(1000000))
start = time.time()
contient_dans_set(999999, ensemble)
print(f"Set: {time.time() - start:.6f}s")`
          }
        ],
        exercise: {
          id: 'ex-adv-4',
          title: 'Optimiser une Fonction Lente',
          description: 'Optimisez une fonction qui cherche des doublons',
          initialCode: `# Version lente O(n²)
def trouver_doublons_lent(liste):
    doublons = []
    for i in range(len(liste)):
        for j in range(i+1, len(liste)):
            if liste[i] == liste[j] and liste[i] not in doublons:
                doublons.append(liste[i])
    return doublons

# Optimisez cette fonction!
def trouver_doublons_rapide(liste):
    # À compléter
    pass
`,
          solution: `# Version rapide O(n)
def trouver_doublons_rapide(liste):
    vus = set()
    doublons = set()
    for element in liste:
        if element in vus:
            doublons.add(element)
        else:
            vus.add(element)
    return list(doublons)

test = [1, 2, 3, 2, 4, 3, 5]
print(sorted(trouver_doublons_rapide(test)))`,
          expectedOutput: '[2, 3]',
          hints: ['Utilisez des sets pour O(1) lookup', 'Une seule boucle au lieu de deux']
        }
      }
    ],
    totalDuration: 300,
    difficulty: 'advanced',
    language: 'fr'
  }
];

export const getCourse = (courseId: string): Course | undefined => {
  return pythonCourses.find(course => course.id === courseId);
};

export const getChapter = (courseId: string, chapterId: string): Chapter | undefined => {
  const course = getCourse(courseId);
  return course?.chapters.find(ch => ch.id === chapterId);
};
