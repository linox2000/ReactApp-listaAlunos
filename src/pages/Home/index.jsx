import "./styles.css";

import {Card} from '../../components/Card'

export function Home() {

  let studantName ='';
  function handleNameChange(name){
    studantName = name
    console.log(studantName)
  }
  return (
    <div className="container">
      <h1>Nome: {studantName}</h1>
      <input
       type="text"
       placeholder="Digite o nome.."
       onChange={e=>handleNameChange(e.target.value)}
        />
      <button type="submit">Adicionar</button>
      <Card name="manuelLino" time="10:55:23"/>
      <Card name="LinoLino" time="20:15:53"/>
      
    </div>
  );
}
