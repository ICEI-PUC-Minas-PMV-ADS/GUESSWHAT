import logo from './logo.svg';
import './App.css';
import indicados from './indicados';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Veja os indicados em <code>src/indicados.js</code> e dê seu palpite.
          
        </p>
        <a
          className="App-link"
          href= './indicados.js'
          target={<indicados/>}
        
          rel="noopener noreferrer"
        >
          E os indicados são:
        </a>
      </header>
    </div>
  );
}

export default App;
