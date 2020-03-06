import React, {Component} from 'react';

class HandleSlayerBosses extends Component {
    state = {
        loaded: false,
        open: false,
        data: null,
    }
    
    createBossesArray = () => {
        if(this.state.loaded === false) {
            if(this.props.input != null) {
                //this.props.input.profile.members[this.props.profileId] experience
                let statList = this.props.input.profile.members[this.props.profileId].slayer_bosses
                let keys = Object.keys(statList);
                let values = Object.values(statList);
                let final = []
                
                for(let i=0;i<keys.length;i++) {
                    let name = keys[i].charAt(0).toUpperCase() + keys[i].slice(1)
                    let level = Object.keys(values[i].claimed_levels).length
                    let tier1 = values[i].boss_kills_tier_0
                    let tier2 = values[i].boss_kills_tier_1
                    let tier3 = values[i].boss_kills_tier_2
                    let tier4 = values[i].boss_kills_tier_3

                    if(tier1===undefined) {tier1=0}
                    if(tier2===undefined) {tier2=0}
                    if(tier3===undefined) {tier3=0}
                    if(tier4===undefined) {tier4=0}
                    let totalExp = values[i].xp
                    final.push({name:name,level:level,tier1:tier1,tier2:tier2,tier3:tier3,tier4:tier4,totalExp:totalExp})
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

    render (){
        let objectSlayerBossesList = this.createBossesArray()
        let htmlSlayerBossesTable
        let tableWithLabels
        if(this.state.loaded ===true && this.state.open===true) {
            htmlSlayerBossesTable = objectSlayerBossesList.map(item => {
                return (
                    <tbody key={Math.random()}>
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.level}</td>
                            <td>{item.totalExp}</td>
                            <td>{item.tier1}</td>
                            <td>{item.tier2}</td>
                            <td>{item.tier3}</td>
                            <td>{item.tier4}</td>
                        </tr>
                    </tbody>
                )
            })
            tableWithLabels = (
            <table className="menu-opened" key={Math.random()}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Level</th>
                        <th>Total Experience</th>
                        <th>Tier 1 kills</th>
                        <th>Tier 2 kills</th>
                        <th>Tier 3 kills</th>
                        <th>Tier 4 kills</th>
                    </tr>
                </thead>
                {htmlSlayerBossesTable}
            </table>)
        }

        return (
            <div>
                <h3 className="menu" onClick={this.openAndClose}>Slayer Bosses</h3>
                <div className="slayer-table">
                    {tableWithLabels}
                </div> 
                    
            </div>
        )
    }

}

export default HandleSlayerBosses;