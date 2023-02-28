import React, { useState } from "react";

function App() {
  // Define the initial state for the input text and the list items
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  // Handle the change in the input value
  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  // Add an item to the list of items
  function addItem() {
    // Use the spread operator to add the new item to the end of the items array
    setItems((prevValue) => {
      return [...prevValue, inputText];
    });
    // Clear the input text after adding an item
    setInputText("");
  }

  // Render the application
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        {/* Input for entering text */}
        <input
          type="text"
          placeholder="Title..."
          onChange={handleChange} // Handle the change in the input value
          value={inputText} // The input value is the state of the input text
        />
        {/* Button for adding an item */}
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        {/* List of items */}
        <ul>
          {/* Map each item in the items array to create list items */}
          {items.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Export the application
export default App;

// Este código es una aplicación de lista de tareas simples escrita en React.

// La aplicación utiliza dos hooks de estado de React: useState. Uno para el texto de entrada inputText y otro para la lista de elementos items.

// El componente App se encarga de renderizar los componentes que conforman la aplicación, que consta de tres secciones:

//     div con la clase "heading" que muestra un título.
//     div con la clase "form" que contiene un input y un button. El input es donde el usuario puede ingresar el texto de una tarea, y el button se utiliza para agregar la tarea a la lista de tareas.
//     div que contiene una ul y una serie de li. La ul es donde se mostrarán las tareas que se han agregado a la lista.

// La función handleChange se llama cada vez que se detecta un cambio en el input. Actualiza el estado del inputText con el nuevo valor del input.

// La función addItem se llama cuando el usuario hace clic en el botón "Add". Agrega el texto del inputText a la lista de tareas (items) utilizando el método setItems. La función también vacía el valor del inputText después de agregar el elemento a la lista.

// Finalmente, la lista de tareas se muestra en la sección div que contiene la ul. La lista se genera utilizando el método map en el array items y se muestra como una serie de li.

// En resumen, este código es una aplicación de lista de tareas simple escrita en React, que utiliza hooks de estado para manejar la entrada del usuario y la lista de tareas.
