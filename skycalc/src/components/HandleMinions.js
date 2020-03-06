import React, {Component} from 'react';

class HandleMinions extends Component {
    state = {
        loaded: false,
        open: false,
        data: null,
        dataUnsorted: null,
        search: null,
        sortMinions: "none"
    }
    
    createMinionsArray = () => {
        if(this.state.loaded === false) {
            if(this.props.input != null) {
                let craftedMinions = this.props.input.profile.members[this.props.profileId].crafted_generators
                let name = []
                let tier = []
                let final = []

                for(let i = 0;i<craftedMinions.length;i++) {
                    let currentName = craftedMinions[i].slice(0,craftedMinions[i].lastIndexOf("_"))
                    let currentTier = craftedMinions[i].slice(craftedMinions[i].lastIndexOf("_")+1)
                    let index = name.indexOf(currentName);
                    
                    if(index === -1) {
                        name.push(currentName)
                        tier.push(currentTier)
                    }
                    else if(currentTier>tier[index]) {
                        tier[index] = currentTier
                    }
                }


                for(let i = 0;i<name.length;i++) {
                    let beautifiedName = (name[i].charAt(0) + name[i].substring(1).toLowerCase()).replace("_"," ")
                    let dataAsObject = {name:beautifiedName,tier:tier[i]}
                    final.push(dataAsObject)
                }

                if(this.state.loaded === false) {
                    this.setState({
                        loaded: true,
                        data: final,
                    })
                }
                return final
            }
        }
        else {
            return this.state.data
        }

    }

    openAndClose = () => {
        if(this.state.loaded===true) {
            if(this.state.open === false) {
                this.setState({
                    open: true
                })
            }
            else {
                this.setState({
                    open: false
                })
            }
        }
    }

    handleSearch = (e) => {
        this.setState({
            search: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    handleButton = () => {
        if(this.state.sortMinions==="none" || this.state.sortMinions==="Descending") {
            let newList = this.state.data.sort(function(a,b){return a.tier-b.tier})
            this.setState({
                sortMinions:"Ascending",
                data: newList
            })
            
        }
        else if(this.state.sortMinions==="Ascending") {
            let newList = this.state.data.sort(function(a,b){return b.tier-a.tier})
            this.setState({
                sortMinions:"Descending",
                data: newList
            })
        }
    }

    render (){
        let objectMinionsList = this.createMinionsArray()
        let htmlMinionsList
        if(this.state.loaded ===true && this.state.open===true) {
            htmlMinionsList = objectMinionsList.map(item => {
                if(this.state.search===null) {
                    return (
                        <ul key={Math.random()}>{item.name} tier {item.tier}</ul>
                    )
                }
                else if (this.state.search.toLowerCase()===item.name.slice(0,this.state.search.length).toLowerCase()) {
                    return (
                        <ul key={Math.random()}>{item.name} tier {item.tier}</ul>
                    )
                }
                else {
                    return null
                }
            })
        }
        let searchBar
        let sortButton
        if(this.state.open===true) {
            searchBar = (<form onSubmit={this.handleSubmit}>
            <label>Search:</label>
            <input type="text" onChange={this.handleSearch}></input>
            </form>)
            sortButton = (<button type="button" onClick={this.handleButton}>Click to change sort type (Currently: {this.state.sortMinions})</button>)
        }
        


        return (
            <div>
                <h3 className="menu" onClick={this.openAndClose}>Crafted Minions</h3>
                <div className="minion-search">
                    {searchBar}
                    {sortButton}
                </div>
                <div className="menu-opened" >
                    {htmlMinionsList}
                </div> 
                    
            </div>
        )
    }

}

export default HandleMinions;