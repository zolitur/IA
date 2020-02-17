import React, {Component} from 'react';
import ApiData from "./ApiData";
import HandleCollection from "./HandleCollection"

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
          <HandleCollection input = {this.state.apiData} profileId = {this.state.profileId}/>
        </div>
      );
    }
}

export default App;
