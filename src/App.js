import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita <code>src/App.js</code> y guarda para recargar
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Iniciando reactJS
        </a>
      </header>
    </div>
  );
}


export default App;
