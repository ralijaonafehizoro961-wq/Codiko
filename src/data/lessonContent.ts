// Enriched lesson content with detailed explanations and code examples

export interface LessonDetails {
  title: string;
  explanation: string;
  codeExample: string;
  keyPoints: string[];
  tips: string[];
}

export const enrichedLessons: Record<string, LessonDetails> = {
  // BEGINNER LEVEL
  'lesson1-1': {
    title: 'Qu\'est-ce que Python?',
    explanation: `# À propos de Python

Python est un **langage de programmation interprété** créé en 1991 par Guido van Rossum. 
C'est l'un des langages les plus populaires au monde grâce à sa syntaxe simple et lisible.

## Pourquoi Python?

🎯 **Syntaxe claire et simple** - Le code Python ressemble presque à de l'anglais naturel
⚡ **Très polyvalent** - Utilisé en data science, web, automatisation, IA, etc.
🚀 **Communauté active** - Des millions de développeurs et d'immenses librairies disponibles
📚 **Facile à apprendre** - Parfait pour débuter en programmation

## Caractéristiques principales

- **Interprété**: Le code s'exécute ligne par ligne sans compilation préalable
- **Dynamiquement typé**: Pas besoin de déclarer le type des variables
- **Multi-paradigme**: Supporte la programmation procédurale, orientée objet et fonctionnelle
- **Multiplateforme**: Fonctionne sur Windows, macOS, Linux

## Où est utilisé Python?

- 🤖 Intelligence Artificielle et Machine Learning (TensorFlow, PyTorch)
- 📊 Data Science et analyse de données (Pandas, NumPy, Matplotlib)
- 🌐 Développement web (Django, Flask, FastAPI)
- 🔧 Automatisation et scripting
- 🎮 Développement de jeux (Pygame)
- 🔬 Calcul scientifique et recherche`,
    codeExample: `# Votre premier programme Python
print("Bienvenue dans le monde de Python!")

# Les variables
nom = "Alice"
age = 25
print(f"Bonjour {nom}, vous avez {age} ans")

# Les opérations mathématiques
a = 10
b = 3
print(f"Addition: {a + b}")
print(f"Soustraction: {a - b}")
print(f"Multiplication: {a * b}")
print(f"Division: {a / b}")
print(f"Division entière: {a // b}")
print(f"Modulo: {a % b}")`,
    keyPoints: [
      'Python est un langage interprété et facile à apprendre',
      'Syntaxe claire et lisible proche de l\'anglais naturel',
      'Utilisé partout: IA, data science, web, automatisation',
      'Dynamiquement typé: pas besoin de déclarer les types',
      'La communauté Python est très active et bienveillante'
    ],
    tips: [
      '💡 Python est sensible à l\'indentation - c\'est une partie de sa syntaxe',
      '💡 Utilisez des noms de variables explicites pour votre code',
      '💡 Les commentaires commencent par # et sont ignorés par l\'interpréteur',
      '💡 Python possède plus de 300 000 librairies disponibles via pip'
    ]
  },

  'lesson1-2': {
    title: 'Installation et Configuration',
    explanation: `# Installation de Python

## Pour Windows

1. Allez sur [python.org](https://python.org)
2. Téléchargez la dernière version (3.12+)
3. **Cochez "Add Python to PATH"** - C'est important!
4. Cliquez sur "Install Now"
5. Vérifiez: Ouvrez cmd et tapez \`python --version\`

## Pour macOS

**Avec Homebrew** (recommandé):
\`\`\`
brew install python3
\`\`\`

**Ou télécharger depuis python.org** - Téléchargez l'installateur macOS

## Pour Linux

La plupart des distributions ont Python pré-installé.
Pour Ubuntu/Debian:
\`\`\`
sudo apt update
sudo apt install python3
\`\`\`

## Environnements Virtuels (IMPORTANT!)

Un environnement virtuel est un espace isolé où vous installez vos packages.
C'est **très important** pour éviter les conflits de dépendances!

### Créer un environnement virtuel:

\`\`\`
python -m venv mon_env
\`\`\`

### Activer l'environnement:

**Windows**:
\`\`\`
mon_env\\Scripts\\activate
\`\`\`

**macOS/Linux**:
\`\`\`
source mon_env/bin/activate
\`\`\`

## Éditeurs Recommandés

- **VS Code** (gratuit, léger, excellent) ⭐
- **PyCharm** (professionnel, lourd mais puissant)
- **Thonny** (parfait pour débuter)
- **IDLE** (simple, intégré à Python)`,
    codeExample: `# Vérifiez votre installation
import sys
print(f"Version Python: {sys.version}")
print(f"Chemin Python: {sys.executable}")

# Affichage simple
print("Installation réussie!")
print("Vous êtes prêt à commencer!")

# Liste des packages installés
import pip
print("\\nPackages installés:")
help('modules')`,
    keyPoints: [
      'Python 3.9+ est recommandé (les versions antérieures ne sont plus supportées)',
      'Toujours ajouter Python à PATH lors de l\'installation Windows',
      'Les environnements virtuels évitent les conflits de dépendances',
      'pip est le gestionnaire de packages Python standard',
      'VS Code est l\'éditeur gratuit le plus populaire'
    ],
    tips: [
      '💡 Utilisez TOUJOURS un environnement virtuel pour vos projets',
      '💡 Installez les packages uniquement quand l\'environnement est activé',
      '💡 Testez votre installation avec: python --version',
      '💡 Pour Jupyter Notebook: pip install jupyter'
    ]
  },

  'lesson2-1': {
    title: 'Variables et Types de Données',
    explanation: `# Variables et Types de Données

## Qu'est-ce qu'une Variable?

Une variable est un **nom qui référence une valeur en mémoire**. C'est comme une boîte qui contient une valeur.

\`\`\`
nom = "Alice"  # La variable 'nom' contient "Alice"
age = 25       # La variable 'age' contient 25
\`\`\`

## Règles de Nommage

✅ **Autorisé**:
- Lettres, chiffres, underscores
- Commence par une lettre ou underscore
- Sensible à la casse (nom ≠ Nom)

❌ **Interdit**:
- Espaces dans les noms
- Commencer par un chiffre
- Utiliser les mots-clés Python (if, for, while, etc.)

## Types de Données Primitifs

### 1. **Entiers (int)**
Les nombres entiers positifs ou négatifs sans décimales.

\`\`\`python
age = 25
temperature = -5
distance = 1000000
\`\`\`

### 2. **Nombres flottants (float)**
Les nombres avec décimales.

\`\`\`python
prix = 19.99
pi = 3.14159
temperature = -5.5
\`\`\`

### 3. **Chaînes de caractères (str)**
Du texte entre guillemets (simples ou doubles).

\`\`\`python
prenom = "Alice"
message = 'Bonjour le monde'
long_texte = """Ceci est un 
texte sur plusieurs
lignes"""
\`\`\`

### 4. **Booléens (bool)**
Deux valeurs possibles: True ou False (vrai ou faux).

\`\`\`python
est_actif = True
est_admin = False
\`\`\`

### 5. **None**
Représente l'absence de valeur.

\`\`\`python
resultat = None
\`\`\`

## Typage Dynamique

Python détermine automatiquement le type. Vous pouvez même changer le type d'une variable!

\`\`\`python
x = 42          # int
x = 3.14        # float
x = "Python"    # str
\`\`\`

## Conversion de Types

Vous pouvez convertir entre les types:

\`\`\`python
int("42")           # "42" → 42
float("3.14")       # "3.14" → 3.14
str(123)            # 123 → "123"
bool(1)             # 1 → True
list("ABC")         # "ABC" → ['A', 'B', 'C']
\`\`\``,
    codeExample: `# Exemples de variables et types
nom = "Marie"
age = 28
poids = 65.5
est_etudiant = True
email = None

# Affichage des variables
print(f"Nom: {nom}")
print(f"Âge: {age}")
print(f"Poids: {poids} kg")
print(f"Est étudiant: {est_etudiant}")

# Vérifier les types
print(f"\\nType de nom: {type(nom)}")
print(f"Type de age: {type(age)}")
print(f"Type de poids: {type(poids)}")
print(f"Type de est_etudiant: {type(est_etudiant)}")

# Conversion de types
note_texte = "95"
note_number = int(note_texte)
print(f"\\nNote convertie: {note_number} (type: {type(note_number)})")

# Opérations avec les strings
message = "Python est " + "génial!"
print(f"Message: {message}")
print(f"Longueur: {len(message)} caractères")`,
    keyPoints: [
      'Une variable est un nom qui contient une valeur en mémoire',
      'Python est dynamiquement typé: vous n\'avez pas besoin de déclarer les types',
      'Les 5 types primitifs: int, float, str, bool, None',
      'Utilisez des noms de variables explicites et en minuscules avec underscores',
      'Vous pouvez convertir entre les types avec int(), float(), str(), etc.'
    ],
    tips: [
      '💡 Utilisez f-strings pour combiner texte et variables: f"Bonjour {nom}"',
      '💡 Vérifiez le type avec type(variable)',
      '💡 Les noms de variables doivent être explicites: price au lieu de p',
      '💡 Python respecte la casse: age ≠ Age ≠ AGE'
    ]
  },

  'lesson2-2': {
    title: 'Opérateurs et Expressions',
    explanation: `# Opérateurs et Expressions

## Opérateurs Arithmétiques

Utilisés pour effectuer des calculs mathématiques.

| Opérateur | Nom | Exemple | Résultat |
|-----------|-----|---------|----------|
| + | Addition | 5 + 3 | 8 |
| - | Soustraction | 5 - 3 | 2 |
| * | Multiplication | 5 * 3 | 15 |
| / | Division | 6 / 2 | 3.0 |
| // | Division entière | 7 // 2 | 3 |
| % | Modulo (reste) | 7 % 3 | 1 |
| ** | Exponentiation | 2 ** 3 | 8 |

## Opérateurs de Comparaison

Comparent deux valeurs et retournent True ou False.

\`\`\`python
5 == 5      # Égalité (True)
5 != 3      # Inégalité (True)
5 > 3       # Supérieur à (True)
5 < 3       # Inférieur à (False)
5 >= 5      # Supérieur ou égal (True)
5 <= 3      # Inférieur ou égal (False)
\`\`\`

## Opérateurs Logiques

Combinent plusieurs conditions booléennes.

### AND (et)
Retourne True si **tous** les éléments sont vrais.

\`\`\`python
age = 25
salaire = 50000
if age >= 18 and salaire >= 30000:
    print("Éligible pour un crédit")
\`\`\`

### OR (ou)
Retourne True si **au moins un** élément est vrai.

\`\`\`python
permis_conduire = True
passeport = False
if permis_conduire or passeport:
    print("Vous avez une pièce d'identité")
\`\`\`

### NOT (non)
Inverse le résultat booléen.

\`\`\`python
est_occupé = False
if not est_occupé:
    print("Vous êtes disponible")
\`\`\`

## Opérateurs d'Attribution

Assignent une valeur à une variable.

\`\`\`python
x = 10          # Attribution simple
x += 5          # Équivalent à: x = x + 5 (x vaut 15)
x -= 3          # Équivalent à: x = x - 3 (x vaut 12)
x *= 2          # Équivalent à: x = x * 2 (x vaut 24)
x /= 4          # Équivalent à: x = x / 4 (x vaut 6.0)
\`\`\`

## Priorité des Opérateurs

Les calculs se font dans cet ordre:
1. **Parenthèses** ()
2. **Exponentiation** **
3. **Multiplication, Division** *, /, //, %
4. **Addition, Soustraction** +, -

\`\`\`python
resultat = 2 + 3 * 4      # = 2 + 12 = 14
resultat = (2 + 3) * 4    # = 5 * 4 = 20
\`\`\``,
    codeExample: `# Opérateurs arithmétiques
a = 20
b = 3

print("=== OPÉRATEURS ARITHMÉTIQUES ===")
print(f"Addition: {a} + {b} = {a + b}")
print(f"Soustraction: {a} - {b} = {a - b}")
print(f"Multiplication: {a} * {b} = {a * b}")
print(f"Division: {a} / {b} = {a / b}")
print(f"Division entière: {a} // {b} = {a // b}")
print(f"Modulo: {a} % {b} = {a % b}")
print(f"Exponentiation: {a} ** {b} = {a ** b}")

# Opérateurs de comparaison
print("\\n=== OPÉRATEURS DE COMPARAISON ===")
print(f"20 == 20: {20 == 20}")
print(f"20 != 3: {20 != 3}")
print(f"20 > 3: {20 > 3}")
print(f"20 < 3: {20 < 3}")

# Opérateurs logiques
x, y = 10, 5
print("\\n=== OPÉRATEURS LOGIQUES ===")
print(f"x > 5 and y < 10: {x > 5 and y < 10}")
print(f"x < 5 or y < 10: {x < 5 or y < 10}")
print(f"not (x < 5): {not (x < 5)}")

# Opérateurs d'attribution
print("\\n=== OPÉRATEURS D'ATTRIBUTION ===")
n = 10
n += 5
print(f"n += 5 → n = {n}")
n -= 3
print(f"n -= 3 → n = {n}")`,
    keyPoints: [
      'Les opérateurs arithmétiques permettent les calculs mathématiques',
      'Les opérateurs de comparaison retournent des booléens (True/False)',
      'Les opérateurs logiques combinent plusieurs conditions (and, or, not)',
      'Les opérateurs d\'attribution combinent assignation et opération',
      'La priorité des opérateurs suit les règles mathématiques standard'
    ],
    tips: [
      '💡 Utilisez des parenthèses pour clarifier l\'ordre des opérations',
      '💡 En division: / donne un float, // donne un entier',
      '💡 Modulo (%) donne le reste d\'une division',
      '💡 and, or, not aident à écrire des conditions complexes et lisibles'
    ]
  },

  'lesson3-1': {
    title: 'Structures Conditionnelles',
    explanation: `# Structures Conditionnelles

Les structures conditionnelles permettent à votre code de **faire des choix** selon différentes conditions.

## L'instruction if (si)

\`\`\`python
age = 18

if age >= 18:
    print("Vous êtes majeur")
\`\`\`

L'indentation (espaces) est **cruciale** en Python!

## La structure if-else (si-sinon)

\`\`\`python
age = 15

if age >= 18:
    print("Vous êtes majeur")
else:
    print("Vous êtes mineur")
\`\`\`

## La structure if-elif-else

Utilisez **elif** pour tester plusieurs conditions.

\`\`\`python
note = 75

if note >= 90:
    print("Excellent!")
elif note >= 80:
    print("Très bien!")
elif note >= 70:
    print("Bien")
elif note >= 60:
    print("Passable")
else:
    print("Échoué")
\`\`\`

## Conditions Imbriquées

Vous pouvez imbriquer les conditions pour plus de contrôle.

\`\`\`python
age = 25
permis = True

if age >= 18:
    if permis:
        print("Vous pouvez conduire")
    else:
        print("Vous devez d'abord passer votre permis")
else:
    print("Vous êtes trop jeune pour conduire")
\`\`\`

## Conditions Simples avec and/or

Pour simplifier:

\`\`\`python
age = 25
permis = True

if age >= 18 and permis:
    print("Vous pouvez conduire")

# Ou avec 'or'
if age < 18 or not permis:
    print("Vous ne pouvez pas conduire")
\`\`\`

## Expressions Ternaires

Format court pour une condition simple:

\`\`\`python
age = 20
statut = "Majeur" if age >= 18 else "Mineur"
print(statut)  # Affiche: Majeur
\`\`\``,
    codeExample: `# Exemple 1: Vérifier l'accès à un site
age = 17

if age < 13:
    print("Accès refusé: vous êtes trop jeune")
elif age < 18:
    print("Accès limité: contenu pour ados")
elif age < 65:
    print("Accès complet")
else:
    print("Tarif senior disponible")

# Exemple 2: Calculer une note
score = 85

if score >= 90:
    grade = "A+"
elif score >= 80:
    grade = "A"
elif score >= 70:
    grade = "B"
else:
    grade = "C"

print(f"Votre note: {grade}")

# Exemple 3: Conditions imbriquées
email = "user@example.com"
password = "secret123"
is_verified = True

if email and password:
    if is_verified:
        print("✓ Connexion réussie!")
    else:
        print("⚠️ Veuillez vérifier votre email")
else:
    print("❌ Email ou mot de passe manquant")`,
    keyPoints: [
      'if teste une condition et exécute le code si True',
      'else exécute le code si la condition est False',
      'elif (else if) teste une autre condition',
      'L\'indentation détermine le bloc de code à exécuter',
      'and/or peuvent combiner plusieurs conditions'
    ],
    tips: [
      '💡 L\'indentation en Python est obligatoire et significative',
      '💡 Utilisez if-elif-else plutôt que plusieurs if',
      '💡 Les expressions ternaires rendent le code plus court et lisible',
      '💡 Testez vos conditions avec print() pour déboguer'
    ]
  },

  'lesson4-1': {
    title: 'Boucles',
    explanation: `# Boucles

Les boucles permettent de **répéter un bloc de code plusieurs fois** sans recopier le code.

## Boucle for (pour)

La boucle for itère sur une séquence (liste, chaîne, plage, etc.).

### For avec range()

\`\`\`python
for i in range(5):
    print(i)
# Affiche: 0, 1, 2, 3, 4
\`\`\`

**range()** génère une séquence de nombres:
- **range(5)** → 0 à 4
- **range(1, 5)** → 1 à 4
- **range(0, 10, 2)** → 0, 2, 4, 6, 8

### For avec une liste

\`\`\`python
fruits = ["pomme", "banane", "orange"]

for fruit in fruits:
    print(fruit)
\`\`\`

### For avec enumerate()

\`\`\`python
fruits = ["pomme", "banane", "orange"]

for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")
# Affiche: 0: pomme, 1: banane, 2: orange
\`\`\`

## Boucle while (tant que)

La boucle while répète tant qu'une condition est vraie.

\`\`\`python
compteur = 0

while compteur < 5:
    print(compteur)
    compteur += 1
# Affiche: 0, 1, 2, 3, 4
\`\`\`

⚠️ **Attention**: Une boucle while infinie peut bloquer votre programme!

\`\`\`python
# ❌ DANGER: boucle infinie!
while True:
    print("Bloqué pour toujours...")
\`\`\`

## break et continue

### break: Arrête la boucle

\`\`\`python
for i in range(10):
    if i == 5:
        break
    print(i)
# Affiche: 0, 1, 2, 3, 4
\`\`\`

### continue: Saute à la prochaine itération

\`\`\`python
for i in range(5):
    if i == 2:
        continue
    print(i)
# Affiche: 0, 1, 3, 4
\`\`\`

## Boucle else

Exécute le code else si la boucle complète sans break.

\`\`\`python
for i in range(5):
    if i == 10:
        break
else:
    print("Boucle terminée normalement")
\`\`\``,
    codeExample: `# Boucle for simple
print("=== Boucle for avec range ===")
for i in range(5):
    print(f"Itération {i}")

# Boucle for avec liste
print("\\n=== Boucle for avec liste ===")
couleurs = ["rouge", "vert", "bleu"]
for couleur in couleurs:
    print(f"Couleur: {couleur}")

# Boucle for avec enumerate
print("\\n=== Boucle avec enumerate ===")
for index, couleur in enumerate(couleurs):
    print(f"{index + 1}. {couleur}")

# Boucle while
print("\\n=== Boucle while ===")
compte = 1
while compte <= 5:
    print(f"Compte: {compte}")
    compte += 1

# Break et continue
print("\\n=== Break et continue ===")
for i in range(10):
    if i == 3:
        continue  # Saute 3
    if i == 7:
        break     # Arrête à 7
    print(i, end=" ")

# Table de multiplication
print("\\n\\n=== Table de 5 ===")
for i in range(1, 11):
    print(f"5 × {i} = {5 * i}")`,
    keyPoints: [
      'for itère sur une séquence (liste, plage, chaîne)',
      'while répète tant qu\'une condition est vraie',
      'range(n) génère une séquence de 0 à n-1',
      'break arrête la boucle immédiatement',
      'continue saute à la prochaine itération'
    ],
    tips: [
      '💡 Utilisez for pour itérer sur des collections',
      '💡 Utilisez while pour des conditions plus complexes',
      '💡 enumerate() donne l\'index et la valeur',
      '💡 Attention aux boucles infinies avec while True!'
    ]
  },

  'lesson5-1': {
    title: 'Fonctions',
    explanation: `# Fonctions

Les fonctions sont des **blocs de code réutilisables** qui effectuent une tâche spécifique.

## Créer une Fonction

\`\`\`python
def saluer():
    print("Bonjour!")

saluer()  # Appel de la fonction
\`\`\`

## Paramètres et Arguments

Les **paramètres** sont définis dans la fonction, les **arguments** sont passés lors de l'appel.

\`\`\`python
def saluer(nom):
    print(f"Bonjour {nom}!")

saluer("Alice")  # "Alice" est l'argument
\`\`\`

## Valeurs de Retour

La fonction peut **retourner** une valeur:

\`\`\`python
def additionner(a, b):
    return a + b

resultat = additionner(5, 3)  # resultat = 8
\`\`\`

## Paramètres par Défaut

Définissez des valeurs par défaut:

\`\`\`python
def saluer(nom="Monde"):
    print(f"Bonjour {nom}!")

saluer()           # Affiche: Bonjour Monde!
saluer("Alice")    # Affiche: Bonjour Alice!
\`\`\`

## Paramètres Nommés

Passez les arguments par nom:

\`\`\`python
def creer_profil(nom, email, age=18):
    print(f"Profil créé: {nom} ({email}), {age} ans")

creer_profil(nom="Alice", email="alice@example.com", age=25)
creer_profil("Bob", "bob@example.com")
\`\`\`

## Docstrings

Documentez vos fonctions:

\`\`\`python
def calculer_moyenne(notes):
    """
    Calcule la moyenne d'une liste de notes.
    
    Arguments:
        notes: liste de nombres
    
    Retour:
        La moyenne des notes
    """
    return sum(notes) / len(notes)
\`\`\`

## *args et **kwargs

Pour des nombres variables d'arguments:

\`\`\`python
def somme_tous(*nombres):
    return sum(nombres)

somme_tous(1, 2, 3, 4, 5)  # = 15

def afficher_infos(**kwargs):
    for cle, valeur in kwargs.items():
        print(f"{cle}: {valeur}")

afficher_infos(nom="Alice", age=25, ville="Paris")
\`\`\``,
    codeExample: `# Fonction simple
def dire_bonjour():
    print("Bonjour!")

dire_bonjour()

# Fonction avec paramètres
def ajouter(a, b):
    return a + b

resultat = ajouter(10, 5)
print(f"Résultat: {resultat}")

# Fonction avec paramètres par défaut
def presentation(nom, ville="Paris"):
    print(f"{nom} habite à {ville}")

presentation("Alice")
presentation("Bob", ville="Lyon")

# Fonction plus complexe
def calculer_remise(prix, pourcentage=10):
    """Calcule le prix après remise"""
    remise = prix * (pourcentage / 100)
    prix_final = prix - remise
    return prix_final, remise

prix = 100
nouveau_prix, montant_remise = calculer_remise(prix, 20)
print(f"Prix original: {prix}€")
print(f"Remise: {montant_remise}€")
print(f"Prix final: {nouveau_prix}€")

# Fonction avec *args
def afficher_tous(*items):
    for item in items:
        print(f"- {item}")

afficher_tous("Pomme", "Banane", "Orange", "Raisin")`,
    keyPoints: [
      'Une fonction est un bloc de code réutilisable défini avec def',
      'Les paramètres sont les variables de la fonction',
      'return retourne une valeur à qui a appelé la fonction',
      'Les paramètres par défaut rendent les paramètres optionnels',
      '*args et **kwargs permettent un nombre variable d\'arguments'
    ],
    tips: [
      '💡 Donnez à vos fonctions des noms explicites (verbes d\'action)',
      '💡 Utilisez des docstrings pour documenter vos fonctions',
      '💡 Une fonction doit faire UNE chose et bien la faire',
      '💡 Retournez souvent une valeur plutôt que d\'imprimer'
    ]
  },

  'lesson6-1': {
    title: 'Structures de Données',
    explanation: `# Structures de Données

Les structures de données permettent d'**organiser et stocker plusieurs valeurs**.

## Listes (List)

Une liste est une **collection ordonnée et modifiable** d'éléments.

\`\`\`python
# Créer une liste
fruits = ["pomme", "banane", "orange"]

# Accéder aux éléments
premier = fruits[0]  # "pomme"
dernier = fruits[-1]  # "orange"

# Modifier un élément
fruits[1] = "raisin"

# Ajouter un élément
fruits.append("fraise")

# Supprimer un élément
fruits.remove("pomme")

# Longueur
len(fruits)  # 3
\`\`\`

## Tuples

Un tuple est comme une liste, mais **immuable** (ne peut pas être changé).

\`\`\`python
coordonnees = (10, 20)
nom, age = ("Alice", 25)  # Déballage

# Les tuples ne peuvent pas être modifiés:
# coordonnees[0] = 15  # ❌ Erreur!
\`\`\`

## Dictionnaires (Dict)

Un dictionnaire stocke des **paires clé-valeur**.

\`\`\`python
personne = {
    "nom": "Alice",
    "age": 25,
    "ville": "Paris"
}

# Accéder
nom = personne["nom"]

# Modifier
personne["age"] = 26

# Ajouter
personne["email"] = "alice@example.com"

# Supprimer
del personne["email"]

# Les clés
personne.keys()    # dict_keys(['nom', 'age', 'ville'])
\`\`\`

## Ensembles (Set)

Un ensemble contient des éléments **uniques** et **non ordonnés**.

\`\`\`python
couleurs = {"rouge", "vert", "bleu"}

# Ajouter
couleurs.add("jaune")

# Supprimer
couleurs.remove("rouge")

# Union
couleurs1 = {"rouge", "vert"}
couleurs2 = {"vert", "bleu"}
union = couleurs1 | couleurs2  # {"rouge", "vert", "bleu"}

# Intersection
intersection = couleurs1 & couleurs2  # {"vert"}
\`\`\`

## Comparaison

| Type | Mutable | Ordonné | Clés |
|------|---------|---------|------|
| Liste | Oui | Oui | Index |
| Tuple | Non | Oui | Index |
| Dict | Oui | Oui (3.7+) | Clés |
| Set | Oui | Non | - |`,
    codeExample: `# Listes
fruits = ["pomme", "banane", "orange"]
print("Fruits:", fruits)
print("Premier fruit:", fruits[0])
fruits.append("raisin")
print("Après ajout:", fruits)

# Itération
print("\\nFruits un par un:")
for fruit in fruits:
    print(f"  - {fruit}")

# Dictionnaires
eleve = {
    "nom": "Alice",
    "age": 17,
    "moyenne": 18.5,
    "classe": "2nde"
}
print(f"\\nÉlève: {eleve['nom']}")
print(f"Âge: {eleve['age']} ans")
print(f"Moyenne: {eleve['moyenne']}")

# Tuples
coordonnees = (10, 20)
x, y = coordonnees
print(f"\\nCoordonnées: x={x}, y={y}")

# Ensembles
nombres_uniques = {1, 2, 3, 2, 1}
print(f"\\nNombres uniques: {nombres_uniques}")

# Compréhension de liste
carres = [x**2 for x in range(1, 6)]
print(f"Carrés de 1 à 5: {carres}")`,
    keyPoints: [
      'Les listes sont mutables (modifiables) et ordonnées',
      'Les tuples sont immuables et ordonnés',
      'Les dictionnaires stockent des paires clé-valeur',
      'Les ensembles contiennent des éléments uniques sans ordre',
      'Choisissez la structure appropriée selon vos besoins'
    ],
    tips: [
      '💡 Utilisez des listes pour des collections ordonnées',
      '💡 Utilisez des dictionnaires pour stocker des données nommées',
      '💡 Les tuples sont parfaits pour les constantes et retours multiples',
      '💡 Les ensembles éliminent les doublons automatiquement'
    ]
  }
};

// Interface pour l'accès aux leçons enrichies
export function getEnrichedLesson(lessonId: string): LessonDetails | undefined {
  return enrichedLessons[lessonId];
}

export function hasEnrichedContent(lessonId: string): boolean {
  return lessonId in enrichedLessons;
}
