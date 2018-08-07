import React, { Component } from 'react';

import './Vignette.css';

export default class Vignette extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        let content = this.props.index + 1 + " " + "." + this.props.content;
        if (!this.props.isSingle) content += " (There are multiple correct answers)";
        return (
            <div className="vignette">
                <p className="vignette-content">{content}</p>
            </div>
        )
    }
}