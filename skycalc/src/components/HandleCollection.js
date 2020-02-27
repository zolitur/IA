import React, {Component} from 'react';
import {translateItem} from "../helperFiles/itemTranslate";

class HandleCollection extends Component {
    state = {
        loaded: false,
        blocked: false,
        open: false,
        data: null,
        dataUnsorted: null,
        search: null,
        sortCollection: "none"
    }
    
    createCollectionArray = () => {
        if(this.state.loaded === false) {
            if(this.props.input != null && !this.state.blocked) {
                if(this.props.input.profile.members[this.props.profileId].collection!=null) {
                    let unlockedCollection = this.props.input.profile.members[this.props.profileId].unlocked_coll_tiers
                    let collectionStats = this.props.input.profile.members[this.props.profileId].collection;
                    let collection = []
                    let tier = []
                    let stats = []
                    let final = []

                    for(let i = 0;i<unlockedCollection.length;i++) {
                        let currentCollection = unlockedCollection[i].slice(0,unlockedCollection[i].lastIndexOf("_"))
                        let currentTier = unlockedCollection[i].slice(unlockedCollection[i].lastIndexOf("_")+1)
                        let index = collection.indexOf(currentCollection);
                        
                        if(index === -1) {
                            collection.push(currentCollection)
                            tier.push(currentTier)
                            stats.push(collectionStats[currentCollection])
                        }
                        else if(currentTier>tier[index]) {
                            tier[index] = currentTier
                        }
                    }


                    for(let i = 0;i<collection.length;i++) {
                        let translated = translateItem(collection[i])
                        if(translated !== undefined) {
                            let dataAsObject = {name:translated,tier:tier[i],stats:stats[i]}
                            final.push(dataAsObject)
                        }
                    }
                    if(this.state.loaded === false) {
                        this.setState({
                            loaded: true,
                            data: final,
                        })
                    }
                    return final
                }
                else {
                    this.setState({
                        blocked: true,
                    })
                }
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
        if(this.state.sortCollection==="none" || this.state.sortCollection==="Descending") {
            let newList = this.state.data.sort(function(a,b){return a.stats-b.stats})
            this.setState({
                sortCollection:"Ascending",
                data: newList
            })
            
        }
        else if(this.state.sortCollection==="Ascending") {
            let newList = this.state.data.sort(function(a,b){return b.stats-a.stats})
            this.setState({
                sortCollection:"Descending",
                data: newList
            })
        }
    }

    render (){
        let objectCollectionList = this.createCollectionArray()
        if(!this.state.blocked) {
            let htmlCollectionList
            if(this.state.loaded ===true && this.state.open===true) {
                htmlCollectionList = objectCollectionList.map(item => {
                    if(this.state.search===null) {
                        return (
                            <ul key={Math.random()}>{item.name} tier {item.tier} (With {item.stats} collected)</ul>
                        )
                    }
                    else if (this.state.search.toLowerCase()===item.name.slice(0,this.state.search.length).toLowerCase()) {
                        return (
                            <ul key={Math.random()}>{item.name} tier {item.tier} (With {item.stats} collected)</ul>
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
                sortButton = (<button type="button" onClick={this.handleButton}>Click to change sort type (Currently: {this.state.sortCollection})</button>)
            }
            return (
                <div>
                    <h3 onClick={this.openAndClose}>Collection</h3>
                    <div className="collection-search">
                        {searchBar}
                        {sortButton}
                    </div>
                    <div className="collection-list">
                        {htmlCollectionList}
                    </div> 
                        
                </div>
            )
        }
        else {
            return <p>This player has disabled their collection API access!</p>
        }
    }

}

export default HandleCollection;