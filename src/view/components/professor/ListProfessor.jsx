import React, { Component } from "react";
import ProfessorDataService from "../../../services/professorDataService";
import { Link } from "react-router-dom";

export default class ListProfessor extends Component {
  constructor(props) {
    super(props);

    this.retrieveProfessor = this.retrieveProfessor.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setProfSel = this.setProfSel.bind(this);
    this.remove = this.remove.bind(this);

    this.state = {
      professores: [],
      profSel: null,
      indice: -1,
      nome: "",
    };
  }

  componentDidMount() {
    this.retrieveProfessor();
  }

  retrieveProfessor() {
    ProfessorDataService.getAll()
      .then((response) => {
        this.setState({
          professores: response.data,
        });
      })
      .catch((e) => {
        console.log("Erro: " + e);
      });
  }

  refreshList() {
    this.retrieveProfessor();
    this.setState({
      alunoSel: null,
      indice: -1,
    });
  }

  setProfSel(Professor, index) {
    this.setState({
      profSel: Professor,
      indice: index,
    });
  }

  remove() {
    ProfessorDataService.delete(this.state.profSel.id)
      .then(() => {
        this.refreshList();
      })
      .catch((e) => {
        console.log("Erro: " + e);
      });
  }

  render() {
    const { professores, profSel, indice } = this.state;
    const myStyle = {
      width: "100%",
      alignSelf: "center",
      textAlign: "center",
    };
    return (
      <div className="row justify-content-center">
        <div className="col-md-6 d-flex flex-column  align-items-center">
          <h3 className="text-center">Professores</h3>
          <Link to={"/professores/add"} style={myStyle}>
            <button className="btn btn-outline-secondary btn-warning text-gray w-25">
              Adicionar Professor
            </button>
          </Link>
          <ul className="list-group">
            {professores &&
              professores.map((professor, index) => (
                <li
                  className={
                    "list-group-item " + (index === indice ? "active" : "")
                  }
                  onClick={() => this.setProfSel(professor, index)}
                  key={index}
                >
                  {professor.name}
                </li>
              ))}
          </ul>
        </div>
        <div className="col-md-6">
          {profSel ? (
            <div>
              <h4>&nbsp;</h4>
              <div>
                <label>
                  <strong>Nome:</strong>
                </label>{" "}
                {profSel.name}
              </div>

              <Link
                to={"/professores/" + profSel.id}
                className="btn btn-sm btn-warning"
                role="button"
              >
                Editar
              </Link>
              <button
                className="m-1 btn btn-sm btn-danger"
                onClick={this.remove}
              >
                Excluir Professor
              </button>
            </div>
          ) : (
            <div>
              <h4>&nbsp;</h4>
              <p>
                <i>Selecione um professor</i>
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
