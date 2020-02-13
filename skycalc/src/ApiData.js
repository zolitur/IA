import React, {Component} from 'react';

class ApiData extends Component {
    state = {
        active: false,
        success: null,
        apiEnabled: null,
        skills: null,
        collections: null,
        inventory: null,
        banking: null,
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let username = this.state.username
        let linkHypixel = ("https://api.hypixel.net/player?key=287639ba-e4c1-4983-a0e2-5be5efff5af2&name=" + username)
        let profileId
        fetch(linkHypixel)
        .then((resp) => resp.json())
        .then((myJson) => {
            profileId = (JSON.stringify(Object.keys(myJson.player.stats.SkyBlock.profiles))).slice(2,-2)
            let linkSkyblock = "https://api.hypixel.net/skyblock/profile?profile=" + profileId + "&key=287639ba-e4c1-4983-a0e2-5be5efff5af2"
            fetch(linkSkyblock)
            .then((resp) => resp.json())
            .then((myJson) => {
                console.log(myJson)
                this.setState({
                    active: true,
                    success: myJson.success,
                    skills: null,
                    collection: myJson.profile.members[profileId].collection,
                    inventory: null,
                    banking: null,
                })
                
                console.log(this.state.collection)

            });
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