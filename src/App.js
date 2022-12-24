import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

const App=()=> {

  const [str, setStr] = useState({nom: "Hmidi", prenom: "zakaria"})

  console.log(str)

  return (
    <div className="App">
    <p>{str.nom}</p>
    <p>{str.prenom}</p>
    <button onClick={()=> setStr({...str, prenom : "zh"})}>change</button>
    </div>
  );
}

export default App;
