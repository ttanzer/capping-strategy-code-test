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
      capPercent: 0,
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
        <PeriodSelector minYear={(new Date().getFullYear()) - 21}
                        maxYear={(new Date().getFullYear()) - 1}
                        onSelectorChange={this.updatePeriod}  />
        {(this.state.capPercent > 0 && this.state.startYear && this.state.endYear && this.state.startYear !== this.state.endYear) ?
        <div>
          <BalanceGraph capPercent={this.state.capPercent} 
                        startYear={this.state.startYear} 
                        endYear={this.state.endYear}
                        data={this.props.data} />
          <Legend />
        </div>
        :
        <div className="invalid-entry">
          <h3>Please select a cap percentage, start and end year</h3>
        </div>
        }
      </div>
    );
  }
}

export default App;
