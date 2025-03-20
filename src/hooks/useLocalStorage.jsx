import { useState } from "react";

export const useLocalStorage = (key) => {

    const [value, setValue] = useState(() => {
        const storedValue = JSON.parse(localStorage.getItem(key))
        return storedValue ? storedValue : null;
    })

    const setItem = (initialValue) => {
      setValue(initialValue);
      localStorage.setItem(key, JSON.stringify(initialValue));
    }

    const removeItem = () => {
      localStorage.removeItem(key);
    }

    return [
        value,
        {
          setItem,
          removeItem,
        },
      ]
};
