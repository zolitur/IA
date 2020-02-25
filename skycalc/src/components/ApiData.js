import React, {Component} from 'react';

class ApiData extends Component {
    state = {
        username: null
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let username = this.state.username
        let linkHypixel = ("https://api.hypixel.net/player?key=b72aa44e-fdae-4668-8dbc-781ccf8c991c&name=" + username)
        let profileId
        fetch(linkHypixel)
        .then((resp) => resp.json())
        .then((myJson) => {
            //console.log(myJson)
            if(myJson.player!=null) {
                profileId = (JSON.stringify(Object.keys(myJson.player.stats.SkyBlock.profiles))).slice(2,-2)
                let linkSkyblock = "https://api.hypixel.net/skyblock/profile?profile=" + profileId + "&key=b72aa44e-fdae-4668-8dbc-781ccf8c991c"
                fetch(linkSkyblock)
                .then((resp) => resp.json())
                .then((myJson) => {
                    console.log(myJson)
                    this.props.setApiData(myJson, profileId)
                });
            }
            else {
                console.log("This player does not exist, or the key is invalid")
                return "This player does not exist"
            }
        });
        
    }
    handleChange = (e) => {
        this.setState({
            username: e.target.value
        });
    }
    render (){
        return (
        <form onSubmit={this.handleSubmit}>
            <label>Username:</label>
            <input type="text" onChange={this.handleChange}></input>
            <button>Submit</button>
        </form>
        )
    }
}

export default ApiData;