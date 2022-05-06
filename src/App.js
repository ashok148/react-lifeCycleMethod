// 1.ComponentDidMount :- It call when our DOM or html component is ready, and there is on effect of state and props
// 2. ComponentDidMount; - It runs after the states and props get updated
// 3. componentWillUnmount: - It call when the component completely remove from the dom
import React from 'react'
import Student from './Student';
class App extends React.Component {

  constructor() {
    super();
    console.warn("constructor");
    this.state = {
      name: "Ashok Kumar",
      count:0,
      show: true
    }

  }
  // 1.componentDidMount
  componentDidMount() {
    console.warn("componentDidMount");
  }

  // 2. comoponentDidUpdate
  componentDidUpdate(preProps, preState){
    console.warn("componentDidUpdate", preState.count, this.state.count);
    if(this.state.count < 10){
      this.setState({count : this.state.count+1})
    }
  }
  render() {
    console.warn("render");
    return (
      <div className='App'>
        <h1>Component Did Mount : {this.state.name}</h1>
        <button onClick={() => { this.setState({ name: "Ongraph" }) }}>Click here!</button>
        
        <hr></hr>
        <h1>Component Did Update : {this.state.count} </h1>
        <button onClick={() => {this.setState({count:this.state.count+1})}}>Update counter</button>
       
        <hr></hr>
        <h1>Component Will Unmount </h1>
        {this.state.show ? <Student/>:<h1>Child component remove</h1>}
        <button onClick={() => {this.setState({show: !this.state.show})}}>Toggle Child Component</button>
      </div>
    );
  };
};

export default App;