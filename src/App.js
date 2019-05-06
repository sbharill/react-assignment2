import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ValidateComponent from './ValidateComponent/ValidateComponent'
import CharComponent from './CharComponent/CharComponent'

class App extends Component {

  state = {
    len: "0",
    val: ""
  }

  inputChangeHandler = (event) => {
    this.setState({len: event.target.value.length})
    this.setState({val: event.target.value})
  }

  deleteCharHandler = (index) => {
    let valArr = [...this.state.val];
    valArr.splice(index, 1);
    valArr = valArr.join("");
    this.setState({val: valArr});
    this.setState({len: valArr.length});    
  }

  render(){
    let charcomponent = null;
    let valArr = [...this.state.val];
    charcomponent = (
      <div>
        {
          valArr.map((v, index) => {
            return(
            <CharComponent
            char={v} 
            click={()=>{this.deleteCharHandler(index)}}/>
             )
            })
        }
        </div>
    )

    return (
      <div className="App">
        <h1>Assignment 2</h1>
        <input type="Text" value={this.state.val}
        onChange={(event)=> this.inputChangeHandler(event)} 
        />
        <ValidateComponent leng={this.state.len}/>
        {charcomponent}
      </div>
    );
  }
  }

export default App;
