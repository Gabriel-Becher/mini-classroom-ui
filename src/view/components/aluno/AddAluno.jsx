import React, { Component } from "react";
import AlunoDataService from "../../../services/alunoDataService";
import TurmaDataService from "../../../services/turmaDataService";
import FotoDataService from "../../../services/fotoDataService";
export default class AddAluno extends Component {
  constructor(props) {
    super(props);

    this.onChangeNome = this.onChangeNome.bind(this);
    this.onChangeFoto = this.onChangeFoto.bind(this);
    this.saveAluno = this.saveAluno.bind(this);
    this.newAluno = this.newAluno.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);

    this.state = {
      id: null,
      name: "",
      foto: null,
      turmas: [],
      turma: -1,
    };
  }

  onChangeNome(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeFoto(e) {
    this.setState({
      foto: e.target.files[0],
    });
  }

  onChangeTurma(e) {
    this.setState({
      turma: e.target.key,
    });
  }

  saveAluno() {
    var data = {
      name: this.state.name,
      foto: this.state.foto,
      turma_id: this.state.turma,
    };

    AlunoDataService.create(data)
      .then((response) => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
        });
        const aluno_id = response.data.id;
        const formData = new FormData();
        formData.append("aluno_id", aluno_id);
        formData.append("picture", data.foto);
        console.log(formData.entries());
        FotoDataService.create(formData);
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
          turma: this.state.turmas[0].id,
        });
      });
  }

  newAluno() {
    this.setState({
      id: null,
      name: "",
      foto: null,
      turma,
    });
  }

  render() {
    const { turmas } = this.state;

    return (
      <div style={{ maxWidth: "400px", margin: "auto" }}>
        {this.state.id ? (
          <div>
            <h5>Novo aluno criado</h5>
            <button className="btn btn-blue" onClick={this.newAluno}>
              Continuar adicionando
            </button>
          </div>
        ) : (
          <div style={{ maxWidth: "400px", margin: "auto" }}>
            <div className="form-group">
              <label htmlFor="Nome">
                <strong>Nome do aluno</strong>
              </label>
              <input
                type="text"
                className="form-control"
                id="nome"
                required
                value={this.state.nome}
                onChange={this.onChangeNome}
                name="nome"
              />
            </div>

            <div className="form-group">
              <label htmlFor="foto">
                <strong>foto</strong>
              </label>
              <input
                type="file"
                accept="image/pgn, image/jpeg, image/jpg"
                className="form-control"
                id="foto"
                required
                onChange={this.onChangeFoto}
                name="foto"
              />
            </div>
            <div className="form-group">
              <label htmlFor="turmas">Turma</label>
              <select
                className="form-control"
                id="turmas"
                name="turmas"
                required
              >
                {turmas &&
                  turmas.map((turma) => (
                    <option key={turma.id}>{turma.name}</option>
                  ))}
              </select>
            </div>
            <button
              onClick={this.saveAluno}
              className="btn btn-primary btn-outline-white"
            >
              Criar
            </button>
          </div>
        )}
      </div>
    );
  }
}
