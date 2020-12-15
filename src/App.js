import React, { useEffect, useState } from 'react';
import Todo from "./Todo";
import {Button, FormControl, Input, InputLabel } from "@material-ui/core";
import './App.css';
import db from "./Firebase";
import firebase from "firebase"; 

function App() {
  //This is a comment
  const [todos, setTodos] = useState([]); 
  //Creates an array that let's you append to it live (Don't need to refrech it)
  const [input, setInput] = useState(""); //Makes so that the input field is empty

  //When the app loads, we need to listen to the database and fetch new todos as they get added/removed
  
  useEffect(() => {
    //This code here fires when the app.js loads
    db.collection("todos").orderBy("timestamp", "desc").onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo}))) 
    })
  }, []);

  const addTodo = (event) => {
    //This will fire of when we click the button
    event.preventDefault();      //Stops the refreching

    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setTodos([...todos, input]); //Appends the new todo (from input) to the old array
    setInput(""); //Clears the input
  }
  return (
    <div className="App">
      <h1>Hello World</h1>
      <form>
        <FormControl>
          <InputLabel>Write a todo</InputLabel>
          <Input value = {input} onChange = {event => setInput(event.target.value)} />
        </FormControl>
        <Button disabled = {!input} type = "submit" onClick = {addTodo} variant="contained" color="primary">
          Add Todo
        </Button>
      </form>


      <ul> {/*Were the todos will appear*/}

      {/* A loop that takes one element a 
      time and pushes it in a HTML list and prints it out*/}

        {todos.map(todo => (
          <Todo todo = {todo}/> //Calls for the todo prop in the Todo file
        ))}
      </ul>
    </div>
  );
}

export default App;
