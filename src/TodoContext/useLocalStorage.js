import React from "react";

function useLocalStorage(itemName, initialValue) {

  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(()=> {
      try {
        const localStorageItem = localStorage.getItem(itemName, initialValue);
  
        let parsedItem;
  
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
  
        setLoading(false);
  
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    },2000);
  },[]);


  const saveItem = (newItem) => {
    localStorage.setItem(newItem, JSON.stringify(newItem));

    setItem(newItem);
  };

  return { item, saveItem, loading, error };
}

export { useLocalStorage };



// localStorage.removeItem('TODOS_V1');

// const defaultTodos = [
//   { text: 'React Course', completed: true },
//   { text: 'Tomar el Curso de Intro a React.js', completed: false },
//   { text: 'Complete L2 KNIME', completed: false },
//   { text: 'Test1', completed: false },
//   { text: 'Curso de Introducción a los Patrones de Diseño de Software', completed: true },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));