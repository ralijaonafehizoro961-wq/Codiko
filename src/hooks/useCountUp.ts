import { useEffect, useState } from 'react';

/**
 * Hook pour animer un nombre de 0 à une valeur cible
 * @param target - La valeur cible
 * @param duration - Durée de l'animation en millisecondes
 * @returns Le nombre actuel animé
 */
export const useCountUp = (target: number, duration: number = 1200): number => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (target === 0) {
      setCount(0);
      return;
    }

    let startValue = 0;
    const increment = target / (duration / 16); // Mise à jour tous les ~16ms (60fps)

    const timer = setInterval(() => {
      startValue += increment;
      if (startValue >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(startValue));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return count;
};
