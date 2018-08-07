import React, { Component } from 'react';

import './Instruction.css';

export default class Instruction extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        let question = this.props.num > 1 ? "questions" : "question";
        let content = this.props.num + " " + question + " in total. Come on!";
        return (
            <div className="instruction">
                {content}
            </div>
        )
    }
}