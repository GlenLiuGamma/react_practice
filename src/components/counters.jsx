import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    const { onReset, onDelete, onIncrement, onDecrement } = this.props;
    console.log("Counters - Rendered");
    return (
      <React.Fragment>
        <button className="btn-primary btn-sm m-2" onClick={onReset}>
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          ></Counter>
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
