import app from './firebase.js';
import { useState, useEffect } from 'react';
import { getDatabase, ref, onValue, push, remove, off } from 'firebase/database';
import Form from './Form.js';
import LogIn from './LogIn.js';
import './App.css';

function App() {

  const [toDoItems, setToDoItem] = useState([]);
  const [userInput, setUserInput] = useState( '' );
  // ************************ LOG IN ************************
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState( '' );
  const [userNameInput, setUserNameInput] = useState([])

  useEffect( () => {
    const database = getDatabase(app);
    const dbRef = ref(database);

    onValue(dbRef, (response) => {
      // console.log(response.val());

      const data = response.val();

      const updatedDbInfo = []

      for (let key in data) {
        
        updatedDbInfo.push({key: key, name:data[key]});
      }

      

      if(loggedIn === true) {
      setUserName();
      setToDoItem(updatedDbInfo);
      console.log(updatedDbInfo)
    } else {
      //! setUserName('')
      setToDoItem([]);
    }
      

    })
  }, [loggedIn] ); //! put loggedin when finish login section

const handleLogIn = () => {
    setLoggedIn(!loggedIn);
  }

  const handleUserName = () => {
    // setUserName(`${userName}`);
  }


  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const database = getDatabase(app);
    const dbRef = ref(database); 

    // setUserInput('');

    if(userInput.length !== 0) {
      push(dbRef, userInput);
    } else {
      alert('pleaase put some text into form');
      // alert.className.add('alert')
    }

  }

  const handleRemoveToDoItem = (toDoKey) => {
    const database = getDatabase(app);
    const dbRef = ref(database, `/${toDoKey}`);

    remove(dbRef)
  }
  // ************************ LOG IN ************************
  const inputUserNameChange = (event) => {
    console.log(event.target.value);
    // setUserName(event)
  }

  // useEffect( () => {
    
  // });

  // useEffect(() => {
  //   if(loggedIn === true) {
  //     setUserName("radojko")
  //   } else {
  //     setUserName('')
  //   }
  // }, [loggedIn]);


  

  

  return (
    <div className="App">
        <header>

          <h1>Make your priority list for today</h1>

        <LogIn 
        handleLogIn={handleLogIn} 
        handleUserName={handleUserName}
        userName={userName} 
        loggedIn={loggedIn}
        inputUserNameChange={inputUserNameChange}
        />
        </header>
      <div className="wrapper">
        <main>
        <section className="form">
          <Form 
          handleInputChange={handleInputChange}
          userInput={userInput}
          handleSubmit={handleSubmit}
          />
          <div className="alert">
            <p>Please enter text into tex area</p>
            <span>X</span>
          </div>
        </section>
        <section className="list">
          <ol>
            {toDoItems.map( (toDo) => {
              return (   
                <div className="listContainer">
                <li key={toDo.key}>
                  <p>{toDo.name} | {toDo.key} </p>
                </li>
                <button onClick={ () => handleRemoveToDoItem(toDo.key)} className="removeBotton">X</button>
                </div>             
              )
            } )}
          </ol>
        </section>
        </main>
      </div> {/*End .wrapper */}
      <footer>
        <p>Copyright&copy; <a href="https://junocollege.com/">Juno College of Technology </a>
            Created by <a href="https://radoyko.com">Radojko Radulovic</a></p>
      </footer>

    </div>
  );
}

export default App;




// Step 1: Import our app from firebase.js
        // Import useState and useEfect
// Step 2: Set up a stateful variables to hold our To do list information from form

// Step 3: Map through it and display the TO DO LIST on the page

// Step 4: Collect our data from our database, Then push the information into our stateful variables

// Step 5: When we have successfully retrived our data, Store our results in a variable.

// Step6: Our data is an object that contains our TO DO LIST, then loop through our object and push each to an array

// Step 7: Add a form  for users to add TO DO LIST themselves

// Step 8: Create  function that we can use on our input to record the user's input

// Step 9: Create a new statefull veriable to store users input

// Step 10: Bind stateful variable  to a value attribute in our input

// Step 11: Push our user input into our db

// Step 12: Remove each item from TO DO LIST 