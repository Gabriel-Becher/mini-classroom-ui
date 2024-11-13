import React, { Component } from "react";
import withRouter from "../utils/myRoute";
import ProfessorDataService from "../../../services/professorDataService";
import TurmaDataService from "../../../services/turmaDataService";

class UpdProfessor extends Component {
  constructor(props) {
    super(props);

    this.saveProfessor = this.saveProfessor.bind(this);
    this.onChangeTurmaId = this.onChangeTurmaId.bind(this);

    this.state = {
      id: undefined,
      name: "",
      turma_id: undefined,
      turmas: [],
    };
  }

  onChangeTurmaId(e) {
    this.setState({
      turma_id: e.target.value,
    });
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    ProfessorDataService.get(id).then((response) => {
      this.setState({
        id: response.data.id,
        name: response.data.name,
        turma_id: response.data.turma_id,
      });
    });
    TurmaDataService.getAll().then((response) => {
      this.setState({
        turmas: response.data,
      });
    });
  }

  saveProfessor() {
    const { turma_id } = this.state;
    ProfessorDataService.update(this.state.id, { turma_id });
  }

  render() {
    let { turmas } = this.state;
    return (
      <div style={{ maxWidth: "400px", margin: "auto" }}>
        <div style={{ maxWidth: "400px", margin: "auto" }}>
          <div className="form-group">
            {this.state.update === 1 ? (
              <h1>Professor atualizado com sucesso</h1>
            ) : (
              <>
                <label htmlFor="Nome">
                  <strong>Nome do Professor</strong>
                </label>
                <h5>{this.state.name}</h5>
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
                <p></p>
                <button
                  onClick={this.saveProfessor}
                  className="btn btn-primary"
                >
                  Salvar
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(UpdProfessor);
