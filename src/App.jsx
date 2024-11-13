import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./view/style.css";

import Footer from "./view/components/utils/footer";
import Sidebar from "./view/components/utils/Sidebar";

import ListAluno from "./view/components/aluno/ListAluno";
import AddAluno from "./view/components/aluno/AddAluno";
import UpdAluno from "./view/components/aluno/UpdAluno";
import ListProfessor from "./view/components/professor/ListProfessor";
import AddProfessor from "./view/components/professor/AddProfessor";
import UpdProfessor from "./view/components/professor/UpdProfessor";
//import ListTurma from "./view/components/turma/ListTurma";
//import AddTurma from "./view/components/turma/AddTurma";
//import UpdTurma from "./view/components/turma/UpdTurma";
/* import ListAvisos from "./view/components/avisos/ListAvisos";
import AddAvisos from "./view/components/avisos/AddAvisos";
import UpdAvisos from "./view/components/avisos/UpdAvisos"; */

class App extends Component {
  render() {
    return (
      <div className="d-flex flex-column min-vh-100">
        <h1 className="text-center text-light">Mini Classroom</h1>
        <BrowserRouter>
          <Sidebar />
          <div className="container mt-5" style={{ marginLeft: "120px" }}></div>
          <Routes>
            <Route element={<ListAluno />} path="/alunos/" />
            <Route element={<AddAluno />} path="/alunos/add" />
            <Route element={<UpdAluno />} path="/alunos/:id" />
            <Route element={<ListProfessor />} path="/professores/" />
            <Route element={<AddProfessor />} path="/professores/add" />
            <Route element={<UpdProfessor />} path="/professores/:id" />
            {/*            <Route element={<ListAvisos />} path="/avisos/" />
            <Route element={<AddAvisos />} path="/avisos/add" />
            <Route element={<UpdAvisos />} path="/avisos/:id" /> */}
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
