/**
 * Vérifie si le code Python soumis produit la sortie attendue
 * Utilise une approche simple basée sur :
 * 1. Vérification de la présence de fonctions clés (print, variables, etc.)
 * 2. Analyse du code pour déterminer s'il est logiquement correct
 */

interface CheckResult {
  isCorrect: boolean;
  message: string;
  feedback: string;
  score: number; // 0-100
}

/**
 * Normalise le code en supprimant les espaces inutiles et commentaires
 */
const normalizeCode = (code: string): string => {
  return code
    .split('\n')
    .filter(line => !line.trim().startsWith('#'))
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .join('\n')
    .toLowerCase();
};

/**
 * Extrait les fonctions print() du code
 */
const extractPrintStatements = (code: string): string[] => {
  const printRegex = /print\s*\(\s*([^)]+)\s*\)/g;
  const matches: string[] = [];
  let match;

  while ((match = printRegex.exec(code)) !== null) {
    let content = match[1];
    // Nettoyer les guillemets - plus robuste
    content = content.replace(/^["']+|["']+$/g, '').trim();
    matches.push(content);
  }

  return matches;
};

/**
 * Vérifie si le code contient les variables requises
 */
const checkVariablePresence = (code: string, requiredVars: string[]): boolean => {
  const normalized = normalizeCode(code);
  return requiredVars.every(varName => {
    const varPattern = new RegExp(`\\b${varName}\\s*[=:]`, 'i');
    return varPattern.test(normalized);
  });
};

/**
 * Vérifie si le code appelle les bonnes fonctions
 */
const checkFunctionCalls = (code: string, requiredFunctions: string[]): boolean => {
  const normalized = normalizeCode(code);
  return requiredFunctions.every(func => {
    const funcPattern = new RegExp(`\\b${func}\\s*\\(`, 'i');
    return funcPattern.test(normalized);
  });
};

/**
 * Vérifie si le code contient une boucle, condition, ou fonction
 */
const hasControlStructure = (code: string): boolean => {
  const normalized = normalizeCode(code);
  const hasLoop = /\b(for|while)\b/.test(normalized);
  const hasCondition = /\b(if|elif|else)\b/.test(normalized);
  const hasFunction = /\bdef\s+\w+\s*\(/.test(normalized);
  return hasLoop || hasCondition || hasFunction;
};

/**
 * Fonction principale de vérification
 */
export const checkExerciseAnswer = (
  userCode: string,
  solution: string,
  expectedOutput: string,
  exerciseDescription: string
): CheckResult => {
  if (!userCode || userCode.trim().length === 0) {
    return {
      isCorrect: false,
      message: '❌ Votre code est vide',
      feedback: 'Veuillez écrire du code pour cet exercice.',
      score: 0
    };
  }

  const normalizedCode = normalizeCode(userCode);
  const normalizedSolution = normalizeCode(solution);

  // Exact match - le meilleur cas
  if (normalizedCode === normalizedSolution) {
    return {
      isCorrect: true,
      message: '✅ Réponse correcte! Excellent!',
      feedback: 'Votre code est exactement correct. Continuez ainsi!',
      score: 100
    };
  }

  // Vérification utilisant expectedOutput
  if (expectedOutput && expectedOutput.trim().length > 0) {
    const normalizedExpectedOutput = expectedOutput.toLowerCase().trim();
    const userPrints = extractPrintStatements(userCode);
    
    // Vérifier si un print correspond à la sortie attendue
    const hasMatchingOutput = userPrints.some(print => {
      const normalizedPrint = print.toLowerCase();
      return normalizedPrint === normalizedExpectedOutput ||
             normalizedExpectedOutput.includes(normalizedPrint) ||
             normalizedPrint.includes(normalizedExpectedOutput);
    });
    
    if (hasMatchingOutput && userPrints.length > 0) {
      return {
        isCorrect: true,
        message: '✅ Sortie correcte détectée!',
        feedback: 'Votre code produit la sortie attendue. Bien joué!',
        score: 95
      };
    }
  }

  // Vérifier les print statements par rapport à la solution
  const userPrints = extractPrintStatements(userCode);
  const expectedPrints = extractPrintStatements(solution);

  // Si l'exercice demande des print
  if (expectedPrints.length > 0) {
    if (userPrints.length === 0) {
      return {
        isCorrect: false,
        message: '❌ Pas de print() détecté',
        feedback: 'Votre code ne contient pas d\'appel à print(). Utilisez print() pour afficher les résultats.',
        score: 10
      };
    }

    // Vérifier si au moins la moitié des prints sont corrects
    let correctPrints = 0;
    const maxChecks = Math.min(userPrints.length, expectedPrints.length);
    
    for (let i = 0; i < maxChecks; i++) {
      const userPrint = userPrints[i].toLowerCase();
      const expectedPrint = expectedPrints[i].toLowerCase();
      
      // Vérification plus flexible
      if (userPrint === expectedPrint || 
          expectedPrint.includes(userPrint) || 
          userPrint.includes(expectedPrint)) {
        correctPrints++;
      }
    }

    if (correctPrints > 0) {
      const printScore = Math.round((correctPrints / expectedPrints.length) * 70) + 30;
      const isFullyCorrect = correctPrints === expectedPrints.length && userPrints.length === expectedPrints.length;
      
      return {
        isCorrect: isFullyCorrect,
        message: isFullyCorrect ? '✅ Tous les prints sont corrects!' : '⚠️ Partiellement correct',
        feedback: isFullyCorrect 
          ? 'Excellent! Tous vos affichages sont corrects.' 
          : `Vous avez ${correctPrints}/${expectedPrints.length} affichages corrects. Vérifiez la sortie attendue.`,
        score: Math.min(99, printScore)
      };
    }
  }

  // Vérifier les variables si mentionnées dans la description
  const varPattern = /\b(nom|age|pays|prenom|email|password|note|score|resultat|valeur)\b/gi;
  const varMatches = exerciseDescription.match(varPattern);
  
  if (varMatches && varMatches.length > 0) {
    // Éviter les doublons
    const requiredVars = [...new Set(varMatches.map(v => v.toLowerCase()))];
    
    if (checkVariablePresence(userCode, requiredVars)) {
      const controlScore = hasControlStructure(userCode) ? 10 : 0;
      const hasPrints = userPrints.length > 0 ? 5 : 0;
      return {
        isCorrect: false,
        message: '⚠️ Structure correcte, mais sortie inexacte',
        feedback: `Vos variables sont présentes, mais la sortie n'est pas exacte. Vérifiez votre code ligne par ligne.`,
        score: 50 + controlScore + hasPrints
      };
    }
  }

  // Vérifier les fonctions utilisées
  if (checkFunctionCalls(userCode, ['print'])) {
    const controlScore = hasControlStructure(userCode) ? 10 : 0;
    const hasVariables = varMatches && varMatches.length > 0 ? 5 : 0;
    return {
      isCorrect: false,
      message: '⚠️ Code valide, mais sortie incorrecte',
      feedback: 'Votre code utilise les bonnes fonctions, mais le résultat n\'est pas celui attendu. Comparez avec la solution.',
      score: 40 + controlScore + hasVariables
    };
  }

  // Code semble avoir du contenu mais ne correspond pas
  const controlScore = hasControlStructure(userCode) ? 15 : 0;
  const variableScore = varMatches && varMatches.length > 0 ? 5 : 0;
  const printScore = userPrints.length > 0 ? 5 : 0;
  
  return {
    isCorrect: false,
    message: '❌ Réponse incorrecte',
    feedback: 'Votre code n\'est pas correct. Consultez les indices ou la solution proposée.',
    score: Math.max(5, 20 + controlScore + variableScore + printScore)
  };
};