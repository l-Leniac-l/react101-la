import React from "react";

class CalculadoraClasse extends React.Component {
  constructor() {
    super();

    this.state = {
      result: 0,
      value1: 0,
      value2: 0,
      error: "",
    };
  }

  multiply = () => {
    this.setState({
      result: parseInt(this.state.value1) * parseInt(this.state.value2),
    });
  };

  sum = () => {
    this.setState({
      result: parseInt(this.state.value1) + parseInt(this.state.value2),
    });
  };

  sub = () => {
    this.setState({
      result: parseInt(this.state.value1) - parseInt(this.state.value2),
    });
  };

  divide = () => {
    this.setState({
      result: parseInt(this.state.value1) / parseInt(this.state.value2),
    });
  };

  setValue1 = (value) => {
    if (this.checkNumber(value.target.value))
      this.setState({
        value1: value.target.value,
      });
  };

  setValue2 = (value) => {
    if (this.checkNumber(value.target.value))
      this.setState({
        value2: value.target.value,
      });
  };

  checkNumber = (value) => {
    const regex = /^[0-9\b]+$/;
    if (this.state.error.length > 0) return false;
    if (value === "" || regex.test(value)) {
      this.setState({ error: "" });
      return true;
    }
    this.setState({ error: "Valores inválidos no formulário" });
    return false;
  };

  render() {
    return (
      <div>
        <label for="value1">Valor 1</label>
        <input
          type="text"
          name="value1"
          pattern="[0-9]*"
          onChange={(number) => this.setValue1(number)}
          value={this.state.value1}
        />
        <br />
        <label for="value1">Valor 2</label>
        <input
          type="text"
          name="value1"
          pattern="[0-9]*"
          onChange={(number) => this.setValue2(number)}
          value={this.state.value2}
        />

        <button onClick={this.sum}>+</button>
        <button onClick={this.sub}>-</button>
        <button onClick={this.multiply}>*</button>
        <button onClick={this.divide}>/</button>
        <br />
        <br />

        <h1>{this.state.result}</h1>
        <h4 color="red">{this.state.error}</h4>
      </div>
    );
  }
}

export default CalculadoraClasse;
