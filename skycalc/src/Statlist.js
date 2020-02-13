import React, {Component} from 'react';

class Statlist extends Component {
    render (){
        return (
            <div className="StatList">
                <h3>{this.props.name}</h3>
            </div>
        )
    }
}

export default Statlist;