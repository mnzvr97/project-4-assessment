import React, { Component } from "react";
import "./App.css";
import CircleSelector from "./components/CircleSelector/CircleSelector";
import Circles from "./components/Circles/Circles";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0
    };
  }

  componentDidMount() {
    this.setState({
      selected: 1
    });
  }

  changeSelected = (e) => {
    this.setState({
      selected: e.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector
            selected={this.state.selected}
            changeSelected={this.changeSelected}
          />
          <Circles selected={this.state.selected} />
        </main>
      </div>
    );
  }
}

export default App;
