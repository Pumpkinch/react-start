import WidgetApps from './components/WidgetApps';
import Popup from './components/Popup/Popup';

import logo from './logo.svg';
import './App.css';



function App({ isEnabled }) {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React2345
        </a>   
        <Popup/> 

        <WidgetApps />

      </header>
    </div>
    </>
  );
}

export default App;
