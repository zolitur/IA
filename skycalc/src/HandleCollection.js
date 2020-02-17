import React, {Component} from 'react';

class HandleCollection extends Component {
    createCollectionArray = () => {
        if(this.props.input != null) {
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
                let stringData = collection[i] + " tier " + tier[i] + " (With " + stats[i] + " collected)"
                final.push(stringData)
            }
            console.log(final)
            return final
        }

    }

    render (){
        return (
            <div>
                <h3>Collection</h3>
                <p onClick={this.createCollectionArray}>Click here to expand</p>
            </div>
        )
    }

}

export default HandleCollection;