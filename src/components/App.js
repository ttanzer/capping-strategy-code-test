import React, { Component } from 'react';

import { CapSelector } from './CapSelector';
import { PeriodSelector } from './PeriodSelector';
import { BalanceGraph } from './BalanceGraph';
import { Legend } from './Legend';

import '../styles/App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      capPercent: null,
      startYear: null,
      endYear: null
    };

    this.updateCapPercent = this.updateCapPercent.bind(this);
    this.updatePeriod = this.updatePeriod.bind(this);
  }

  updateCapPercent(percentage) {
    this.setState({
      capPercent: percentage
    });
  }

  updatePeriod(year) {
    this.setState({
      startYear: year[0],
      endYear: year[1]
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>RetireUp Code Test</h2>
        </div>
        <CapSelector minPercent={0}
                     maxPercent={25}
                     onSelectorChange={this.updateCapPercent} />
        <PeriodSelector minYear={(new Date().getFullYear()) - 20}
                        maxYear={(new Date().getFullYear())}
                        onSelectorChange={this.updatePeriod}  />
        <BalanceGraph capPercent={this.state.capPercent} 
                      startYear={this.state.startYear} 
                      endYear={this.state.endYear} />
        <Legend />
      </div>
    );
  }
}

export default App;