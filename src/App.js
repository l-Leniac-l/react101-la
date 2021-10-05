import React from "react";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      contador: 0,
    };
  }

  increment = () => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  decrement = () => {
    this.setState({
      contador: this.state.contador - 1,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.decrement}>decrement</button>
        <div>Valor atual: {this.state.contador}</div>
        <button onClick={this.increment}>increment</button>
      </div>
    );
  }
}

export default App;
