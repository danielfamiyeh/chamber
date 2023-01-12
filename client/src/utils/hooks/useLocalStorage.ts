import { useEffect, useRef, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useLocalStorage = <T>(key: string, initialValue: T) => {
  const valRef = useRef(initialValue);
  const [val, setVal] = useState<T>(initialValue);

  useEffect(() => {
    /** Load value from local storage onMount */
    const init = async () => {
      const storedValue = await AsyncStorage.getItem(key);
      console.log({ storedValue });
      if (storedValue) {
        setVal(JSON.parse(storedValue));
      }
    };
    init();
  }, [key]);

  // Watch val with ref to save onUnmount
  useEffect(() => {
    valRef.current = val;
  }, [val]);

  /**
   * Update stored value and state value
   * @param {T} _val New value
   */
  const setStoredVal = (_val: T) => {
    setVal(_val);
    AsyncStorage.setItem(key, JSON.stringify(_val));
  };

  return { val, setVal, setStoredVal };
};

export default useLocalStorage;
