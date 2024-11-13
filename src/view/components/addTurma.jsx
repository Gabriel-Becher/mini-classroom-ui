import React, { Component } from "react";
import TurmaDataService from "../../services/turmaDataService";

export default class AddTurma extends Component {

    constructor(props) {
        super(props);

        this.onChangeNome = this.onChangeNome.bind(this);
        this.onChangeFoto = this.onChangeFoto.bind(this);
        this.saveAluno = this.saveAluno.bind(this);
        this.newAluno = this.newAluno.bind(this);    
    
        this.state = {
            id: null,
            nome: "",
            foto: null, 
          };
    }

    onChangeNome(e) {
        this.setState({
          nome: e.target.value
        });
      }

      onChangeFoto(e) {
        this.setState({
          foto: e.target.value
        });
      }

      saveAluno() {
        var data = {
          nome: this.state.nome,
          foto: this.state.foto
        };
    
        AlunoDataService.create(data)
          .then(response => {
            this.setState({
              id: response.data.id,
              nome: response.data.nome,
              foto: response.data.foto,
            });
          })
          .catch(e => {
            console.log("Erro: " + e);
          });
      }

    newAluno() {
        this.setState({
          id: null,
          nome: "",
          foto: null,
        });
    }

    render() {
        return (
            <div style={{maxWidth: "400px", margin: "auto"}}>
                { this.state.id ? (
                              <div>
                              <h5>Novo aluno criado</h5>
                              <button className="btn btn-blue" onClick={this.newAluno}>
                                Continuar adicionando
                              </button>
                            </div>
                  
                ) : (
                  <div style={{maxWidth: "400px", margin: "auto"}}>
                    <div className="form-group">
                      <label htmlFor="Nome"><strong>Nome do aluno</strong></label>
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
                      <label htmlFor="foto"><strong>foto</strong></label>
                      <input
                        type="image/png"
                        className="form-control"
                        id="foto"
                        required
                        value={this.state.foto}
                        onChange={this.onChangeFoto}
                        name="foto"
                      />
                    </div>
                   <p></p>
                    <button onClick={this.saveAluno} className="btn btn-blue">
                      Criar
                    </button>
                  </div>
                )}
            </div>
        )
    } 
}