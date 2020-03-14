import React, {Component} from 'react';
import ApiData from "./components/ApiData";
import HandleCollection from "./components/HandleCollection"
import HandleMinions from "./components/HandleMinions"
import HandleSkills from "./components/HandleSkills"
import HandleSlayerBosses from "./components/HandleSlayerBosses"
import HandleInventories from "./components/HandleInventories"

class App extends Component {
  state = {
    username: null,
    success: null,
    cause: null,
    apiEnabled: null,
    apiData: null,
    profileId: null
  }

  setApiData = (data, profileId, username, success, cause) => {
    this.setState({
      apiData: data,
      profileId: profileId,
      username: username,
      success: success,
      cause: cause,
    })
  }

  handleReloadButton = () => {
    window.location.reload();
  }

  render () {
    if(this.state.success==null) {
      return (
        <div className="Start">
          <h1 className="Title">Welcome to skycalc</h1>
          <ApiData setApiData = {this.setApiData}/>
        </div>
      )
    }  
    else if (this.state.success) {
      return (
        <div className="App">
          <h1>Skyblock stats of {this.state.username}:</h1>
          <button onClick={this.handleReloadButton} className="reload">Input different username</button>
          <HandleSkills input = {this.state.apiData} profileId = {this.state.profileId}/>
          <HandleCollection input = {this.state.apiData} profileId = {this.state.profileId}/>
          <HandleMinions input = {this.state.apiData} profileId = {this.state.profileId}/>
          <HandleSlayerBosses input = {this.state.apiData} profileId = {this.state.profileId}/>
          <HandleInventories input = {this.state.apiData} profileId = {this.state.profileId} type={"inv_contents"}/>
          <HandleInventories input = {this.state.apiData} profileId = {this.state.profileId} type={"ender_chest_contents"}/>
          <HandleInventories input = {this.state.apiData} profileId = {this.state.profileId} type={"talisman_bag"}/>
          <HandleInventories input = {this.state.apiData} profileId = {this.state.profileId} type={"candy_inventory_contents"}/>
          <HandleInventories input = {this.state.apiData} profileId = {this.state.profileId} type={"inv_armor"}/>
        </div>
      )
    }
    else {
      return (
        <div className="Start">
          <h1>An error has occured, the following error message was returned by the API:</h1>
          <h2 className="error">{this.state.cause}</h2>
          <button onClick={this.handleReloadButton} className="reload">Input different username</button>
        </div>
      )
    }
    
  }
}

export default App;
