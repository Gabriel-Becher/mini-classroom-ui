import React, { Component } from "react";
import withRouter from "../utils/myRoute";
import AlunoDataService from "../../../services/alunoDataService";
import FotoDataService from "../../../services/fotoDataService";

class UpdAluno extends Component {
  constructor(props) {
    super(props);

    this.onChangeFoto = this.onChangeFoto.bind(this);
    this.saveAluno = this.saveAluno.bind(this);

    this.state = {
      id: undefined,
      name: "",
      foto: null,
      update: 0,
    };
  }

  onChangeFoto(e) {
    this.setState({
      foto: e.target.files[0],
    });
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    AlunoDataService.get(id).then((response) => {
      this.setState({
        id: response.data.id,
        name: response.data.name,
        fotoOrg: response.data.Foto?.url,
        foto: null,
      });
    });
  }

  saveAluno() {
    const formData = new FormData();
    formData.append("aluno_id", this.state.id);
    formData.append("picture", this.state.foto);

    FotoDataService.update(this.state.id, formData)
      .then(() => {
        this.setState({
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
              <h1>Aluno atualizado com sucesso</h1>
            ) : (
              <>
                <label htmlFor="foto">Foto Atual:</label>
                <img
                  className="special"
                  src={
                    this.state.fotoOrg ||
                    "https://filestore.community.support.microsoft.com/api/images/6061bd47-2818-4f2b-b04a-5a9ddb6f6467?upload=true"
                  }
                  alt=""
                />
                <input
                  type="file"
                  accept="image/pgn, image/jpeg, image/jpg"
                  className="form-control"
                  id="foto"
                  required
                  onChange={this.onChangeFoto}
                  name="foto"
                />
                <label htmlFor="Nome">
                  <strong>Nome do aluno</strong>
                </label>
                <h5>{this.state.name}</h5>

                <p></p>
                <button onClick={this.saveAluno} className="btn btn-primary">
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

export default withRouter(UpdAluno);
