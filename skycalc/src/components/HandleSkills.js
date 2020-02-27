import React, {Component} from 'react';
import {convertExperience} from "../helperFiles/convertExperience";

class HandleSkills extends Component {
    state = {
        loaded: false,
        blocked: false,
        open: false,
        data: null,
        dataUnsorted: null,
        search: null,
        sortSkills: "none"
    }
    
    createSkillsArray = () => {
        if(this.state.loaded === false) {
            if(this.props.input != null && !this.state.blocked) {
                if(this.props.input.profile.members[this.props.profileId].experience_combat!=null) {
                    let statListKeys = Object.keys(this.props.input.profile.members[this.props.profileId])
                    let statListValues = Object.values(this.props.input.profile.members[this.props.profileId])
                    let final = []

                    for(let i = 0;i<statListKeys.length;i++) {
                        if(statListKeys[i].slice(0,10)==="experience") {
                            let index = statListKeys[i].lastIndexOf("_")
                            let beautifiedName = statListKeys[i].slice(index+1).charAt(0).toUpperCase() + statListKeys[i].slice(index+2)
                            let convertedExp = convertExperience(statListValues[i],beautifiedName)
                            final.push({skill:beautifiedName, level:convertedExp.level, currentExp:convertedExp.currentExp, maxExp: convertedExp.maxExp})
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
                        blocked: true
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
        if(this.state.sortSkills==="none" || this.state.sortSkills==="Descending") {
            let newList = this.state.data.sort(function(a,b){return a.level-b.level})
            this.setState({
                sortSkills:"Ascending",
                data: newList
            })
            
        }
        else if(this.state.sortSkills==="Ascending") {
            let newList = this.state.data.sort(function(a,b){return b.level-a.level})
            this.setState({
                sortSkills:"Descending",
                data: newList
            })
        }
    }

    render (){
        let objectSkillsList = this.createSkillsArray()
            if(!this.state.blocked) {
                let htmlSkillsList
                if(this.state.loaded ===true && this.state.open===true) {
                    htmlSkillsList = objectSkillsList.map(item => {
                        if(this.state.search===null) {
                            return (
                                <ul key={Math.random()}>{item.skill} level {item.level} ({item.currentExp} out of {item.maxExp} experience for next level</ul>
                            )
                        }
                        else if (this.state.search.toLowerCase()===item.skill.slice(0,this.state.search.length).toLowerCase()) {
                            return (
                                <ul key={Math.random()}>{item.skill} level {item.level} ({item.currentExp} out of {item.maxExp} experience for next level</ul>
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
                    sortButton = (<button type="button" onClick={this.handleButton}>Click to change sort type (Currently: {this.state.sortSkills})</button>)
                }
                


                return (
                    <div>
                        <h3 onClick={this.openAndClose}>Skill Levels</h3>
                        <div className="skill-search">
                            {searchBar}
                            {sortButton}
                        </div>
                        <div className="skill-list">
                            {htmlSkillsList}
                        </div> 
                            
                    </div>
                )
            }
            else {
                return <p>This player has disabled their skills API access!</p>
            }
    }

}

export default HandleSkills;