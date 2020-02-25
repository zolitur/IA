/* eslint no-undef: "off"*/
import React, {Component} from 'react';
import pako from "../helperFiles/pako";
import nbt from "../helperFiles/nbt";
import {itemInventoryDictionary} from "../helperFiles/itemInventoryDictionary"

class HandleInventories extends Component {
    state = {
        loaded: false,
        open: false,
        data: null,
        type: null,
    }
    
    createInventory = () => {
        if(this.state.loaded === false) {
            let final
            if(this.props.input != null) {
                let data = this.props.input.profile.members[this.props.profileId][this.props.type].data;
                //console.log(data)
                let parsed = this.parseNBTData(data);
                //console.log(parsed)

                final = parsed.value.i.value.value

                if(this.state.loaded === false) {
                    this.setState({
                        loaded: true,
                        data: final,
                        type: this.props.type.charAt(0).toUpperCase() + this.props.type.replace("_"," ").slice(1)
                    })
                }
                return final
            }
        }
        else {
            return this.state.data
        }

    }

    createInventoryBars = (bar,inventory) => {
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
                console.log(textureFileName)
                output.push(<td key={Math.random()} className="drop-down">
                    <img src={"../textures/item/"+textureFileName} alt="Item"/>
                </td>)
                
            }
            else {
                output.push(<td key={Math.random()}>Empty</td>)
            }
        }
        console.log(output)
        return output
        
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
                <table>
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

}

export default HandleInventories;