import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import TodoList from "./components/todo-list.component";
import EditToDo from "./components/edit-todo.component";
import CreateToDo from "./components/create-todo.component";

import logo from "./logo.png";

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a
            className="navbar-brand"
            href="https://www.cambio.se/"
            target="_blank"
          >
            <img src={logo} width="30" height="30" alt="Logo" />
          </a>
          <Link to="/" className="navbar-brand">
            MERN Stack ToDo App
          </Link>
          <div className="collpse nav-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">
                  ToDos
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">
                  Create ToDo
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <Route path="/" exact component={TodoList} />
        <Route path="/edit/:id" component={EditToDo} />
        <Route path="/create" component={CreateToDo} />
      </div>
    </Router>
  );
}

export default App;
