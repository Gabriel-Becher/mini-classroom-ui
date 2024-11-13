import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./view/style.css";

import ListAluno from "./view/components/listAluno";
import AddAluno from "./view/components/addAluno";
import UpdAluno from "./view/components/updAluno";
import ListProfessor from "./view/components/listProfessor";
import AddProfessor from "./view/components/addProfessor";
import UpdProfessor from "./view/components/updProfessor";
import ListTurma from "./view/components/listTurma";
import AddTurma from "./view/components/addTurma";
import UpdTurma from "./view/components/updTurma";


class App extends Component {
  render() {
    return (
      <div className="d-flex flex-column min-vh-100">
        <h1 className="text-center text-light">
          Mini Classroom
        </h1>
        <BrowserRouter>
          <Sidebar />
          <div className="container mt-3 flex-grow-1" style={{ marginLeft: "120px" }}>
            <Routes>
            <Route element={<ListAluno />} path="/aluno/" />
            <Route element={<ListAluno />} path="/aluno/list" />
            <Route element={<AddAluno />} path="/aluno/add" />
            <Route element={<UpdAluno />} path="/aluno/list/:id" />
            <Route element={<ListProfessor />} path="/" />
            <Route element={<ListProfessor />} path="/list" />
            <Route element={<AddProfessor />} path="/add" />
            <Route element={<UpdProfessor />} path="/list/:id" />
            <Route element={<ListTurma />} path="/" />
            <Route element={<ListTurma />} path="/list" />
            <Route element={<AddTurma />} path="/add" />
            <Route element={<UpdTurma />} path="/list/:id" />
            </Routes>
          </div>
        </BrowserRouter>
        <footer className="footer py-3 mt-auto bg-dark text-light">
          <div className="container">
            <p className="text-center mb-0">
              Mini Classroom, por Gabriel Becher e Matheus Felipe
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

class Sidebar extends Component {
  render() {
    return (
      <div
        className="bg-light border-right vh-100 border border-black border-1 border-top-0 border-down-0 border-left-0"
        style={{ width: "120px", position: "fixed", top: "0" }}
      >
        <ul className="nav flex-column p-2 ">
        <li className="nav-item">
            <Link to={"/aluno/list"} className="nav-link">
              <img
                className="d-block mx-auto"
                src="https://img.icons8.com/fluency/64/google-classroom.png"
                alt="Ícone do class"
                width="64"
                height="64"
              />
            </Link>
            <hr></hr>
          </li>
          <li className="nav-item">
            <Link to={"/aluno/list"} className="nav-link">
              <img
                className="d-block mx-auto"
                src="https://img.icons8.com/pastel-glyph/64/student-male--v1.png"
                alt="Ícone de um estudante"
                width="64"
                height="64"
              />
            </Link>
            <hr></hr>
          </li>
          <li className="nav-item">
            <Link to={"/professor/"} className="nav-link">
              <img
                className="d-block mx-auto"
                src="https://img.icons8.com/external-wanicon-solid-wanicon/64/external-teacher-online-learning-wanicon-solid-wanicon.png"
                alt="Ícone de um professor"
                width="64"
                height="64"
              />
            </Link>
            <hr></hr>
          </li>
          <li className="nav-item">
            <Link to={"/turma/"} className="nav-link">
              <img
                className="d-block mx-auto"
                src="https://img.icons8.com/external-wanicon-solid-wanicon/64/external-classroom-kindergarten-wanicon-solid-wanicon.png"
                alt="Ícone de uma sala de aula"
                width="64"
                height="64"
              />
            </Link>
            <hr></hr>
          </li>
          <li className="nav-item">
            <Link to={"/aviso/"} className="nav-link">
              <img
                className="d-block mx-auto"
                src="https://img.icons8.com/ios-filled/64/envelope-dots.png"
                alt="Ícone de mensagens/avisos"
                width="64"
                height="64"
              />
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
