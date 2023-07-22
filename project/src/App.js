import Logo from "./components/logo";
import './App.css';
import sobrenos from "./img/sobrenos.svg";
import sacola from "./img/sacola.svg";

const textoOpcoes = ['HOME','SOBRE NÓS', 'PRODUTO'];
const icones = [sobrenos, sacola];

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo></Logo>
        <ul className="opcoes">
          {textoOpcoes.map((texto => (
            <li className="opcao"><p><strong>{texto}</strong></p></li>
          )))}
        </ul>

        <ul className="icones">
            {icones.map((icone => (
              <li className="icone" alt="icones"><img src={icone}></img></li>
            )))}
          </ul>
      </header>
    </div>
  );
}

export default App;
