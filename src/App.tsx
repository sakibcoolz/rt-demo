import React, { useState } from 'react';
import logo from './logo.svg';
import Greeting from './components/practice1/practice';
import UserProfile from './components/practice2/practice';
import TaskForm from './components/practice4/worklist';
import './App.css';

interface Data {
  age: number;
  isAdmin?: boolean;
}

function App() {
  const [name, setName] = useState("sakib");
  const [data, setData] = useState();
  return (
    <div className="App">
      <Greeting name={name}/>
      <br />
      <UserProfile age={12} isAdmin={false} />
      <div>
        <TaskForm />
      </div>
    </div>


  );
}

export default App;
