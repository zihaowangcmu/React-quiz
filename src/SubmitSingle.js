import React, { Component } from 'react';

import './Submit.css';

export default class SubmitSingle extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        
        let text = (this.props.willFinish ? "Complelete" : "Next");

        return (
            <div className="submit-position-wrapper">
                <div className="submit-wrapper">
                    <div className="submit">
                        <button 
                            onClick={this.props.handleSubmit}
                            disabled={this.props.disabled}
                        >
                            {text}
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}