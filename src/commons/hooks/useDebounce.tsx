import { useState, useEffect } from 'react';

// Hook
function useDebounce(value: any, delay: number) {
  // Estado y setters para el valor debounced
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      // Actualizar debouncedValue después del delay especificado
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      // Cancelar el timeout si value cambia (también si delay o el componente desmonta)
      // Esto es cómo cancelamos el debouncedValue si el usuario sigue escribiendo
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay] // Solo reactivar si value o delay cambian
  );

  return debouncedValue;
}

export default useDebounce;
