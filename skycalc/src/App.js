import React, {Component} from 'react';
import Statlist from './Statlist';
import ApiData from './ApiData';
class App extends Component {
  state = {
    username: null
  }
  render () {
    return (
      <div className="App">
        <h1>Input a username to begin</h1>
        <ApiData />
        <Statlist name="Skills" data/>
        <Statlist name="Collections" data/>
        <Statlist name="Unlocked Minions" data/>
        <Statlist name="Quests" data/>
        <Statlist name="Kills" data/>
        <Statlist name="Deaths" data/>
      </div>
    );
  }
}

export default App;
