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
    apiEnabled: null,
    apiData: null,
    profileId: null
  }

  setApiData = (data, profileId, username) => {
    this.setState({
      apiData: data,
      profileId: profileId,
      username: username
    })
    if(this.state.apiData!==null) {
      this.setState({
        success: true
      })
    }
  }

  handleReloadButton = () => {
    window.location.reload();
  }

  render () {
    if(this.state.success==null) {
      return (
        <div className="Start">
          <h1 className="Title">Input a username to begin</h1>
          <ApiData setApiData = {this.setApiData}/>
        </div>
      )
    }  
    else if (this.state.success) {
      return (
        <div className="App">
          <h1>Skyblock stats of {this.state.username}:</h1>
          <button onClick={this.handleReloadButton}>Input different username</button>
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
        <div>
          <h1>Something went wrong, this is an invalid username or there may be a problem with the Hypixel API service!</h1>
          <button onClick={this.handleReloadButton}>Input different username</button>
        </div>
      )
    }
    
  }
}

export default App;
