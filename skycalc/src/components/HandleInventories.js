/* eslint no-undef: "off"*/
import React, {Component} from 'react';
import pako from "../helperFiles/pako";
import nbt from "../helperFiles/nbt";
import {itemInventoryDictionary} from "../helperFiles/itemInventoryDictionary"

class HandleInventories extends Component {
    state = {
        loaded: false,
        blocked: false,
        open: false,
        data: null,
        type: null,
        bar1: null,
        bar2: null,
        bar3: null,
        bar4: null,
        bar5: null,
        bar6: null,
    }
    
    createInventory = () => {
        if(this.state.loaded === false) {
            let final
            if(this.props.input != null) {
                if(this.props.input.profile.members[this.props.profileId][this.props.type]!= null) {
                    let data = this.props.input.profile.members[this.props.profileId][this.props.type].data;
                    //console.log(data)
                    let parsed = this.parseNBTData(data);
                    final = parsed.value.i.value.value

                    if(this.state.loaded === false) {
                        this.setState({
                            loaded: true,
                            data: final,
                            type: this.props.type.charAt(0).toUpperCase() + this.props.type.replace(/_/g," ").slice(1)
                        })
                    }
                    return final
                }
                else {
                    this.setState({
                        blocked:true,
                        type: this.props.type.charAt(0).toUpperCase() + this.props.type.replace("_"," ").slice(1)
                    })
                }
            }
        }
        else {
            return this.state.data
        }

    }

    createInventoryBars = (bar,inventory) => {
        if(this.state[bar]===null) {   
            let start
            let end
            switch(bar) {
                case "bar1":
                    start=0
                    end=9
                break;
                case "bar2":
                    start=9
                    end=18
                break;
                case "bar3":
                    start=18
                    end=27
                break;
                case "bar4":
                    start=27
                    end=36
                break;
                case "bar5":
                    start=36
                    end=45
                break;
                case "bar6":
                    start=45
                    end=54
                break;
            }
            let output = []
            for(let i=start;i<end;i++) {
                if(inventory[i]!==undefined && inventory[i].id!==undefined) {
                    let id = inventory[i].id.value;
                    let textureFileName = itemInventoryDictionary(id+"_0") + ".png"
                    let name = inventory[i].tag.value.display.value.Name.value
                    let separateByColor = name.split("§")
                    let styledName = separateByColor.map(item => {
                        return <span className={"§"+item.slice(0,1)} key={Math.random()}>{item.slice(1)}</span>
                    })

                    let itemCount = inventory[i].Count.value
                    if(inventory[i].Count.value===1) {
                        itemCount = null
                    }
                    let lore = inventory[i].tag.value.display.value.Lore.value.value.map(item => {
                        let separateByColor = item.split("§")
                        let styled = separateByColor.map(item => {
                            return <span className={"§"+item.slice(0,1)} key={Math.random()}>{item.slice(1)}</span>
                        })
                        return <li key={Math.random()}>{styled}</li>
                    })
                    lore = <ul>{lore}</ul>
                    output.push(<td key={Math.random()} className="inventory-slot">
                        <div className="inventory-slot">
                            <img className="item-in-slot" src={"./textures/item/"+textureFileName}/>
                            <img className="background-slot" src={"./textures/gui/inventory_slot.png"} alt=""/>
                            <div className="item-count">{itemCount}</div>
                            <div className="inventory-item-dropdown">
                                <div>{styledName}</div>
                                {lore}
                            </div>
                        </div>
                    </td>)
                    
                }
                else {
                    output.push(<td key={Math.random()}><img className="empty-inventory-slot" src={"./textures/gui/inventory_slot.png"} alt="Empty" width="60" height="60"/></td>)
                }
            }
            return output
        }
        else {
            return this.state[bar]
        }
    }

    parseNBTData(data) {
        let decoded = atob(data);
        let result
        try {
            result = pako.inflate(decoded);
        } 
        catch (err) {
            console.log(err);
        }
        let parsedData = nbt.parseUncompressed(result, function(error, data) {
            if (error) { throw error; }
        });
        return parsedData    
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
        if(!this.state.blocked) {
            let bar1
            let bar2
            let bar3
            let bar4
            let bar5
            let bar6
            let inventory = this.createInventory();
            if(this.state.loaded ===true && this.state.open===true) {
                bar1 = this.createInventoryBars("bar1",inventory)
                bar2 = this.createInventoryBars("bar2",inventory)
                bar3 = this.createInventoryBars("bar3",inventory)
                bar4 = this.createInventoryBars("bar4",inventory)
                bar5 = this.createInventoryBars("bar5",inventory)
                bar6 = this.createInventoryBars("bar6",inventory)
            }
            
            return (
                <div>
                    <h3 onClick={this.openAndClose}>{this.state.type}</h3>
                    <table className="inventory">
                        <tbody>
                            <tr>{bar6}</tr>
                            <tr>{bar5}</tr>
                            <tr>{bar4}</tr>
                            <tr>{bar3}</tr>
                            <tr>{bar2}</tr>
                            <tr>{bar1}</tr>
                        </tbody>                   
                    </table>
                </div>
            )
        }
        else {
            return <p>This player has disabled their inventory API access! Cannot show {this.state.type}</p>
        }
    }

}

export default HandleInventories;