import React from 'react';
import './App.css';
import Navbar from './component/navbar';
import { Route } from 'react-router-dom';
import ToDoList from './component/todolist';

function App() {
  return (
    <div className="App">
      <Navbar/>
      
        <Route path='/' component={ToDoList}/>
    </div>
  );
}

export default App;
