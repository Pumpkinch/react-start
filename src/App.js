import Notifications from './components/Notifications';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Notifications text="Изменение пароля" button="продолжить" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React2345
        </a>
        <Notifications text="Изменение пароля" button="продолжить" color="green" sizeBut="normal-size"/>
        
        <Notifications text="Изменение пароля" button="продолжить" color="red" sizeBut="big-size"/>
        
      </header>
    </div>
  );
}

export default App;
