import React, {Component} from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      celsiusVal : 0,
      fahrenheitVal : 32
    };
  }

  handleInputChange= (event)=>{
    var elementId = event.target.id;
    var floatVal = parseFloat(event.target.value);

    if (elementId === "celsiusInput") {
      this.setState({celsiusVal: floatVal, fahrenheitVal: floatVal * 1.8 + 32 });
      console.log(this.state.fahrenheitVal.toString());
    } else if (elementId === "fahrenheitInput") {
      this.setState({ celsiusVal: (floatVal - 32)/1.8, fahrenheitVal:floatVal});
    }
  }

  render = ()=>
    <div className="container-fluid p-4">
      <div className="row bg-info text-white p-2">
        <div className="col-12 font-weight-bold text-center">Units converter</div>
      </div>
      <div className="row bg-light p-2 border">
        <div className="col"><input type="Number" id="celsiusInput" onChange={this.handleInputChange} value={this.state.celsiusVal.toString()} /></div>
        <div className="col">Celsius</div>
        <div className="col"><input type="Number" id="fahrenheitInput" onChange={this.handleInputChange} value={this.state.fahrenheitVal.toString()}/></div>
        <div className="col">Fahrenheit</div>
      </div>
      <div className="row bg-light p-2 border">
        <div className="col"><input type="Number" /></div>
        <div className="col">
          <select class="browser-default custom-select">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="col"><input type="Number" /></div>
        <div className="col">
          <select class="browser-default custom-select">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>        
      </div>
    </div>
}

/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
