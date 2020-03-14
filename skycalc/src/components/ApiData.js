import React, {Component} from 'react';

class ApiData extends Component {
    state = {
        username: null
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let username = this.state.username
        let linkHypixel = ("https://api.hypixel.net/player?key=2ef7a998-201e-4de6-9957-f262cdb38c66&name=" + username)
        let profileId
        fetch(linkHypixel)
        .then((resp) => resp.json())
        .then((myJson) => {
            console.log(myJson)
            if(myJson.player!=null) {
                profileId = (JSON.stringify(Object.keys(myJson.player.stats.SkyBlock.profiles))).slice(2,-2)
                let linkSkyblock = "https://api.hypixel.net/skyblock/profile?profile=" + profileId + "&key=2ef7a998-201e-4de6-9957-f262cdb38c66"
                fetch(linkSkyblock)
                .then((resp) => resp.json())
                .then((myJson) => {
                    console.log(myJson)
                    if(myJson.profile != null) {
                        this.props.setApiData(myJson, profileId, username, true, null)
                    }
                    else {
                        this.props.setApiData(myJson, profileId, username, false, "Player not found")
                    }
                });
            }
            else {
                console.log(myJson.cause)
                this.props.setApiData(myJson, profileId, username, false, myJson.cause)
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
            <form className="username-form" onSubmit={this.handleSubmit}>
                <label>Input player username:</label>
                <input className="input-form" type="text" onChange={this.handleChange}></input>
                <button className="submit">Find</button>
            </form>
        )
    }
}

export default ApiData;