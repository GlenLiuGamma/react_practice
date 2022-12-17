import NavBar from './components/navbar';
import './App.css';
import React, {Component} from 'react';
import Counters from './components/counters';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 2 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  constructor () {
    super();
    console.log("App - Constructor");
  }
  componentDidMount() {
    console.log("App - Mounted");
  }

  handleIncrement = (counter) => {
    //clone一個新的array
    const counters = [...this.state.counters];
    //因為實際上state裡面的counters存的這四筆都不是值，而是存這些值的object的reference
    //因此clone也只會clone到reference
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }; //新增一個新的位置給這個reference
    counters[index].value++; //值加一
    this.setState({ counters });
  };
  
  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    //因為實際上state裡面的counters存的這四筆都不是值，而是存這些值的object的reference
    //因此clone也只會clone到reference
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }; //新增一個新的位置給這個reference
    counters[index].value--; //值減一
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
  
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
render() {
  console.log("App - Rendered");
  return (
    <React.Fragment>
    <NavBar totalCounters = {this.state.counters.filter(c=>c.value>0).length}/>
    <i className="bi bi-heart-fill"></i>
    <main className="container">
      <Counters counters = {this.state.counters} 
      onReset = {this.handleReset} 
      onIncrement = {this.handleIncrement}
      onDecrement={this.handleDecrement} 
      onDelete = {this.handleDelete}/>
    </main>
    </React.Fragment>
  );
}
  
}

export default App;
