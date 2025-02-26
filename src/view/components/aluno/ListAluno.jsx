import React, { Component } from "react";
import AlunoDataService from "../../../services/alunoDataService";
import { Link } from "react-router-dom";

export default class ListAluno extends Component {
  constructor(props) {
    super(props);

    this.onChangeSearchNome = this.onChangeSearchNome.bind(this);
    this.retrieveAluno = this.retrieveAluno.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setAlunoSel = this.setAlunoSel.bind(this);
    this.remove = this.remove.bind(this);
    this.searchNome = this.searchNome.bind(this);

    this.state = {
      alunos: [],
      alunoSel: null,
      indice: -1,
      nome: "",
      foto: null,
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

  remove() {
    const { alunoSel } = this.state;
    if (alunoSel) {
      AlunoDataService.delete(alunoSel.id)
        .then(() => {
          this.refreshList();
          this.setState({ alunoSel: null, indice: -1 });
        })
        .catch((e) => {
          console.log("Erro: " + e);
        });
    } else {
      console.log("Nenhum aluno selecionado para exclusão.");
    }
  }

  searchNome() {
    this.setState({
      alunoSel: null,
      indice: -1,
    });

    AlunoDataService.findByName(this.state.nome)
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

    const myStyle = {
      width: "100%",
      alignSelf: "center",
      textAlign: "center",
    };

    return (
      <div className="row justify-content-center">
        <div className="col-md-8 d-flex">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control rounded mr-2"
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
        <div className="row justify-content-center">
          <div className="col-md-6 d-flex flex-column  align-items-center">
            <h3 className="text-center text-light">Alunos</h3>

            <Link to={"/alunos/add"} style={myStyle}>
              <button className="btn btn-outline-secondary btn-warning text-gray w-25">
                Adicionar Aluno
              </button>
            </Link>

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
                    {
                      <img
                        src={
                          aluno.Foto?.url ||
                          "https://filestore.community.support.microsoft.com/api/images/6061bd47-2818-4f2b-b04a-5a9ddb6f6467?upload=true"
                        }
                        alt="Foto do Aluno"
                      />
                    }
                    {aluno.name}
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          {alunoSel ? (
            <div>
              <h4>&nbsp;</h4>
              <div>
                <label></label> {alunoSel.nome}
              </div>

              <Link
                to={"/alunos/" + alunoSel.id}
                className="btn btn-sm btn-warning"
                role="button"
              >
                Atualizar Cadastro
              </Link>
              <button
                className="m-1 btn btn-sm btn-danger"
                onClick={this.remove}
              >
                Excluir Aluno
              </button>
            </div>
          ) : (
            <div className="text-center text-light">
              <h4>&nbsp;</h4>
              <p>
                <i>Selecione um aluno para editar ou excluir</i>
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
