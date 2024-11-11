import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./view/style.css"

import ListAluno from "./view/components/listAluno";

class Sidebar extends Component {
  render() {
    return (
      <div className="bg-light border-right vh-100" style={{ width: "120px", position: "fixed", top: "56px" }}>
        <h5 className="text-center mt-3">Navegação</h5>
        <ul className="nav flex-column p-2">
          <li className="nav-item">
            <Link to="/add" className="nav-link"><img className="d-block mx-auto" src="./public/adicionar-usuario.png" alt="" width="50" height="50"/></Link>
          </li>
          <li className="nav-item">
            <Link to="/update" className="nav-link"><img className="d-block mx-auto" src="./public/editar.png" alt="" width="50" height="50" /></Link>
          </li>
        </ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              <Link to={"/list"} className="navbar-brand">
                <div className="d-flex justify-content-start align-items-center">
                  <img src="/classroom_icon.jpg" alt="Ícone Class" width="30" height="30" className="rounded float-left" />
                  <b><i>Mini Class</i></b>
                </div>
              </Link>
              <button
                className="navbar-toggler btn-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse btn-light" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          
          <Sidebar />

          <div className="container mt-3" style={{ marginLeft: "220px" }}>
            <Routes>
              <Route element={<ListAluno />} path="/" />
              <Route element={<ListAluno />} path="/list" />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;