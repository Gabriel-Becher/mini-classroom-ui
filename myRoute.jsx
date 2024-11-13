import { useParams } from 'react-router-dom';

export default function withRouter(Componente){
    return(props)=>{
       const p  = {params: useParams()};
       return <Componente {...props}  match = {p}/>
   }
 }