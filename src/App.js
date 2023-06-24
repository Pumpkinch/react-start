import WidgetApps from './components/WidgetApps';


import logo from './logo.svg';
import './App.css';

const data2 = [
  {
    text: "text",
    href: "https://learn.js",
  },
  {
    text: "DIVVV",
    href: "//asd.ru",
    logo: logo,
  },
  {
    text: "not link",
  }
]

const data = {
  android: {
    text: "Для андроид",
    logo: logo,
  },
  windows: {
    // ...
  },
}

const Comp = ({ data, index }) => {
  let buttons = [];
  if (index === 0) {
    buttons = [
      data.android,
      data.windows,
    ]
  }

  return (
    buttons.map((button) => {
      return <div>{button.text}</div>
    })
  )
}

function App({ isEnabled }) {
  return (
    <div className="App">
      <header className="App-header">asd
        <img src={logo} className="App-logo" alt="logo" />


        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React2345
        </a>
        <button onClick={() => console.log("asd")} />
        {/* Ты нажал на кнопку *текст кнопки* */}
        {isEnabled && <div>isEnabled</div>}
        {!isEnabled && <div>Not enabled</div>}
        {isEnabled ? 
          <div>DIV</div>:
          <div>Drugoi div</div>
        }
        {data.map((dataElement) => {
          if (dataElement.href) {
            return <a href={dataElement.href}>{dataElement.text}</a>
          }
          return <div>{dataElement.text}</div>
        })}
        <WidgetApps />

      </header>
    </div>
  );
}

export default App;
