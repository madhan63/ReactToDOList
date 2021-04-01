import React,{Component} from 'react'
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
class App extends Component{
  render(){
  return (
    <div><Greet/>
    <Message/></div>
  );
  }
}

export default App;
