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

  setApiData = (data, profileId) => {
    this.setState({
      apiData: data,
      profileId: profileId
    })
    //console.log(this.state.apiData)
  }

  render () {
      return (
        <div className="App">
          <h1>Input a username to begin</h1>
          <ApiData setApiData = {this.setApiData}/>
          <HandleSkills input = {this.state.apiData} profileId = {this.state.profileId}/>
          <HandleCollection input = {this.state.apiData} profileId = {this.state.profileId}/>
          <HandleMinions input = {this.state.apiData} profileId = {this.state.profileId}/>
          <HandleSlayerBosses input = {this.state.apiData} profileId = {this.state.profileId}/>
          <HandleInventories input = {this.state.apiData} profileId = {this.state.profileId} type={"inv_contents"}/>
          <HandleInventories input = {this.state.apiData} profileId = {this.state.profileId} type={"ender_chest_contents"}/>
          <HandleInventories input = {this.state.apiData} profileId = {this.state.profileId} type={"talisman_bag"}/>
          <HandleInventories input = {this.state.apiData} profileId = {this.state.profileId} type={"candy_inventory_contents"}/>
        </div>
      );
    }
}

export default App;
