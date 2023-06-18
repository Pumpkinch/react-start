import Notification from './components/Notification';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Notification text="Salomon" />  
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React2345
        </a>
        <Notification text="TEXT" logo="https://ifab.se/wp-content/uploads/2019/12/Your_Logo-OUR-PRODUCTS.png" />  
      </header>
    </div>
  );
}

export default App;
