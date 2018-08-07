import React, { Component } from 'react';

import './ErrorAlert.css';

export default class SingleOption extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        
        return (
                <div className="error-alert">
                    {this.props.isWrong ? <p>Wrong Answer. Please try again.</p> : <p>&nbsp;</p>}
                </div>
        )
    }
}