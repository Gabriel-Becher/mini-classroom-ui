import React, { Component } from "react";
import withRouter from "../utils/myRoute";
import AlunoDataService from "../../../services/alunoDataService";

class UpdAluno extends Component {
  constructor(props) {
    super(props);

    this.onChangeNome = this.onChangeNome.bind(this);
    this.saveAluno = this.saveAluno.bind(this);

    this.state = {
      id: undefined,
      name: "",
      update: 0,
    };
  }

  onChangeNome(e) {
    this.setState({
      name: e.target.value,
    });
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    AlunoDataService.get(id).then((response) => {
      this.setState({
        id: response.data.id,
        name: response.data.name,
      });
    });
  }

  saveAluno() {
    const data = {
      name: this.state.name,
    };

    AlunoDataService.update(this.state.id, data)
      .then((response) => {
        this.setState({
          name: response.data.name,
          update: 1,
        });
      })
      .catch((e) => {
        console.log("Erro: " + e);
      });
  }

  render() {
    return (
      <div style={{ maxWidth: "400px", margin: "auto" }}>
        <div style={{ maxWidth: "400px", margin: "auto" }}>
          <div className="form-group">
            {this.state.update === 1 ? (
              <h1>Aluno autalizado com sucesso</h1>
            ) : (
              <>
                <label htmlFor="Nome">
                  <strong>Nome do aluno</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nome"
                  required
                  value={this.state.name}
                  onChange={this.onChangeNome}
                  name="name"
                />
              </>
            )}
          </div>

          <p></p>
          <button onClick={this.saveAluno} className="btn btn-primary">
            Salvar
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(UpdAluno);
