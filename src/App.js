import React from 'react';
import logo from './logo.svg';
import './App.css';
import CatContainer from './CatContainer'

class App extends React.Component{
  state = {
    cats: [
    {
    name: "Jezebel",
    place: "couch"
    },
    {
    name: "Luci",
    place: "floor"
    },
    {
    name: "Kenzi",
    place: "bed"

    }
    ]
  }
  
  render (){
    return (
      <div className="App">
      <h1>Cat Stuff</h1>
      <CatContainer cats={this.state.cats}/>
      </div>
    );
  }
}

export default App;
