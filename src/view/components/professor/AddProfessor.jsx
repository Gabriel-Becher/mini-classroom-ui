import React, { Component } from "react";
import ProfessorDataService from "../../../services/professorDataService";
import { Link } from "react-router-dom";
import TurmaDataService from "../../../services/turmaDataService";

export default class AddProfessor extends Component {
  constructor(props) {
    super(props);

    this.onChangeNome = this.onChangeNome.bind(this);
    this.saveProfessor = this.saveProfessor.bind(this);
    this.newProfessor = this.newProfessor.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.state = {
      id: null,
      name: "",
      turma_id: undefined,
      turmas: [],
    };
  }

  onChangeNome(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeTurmaId(e) {
    this.setState({
      turma_id: e.target.value,
    });
  }

  saveProfessor() {
    var data = {
      name: this.state.name,
      turma_id: this.state.turma_id,
    };

    ProfessorDataService.create(data)
      .then((response) => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          turma_id: response.data.turma_id,
        });
      })
      .catch((e) => {
        console.log("Erro: " + e);
      });
  }

  componentDidMount() {
    TurmaDataService.getAll()
      .then((response) => {
        this.setState({
          turmas: response.data,
        });
      })
      .then(() => {
        this.setState({
          turma_id: this.state.turmas[0].id,
        });
      });
  }

  newProfessor() {
    this.setState({
      id: null,
      name: "",
      turma_id: undefined,
      turmas: null,
    });
  }

  render() {
    const { turmas } = this.state;

    return (
      <div style={{ maxWidth: "400px", margin: "auto" }}>
        {this.state.id ? (
          <div>
            <h5>Novo Professor criado</h5>
            <Link
              className="btn btn-primary"
              to={"/professores/add"}
              onClick={this.newProfessor}
              role="button"
              content="Continuar"
            >
              Continuar
            </Link>
          </div>
        ) : (
          <div style={{ maxWidth: "400px", margin: "auto" }}>
            <div className="form-group">
              <label htmlFor="Nome">
                <strong>Nome do Professor</strong>
              </label>
              <input
                type="text"
                className="form-control"
                id="nome"
                required
                onChange={this.onChangeNome}
                name="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="turma">
                <strong>Turma</strong>
              </label>
              <select
                className="form-control"
                id="turmas"
                name="turmas"
                required
                onChange={this.onChangeTurmaId}
              >
                {turmas &&
                  turmas.map((turma) => (
                    <option key={turma.id} value={turma.id}>
                      {turma.name}
                    </option>
                  ))}
              </select>
            </div>
            <p></p>
            <button onClick={this.saveProfessor} className="btn btn-primary">
              Criar
            </button>
          </div>
        )}
      </div>
    );
  }
}
