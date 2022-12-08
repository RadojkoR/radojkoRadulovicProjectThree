import app from "./firebase.js";
import { useState, useEffect } from "react";
import { getDatabase, ref, onValue, push, remove } from "firebase/database";
import Form from "./Form.js";
import "./App.css";

function App() {
  
  // Step 2: Set up a stateful variables to hold To do list item
  const [toDoItems, setToDoItem] = useState([]);
  //Set up a stateful variables to hold  user input
  const [userInput, setUserInput] = useState("");
  
  // Collect data from database
  useEffect(() => {
    const database = getDatabase(app);
    const dbRef = ref(database);

    onValue(dbRef, (response) => {
      const data = response.val();
      const updatedDbInfo = [];
      for (let key in data) {
        updatedDbInfo.push({ key: key, name: data[key] });
      }
      setToDoItem(updatedDbInfo);
    });
  }, []);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };
  // Push user input into our db
  const handleSubmit = (event) => {
    event.preventDefault();

    const database = getDatabase(app);
    const dbRef = ref(database);

    setUserInput("");

    if (userInput.length !== 0) {
      push(dbRef, userInput);
    } else {
      alert("Pleaase put some text into text area");
    }
  };
    //  Remove each item from TO DO LIST
    const handleRemoveToDoItem = (toDoKey) => {
    const database = getDatabase(app);
    const dbRef = ref(database, `/${toDoKey}`);

    remove(dbRef);
  };

  return (
    <div className="App">
      <header>
        <h1>Make your priority list for today</h1>
      </header>
      <div className="wrapper">
        <main>
          <section className="form">
            <Form
              handleInputChange={handleInputChange}
              userInput={userInput}
              handleSubmit={handleSubmit}
            />
          </section>
          <section className="list">
            <ol>
              {/* Map through it and display the TO DO LIST on the page */}
              {toDoItems.map((toDo) => {
                return (
                  <div className="listContainer">
                    <li key={toDo.key}>
                      <p>
                        {toDo.name}
                      </p>
                    </li>
                    <button
                      onClick={() => handleRemoveToDoItem(toDo.key)}
                      className="removeBotton"
                    >
                      X
                    </button>
                  </div>
                );
              })}
            </ol>
          </section>
        </main>
      </div>{" "}
      {/*End .wrapper */}
      <footer>
        <p>
          Copyright&copy;{" "}
          <a href="https://junocollege.com/">Juno College of Technology </a>
          Created by <a href="https://radoyko.com">Radojko Radulovic</a>
        </p>
      </footer>
    </div>
  );
}

export default App;

