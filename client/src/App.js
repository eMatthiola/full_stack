import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodos';
import UserPage from "./components/UserPage"; 
import HomePage from "./components/HomePage";

function App() {
  // return <>
  // <InputTodo/>
  // <ListTodos/>
  // </>;
  return (
    <Router>
      <div>
        {/* Menu */}
        <nav>
          <ul>
            <li>
              <Link to = "/">Home</Link>
            </li>
            <li>
              <Link to = "/todos">Todo List</Link>
            </li>
            <li>
              <Link to = "/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* Router */}
        <Routes>
          <Route path="/" element = {<HomePage />} />
          <Route path="/todos" element = {
            <>
              <InputTodo/>
              <ListTodos/>
            </>}
          />
          <Route path="/users" element = {<UserPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
