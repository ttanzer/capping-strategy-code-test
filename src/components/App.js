import '../styles/App.css';

import React, {Component} from 'react';

import {CapSelector} from './CapSelector';
import {PeriodSelector} from './PeriodSelector';
import {BalanceGraph} from './BalanceGraph';
import {Legend} from './Legend';
import {SegmentSummary} from './SegmentSummary';

class App extends Component {

  constructor(props) {
    super(props);

    // Set the initial state to empty
    this.state = {
      capPercent: 0,
      startYear: null,
      endYear: null
    };

    // Bind this for the update callbacks
    this.updateCapPercent = this.updateCapPercent.bind(this);
    this.updatePeriod = this.updatePeriod.bind(this);
  }

  // Updates the cap percent in state
  updateCapPercent(percentage) {
    this.setState({capPercent: percentage});
  }

  // Updates the time period for the calculations in state
  updatePeriod(year) {
    this.setState({startYear: year[0], endYear: year[1]});
  }

  render() {

    // Pull the needed values out of state
    var {startYear, endYear, capPercent} = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <h2>RetireUp Code Test</h2>
        </div>
        <CapSelector
          minPercent={0}
          maxPercent={25}
          onSelectorChange={this.updateCapPercent}/>
        <PeriodSelector
          minYear={(new Date().getFullYear()) - 21}
          maxYear={(new Date().getFullYear()) - 1}
          onSelectorChange={this.updatePeriod}/> {(capPercent > 0 && startYear && endYear && startYear !== endYear)
          ? <div>
              <BalanceGraph
                capPercent={capPercent}
                startYear={startYear}
                endYear={endYear}
                data={this.props.data}/>
              <Legend/>
            </div>
          : <div className="invalid-entry">
              <h3>Please select a cap percentage, start and end year</h3>
            </div>
}
      </div>
    );
  }
}

export default App;
