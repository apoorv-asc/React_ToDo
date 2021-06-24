import React, {useState, useEffect} from 'react';
import './App.css';
import {Input, InputLabel, FormControl, Button } from '@material-ui/core';
import Todo from './components/Todo';
import db from './firebase'
import firebase from 'firebase';

function App() {
  
  const [todos, setTodos]=useState([]);
  const [input,setInput]=useState('');

  // When the app loads, we need to listen to the database and get new todos
  // as they get added/removed
  useEffect(()=> {
    // this code fires either when the app.js loads
    // or <[input]> variable loads 1:42

    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot =>{
      setTodos(snapshot.docs.map(doc => ({id:doc.id, todo:doc.data().task})))
      // snapshot.docs.map(doc => doc.data().task) returns an array of todos from Firebase
    })
  },[input])

  function addTodo(event) {
    event.preventDefault(); // Stops form from submitting

    db.collection('todos').add({
      task:input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    // Fired off when we click the button
    // This function takes input's value and appends it to todos
    setTodos([...todos,input]);
    
    setInput(''); // sets input value to blank
  }

  return (
    <div className="App">
      <>
      <h1>Todo's App</h1>
      <form>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input  value={input} onChange={events => setInput(events.target.value)}/>
        </FormControl>
        <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={addTodo}>
        Add ToDo
        </Button>
      </form>
      <ul>
        {todos.map(todo =>(
          <Todo todo={todo} />
        ))}
      </ul>
      </>
    </div>
  );
}

export default App;
