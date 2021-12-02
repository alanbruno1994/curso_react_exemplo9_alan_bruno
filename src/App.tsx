import { Component } from 'react';
import './App.css';
import Form from './components/Form';

class App extends Component{
  state={//Aqui incializei state sem ser no construtor
    visable:true
  }
  


  render(){
  console.log(this.state.visable)
  return (
    <div className="App">
      <Form visable={this.state.visable} />
      <button onClick={_=>this.setState({visable:!this.state.visable})}>Visable or No</button>
    </div>
  );
  }
}

export default App;
