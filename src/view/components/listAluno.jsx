import React, { Component } from "react";
import AlunoDataService from "../../services/alunoDataService";
import { Link } from "react-router-dom";

export default class ListAluno extends Component {
  constructor(props) {
    super(props);

    this.onChangeSearchNome = this.onChangeSearchNome.bind(this);
    this.retrieveAluno = this.retrieveAluno.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setAlunoSel = this.setAlunoSel.bind(this);
    this.removeAll = this.removeAll.bind(this);
    this.searchNome = this.searchNome.bind(this);

    this.state = {
      alunos: [],
      alunoSel: null,
      indice: -1,
      nome: "",
    };
  }

  componentDidMount() {
    this.retrieveAluno();
  }

  onChangeSearchNome(e) {
    const searchNome = e.target.value;

    this.setState({
      nome: searchNome,
    });
  }

  retrieveAluno() {
    AlunoDataService.getAll()
      .then((response) => {
        this.setState({
          alunos: response.data,
        });
      })
      .catch((e) => {
        console.log("Erro: " + e);
      });
  }

  refreshList() {
    this.retrieveAluno();
    this.setState({
      alunoSel: null,
      indice: -1,
    });
  }

  setAlunoSel(aluno, index) {
    this.setState({
      alunoSel: aluno,
      indice: index,
    });
  }

  removeAll() {
    AlunoDataService.deleteAll()
      .then(() => {
        this.refreshList();
      })
      .catch((e) => {
        console.log("Erro: " + e);
      });
  }

  searchNome() {
    this.setState({
      alunoSel: null,
      indice: -1,
    });

    AlunoDataService.findByNome(this.state.nome)
      .then((response) => {
        this.setState({
          alunos: response.data,
        });
      })
      .catch((e) => {
        console.log("Erro: " + e);
      });
  }

  render() {
    const { nome, alunos, alunoSel, indice } = this.state;

    return (
      <div className="row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar pelo nome"
              value={nome}
              onChange={this.onChangeSearchNome}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary btn-light"
                type="button"
                onClick={this.searchNome}
              >
                Buscar
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h3 className="text-center">Alunos</h3>
          <ul className="list-group">
            {alunos &&
              alunos.map((aluno, index) => (
                <li
                  className={
                    "list-group-item " + (index === indice ? "active" : "")
                  }
                  onClick={() => this.setAlunoSel(aluno, index)}
                  key={index}
                >
                  {aluno.name}
                </li>
              ))}
          </ul>

          <button
            className="m-1 btn btn-sm btn-danger"
            onClick={this.removeAll}
          >
            Excluir todos
          </button>
        </div>
        <div className="col-md-6">
          {alunoSel ? (
            <div>
              <h4>&nbsp;</h4>
              <div>
                <label>
                  <strong>Nome:</strong>
                </label>{" "}
                {alunoSel.nome}
              </div>

              <Link
                to={"/list/" + alunoSel.id}
                className="btn btn-sm btn-warning"
                role="button"
              >
                Editar
              </Link>
            </div>
          ) : (
            <div>
              <h4>&nbsp;</h4>
              <p>
                <i>Selecione um aluno</i>
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
