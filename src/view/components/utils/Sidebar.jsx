import React from "react";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div
      className="bg-light border-right vh-100 border border-black border-1 border-top-0 border-down-0 border-left-0"
      style={{ width: "120px", position: "fixed", top: "0" }}
    >
      <ul className="nav flex-column p-2 ">
        <li className="nav-item">
          <Link to={"/alunos/"} className="nav-link">
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
          <Link to={"/alunos/"} className="nav-link">
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
          <Link to={"/professores/"} className="nav-link">
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
          <Link to={"/turmas/"} className="nav-link">
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
          <Link to={"/avisos/"} className="nav-link">
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
