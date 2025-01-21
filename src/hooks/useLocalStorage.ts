import { useState, useEffect, useCallback } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  // Criar um nome de evento único para este storage
  const storageEventName = `storage_updated_${key}`;

  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value: T | ((prevValue: T) => T)) => {
      try {
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        window.localStorage.setItem(key, JSON.stringify(valueToStore));

        // Disparar evento customizado quando o valor mudar
        window.dispatchEvent(
          new CustomEvent(storageEventName, {
            detail: valueToStore,
          })
        );
      } catch (error) {
        console.error(error);
      }
    },
    [key, storedValue, storageEventName]
  );

  // Escutar por mudanças de outras instâncias
  useEffect(() => {
    const handleStorageUpdate = (e: CustomEvent<T>) => {
      setStoredValue(e.detail);
    };

    window.addEventListener(
      storageEventName,
      handleStorageUpdate as EventListener
    );

    return () => {
      window.removeEventListener(
        storageEventName,
        handleStorageUpdate as EventListener
      );
    };
  }, [storageEventName]);

  return [storedValue, setValue] as const;
}
