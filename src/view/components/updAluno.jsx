// import React, { Component } from "react";
// import AlunoDataService from "../../services/alunoDataService";
// import { Link } from "react-router-dom";
// import withRouter from "../../../myRoute";

// class UpdArtigo extends Component {
//     constructor(props) {
//       super(props);
//       this.onChangeNome = this.onChangeNome.bind(this);
//       this.onChangeFoto = this.onChangeFoto.bind(this);
//       this.getAluno = this.getAluno.bind(this);
//       this.updateAluno = this.updateAluno.bind(this);
//       this.deleteAluno = this.deleteAluno.bind(this);
  
//       this.state = {
//         alunoAtual: {
//           id: null,
//           nome: "",
//           foto: null
//         },
//         msg: ""
//       };
//     }
    
//     componentDidMount() {
  
//       this.getAluno(this.props.match.params.id);
//     }
  
//     onChangeNome(e) {
//       const nome = e.target.value;
  
//       this.setState(function(prevState) {
//         return {
//           alunoAtual: {
//             ...prevState.alunoAtual,
//             nome: nome
//           }
//         };
//       });
//     }
  
//     onChangeFoto(e) {
//       const foto = e.target.value;
      
//       this.setState(prevState => ({
//         alunoAtual: {
//           ...prevState.alunoAtual,
//           foto: foto
//         }
//       }));
//     }
  
//     getArtigo(id) {
//       AlunoDataService.get(id)
//         .then(response => {
//           this.setState({
//             alunoAtual: response.data
//           });
//         })
//         .catch(e => {
//           console.log("Erro: "+e);
//         });
//     }
  
//       AlunoDataService.update(this.state.alunoAtual.id,) 
//         .then(response => {
//           this.setState(prevState => ({
//             alunoAtual: {
//               ...prevState.alunoAtual,
//             }
//           }));
//         })
//         .catch(e => {
//           console.log("Erro: " + e);
//         });
//     }
  
//     updateAluno() {
//       AlunoDataService.update(
//         this.state.alunoAtual.id,
//         this.state.alunoAtual
//       )
//         .then(response => {
//           this.setState({
//             mensagem: "Aluno editado!"
//           });
//         })
//         .catch(e => {
//           console.log("Erro: " + e);
//         });
//     }
  
//     deleteAluno() {    
//       AlunoDataService.delete(this.state.alunoAtual.id)
//         .then(response => {
//           //console.log(response.data);
//           this.props.history.push('/aluno/list')
//         })
//         .catch(e => {
//           console.log("Erro: " + e);
//         });
//     }
  
//     render() {
//       const { alunoAtual } = this.state;
  
//       return (
//         <div style={{maxWidth: "400px", margin: "auto"}}>
//           {alunoAtual ? (
//             <div>
//               <h4>Aluno</h4>
//               <form>
//                 <div className="form-group">
//                   <label htmlFor="Nome"><strong>Nome</strong></label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="nome"
//                     value={alunoAtual.nome}
//                     onChange={this.onChangeNome}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="Foto"><strong>Foto</strong></label>
//                   <input
//                     type="image/png"
//                     className="form-control"
//                     id="foto"
//                     value={alunoAtual.data.getAluno.getFoto}
//                     onChange={this.onChangeFoto}
//                   />
//                 </div>
              
  
//               {alunoAtual.publicado ? (
//                 <button
//                   className="m-2 btn btn-sm btn-primary mr-2"
//                   onClick={() => this.updatePublicado(false)}
//                 >
//                   Editar
//                 </button>
//               ) : (
//                 <button
//                   className="m-2 btn btn-sm btn-primary mr-2"
//                   onClick={() => this.updatePublicado(true)}
//                 >
//                   Editar
//                 </button>
//               )}
  
//               <button
//                 className="m-2 btn btn-sm btn-danger mr-2"
//                 onClick={this.deleteArtigo}
//               >
//                 Deletar
//               </button>
  
//               <button
//                 type="submit"
//                 className="m-2 btn btn-sm btn-success"
//                 onClick={this.updateArtigo}
//               >
//                 Atualizar
//               </button>
//               <p>{this.state.msg}</p>
//             </div>
//           ) : (
//             <div>
//               <br />
//               <p><i>Informe o nome do aluno</i></p>
//             </div>
//           )}
//         </div>
//       );
//     }
//   }
//   export default withRouter(UpdAluno);


import React, { Component } from "react";
import AlunoDataService from "../../services/alunoDataService";

export default class AddAluno extends Component {

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