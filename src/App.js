import React, {Component} from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.rootNode = React.createRef();
    this.state = {
      formulas: {
        "default" : (value) => value,
        "Celsius-Fahrenheit" : (value) => value * 1.8 + 32,
        "Fahrenheit-Celsius" : (value) => value / 1.8 - 32,
        "Kelvin-Celsius" : (value) => value - 273.15,
        "Celsius-Kelvin" : (value) => value + 273.15,
        "Kelvin-Fahrenheit" : (value) => (value-273.15) * 1.8 + 32,
        "Fahrenheit-Kelvin" : (value) => (value-32) / 1.8 + 273.15,
        "inch-cm" : (value) => value * 2.54,
        "cm-inch" : (value) => value / 2.54,
        "kg-pound" : (value) => value * 2.20462,
        "pound-kg" : (value) => value / 2.20462,
        "calorie-joule" : (value) => value * 4.184,
        "joule-calorie" : (value) => value / 4.184,
        "psi-pascal" : (value) => value * 6894.76,
        "pascal-psi" : (value) => value / 6894.76
      },
    };
  }

  handleInputChange= (event)=>{
    // Retrieve the input and select elements
    var cellColumn = event.target.parentElement;
    var cellRow = cellColumn.parentElement;
    
    var columnIndex = -1;
    cellRow.childNodes.forEach((currentValue, currentIndex, listObj) => {
      if (currentValue === cellColumn)
        columnIndex = currentIndex;
    });


    var inputElementA = null, inputElementB = null, selectNodeA = null, selectNodeB = null;
    switch(columnIndex)
    {
      case 0:
      case 3:
        inputElementA = cellRow.childNodes[0].childNodes[0];
        inputElementB = cellRow.childNodes[2].childNodes[0];
        selectNodeA = cellRow.childNodes[1].childNodes[0];
        selectNodeB = cellRow.childNodes[3].childNodes[0];
        break;
      case 1:
      case 2:
        inputElementA = cellRow.childNodes[2].childNodes[0];
        inputElementB = cellRow.childNodes[0].childNodes[0];
        selectNodeA = cellRow.childNodes[3].childNodes[0];
        selectNodeB = cellRow.childNodes[1].childNodes[0];
        break;
      default:
        break;
    }

    var formulaIndex = "default";

    if (selectNodeA.value !== selectNodeB.value) {
      formulaIndex = `${selectNodeA.value}-${selectNodeB.value}`;
    }

    var sourceValue = parseFloat(inputElementA.value);
    inputElementB.value = (this.state.formulas[formulaIndex](sourceValue)).toString();
  }

  componentDidMount() {
    // Populate the input elements
    let seedValue = 0;
    for (var index = 1; index <= this.rootNode.current.childNodes.length - 1; ++index) {
      let firstInputElement = this.rootNode.current.childNodes[index].childNodes[0].childNodes[0];
      let firstSelectElement = this.rootNode.current.childNodes[index].childNodes[1].childNodes[0];
      let secondInputElement = this.rootNode.current.childNodes[index].childNodes[2].childNodes[0];
      let secondSelectElement = this.rootNode.current.childNodes[index].childNodes[3].childNodes[0];
      
      let formulaIndex = `${firstSelectElement.value}-${secondSelectElement.value}`;
      firstInputElement.setAttribute("value", seedValue.toString());
      secondInputElement.setAttribute("value", (this.state.formulas[formulaIndex](seedValue)).toString());
    }
  }

  render = ()=>
    <div className="container-fluid p-4" ref={this.rootNode}>
      <div className="row bg-info text-white p-2">
        <div className="col-12 font-weight-bold text-center">Units converter</div>
      </div>
      <div className="row bg-light p-2 border">
        <div className="col"><input type="Number" onChange={this.handleInputChange} /></div>
        <div className="col">
          <select className="browser-default custom-select" onChange={this.handleInputChange}>
            <option>Celsius</option>
            <option>Fahrenheit</option>
            <option>Kelvin</option>
          </select>
        </div>
        <div className="col"><input type="Number" onChange={this.handleInputChange} /></div>
        <div className="col">
          <select className="browser-default custom-select" onChange={this.handleInputChange}>
            <option>Kelvin</option>
            <option>Fahrenheit</option>
            <option>Celsius</option>
          </select>
        </div>
      </div>
      <div className="row bg-light p-2 border">
        <div className="col"><input type="Number" onChange={this.handleInputChange} /></div>
        <div className="col">
          <select className="browser-default custom-select" onChange={this.handleInputChange}>
            <option>inch</option>
            <option>cm</option>
          </select>
        </div>
        <div className="col"><input type="Number" onChange={this.handleInputChange} /></div>
        <div className="col">
          <select className="browser-default custom-select" onChange={this.handleInputChange}>
            <option>cm</option>
            <option>inch</option>
          </select>
        </div>
      </div>
      <div className="row bg-light p-2 border">
        <div className="col"><input type="Number" onChange={this.handleInputChange} /></div>
        <div className="col">
          <select className="browser-default custom-select" onChange={this.handleInputChange}>
            <option>kg</option>
            <option>pound</option>
          </select>
        </div>
        <div className="col"><input type="Number" onChange={this.handleInputChange} /></div>
        <div className="col">
          <select className="browser-default custom-select" onChange={this.handleInputChange}>
            <option>pound</option>
            <option>kg</option>
          </select>
        </div>
      </div>
      <div className="row bg-light p-2 border">
        <div className="col"><input type="Number" onChange={this.handleInputChange} /></div>
        <div className="col">
          <select className="browser-default custom-select" onChange={this.handleInputChange}>
            <option>calorie</option>
            <option>joule</option>
          </select>
        </div>
        <div className="col"><input type="Number" onChange={this.handleInputChange} /></div>
        <div className="col">
          <select className="browser-default custom-select" onChange={this.handleInputChange}>
            <option>joule</option>
            <option>calorie</option>
          </select>
        </div>
      </div>
      <div className="row bg-light p-2 border">
        <div className="col"><input type="Number" onChange={this.handleInputChange} /></div>
        <div className="col">
          <select className="browser-default custom-select" onChange={this.handleInputChange}>
            <option>psi</option>
            <option>pascal</option>
          </select>
        </div>
        <div className="col"><input type="Number" onChange={this.handleInputChange} /></div>
        <div className="col">
          <select className="browser-default custom-select" onChange={this.handleInputChange}>
            <option>pascal</option>
            <option>psi</option>
          </select>
        </div>
      </div>                       
    </div>
}