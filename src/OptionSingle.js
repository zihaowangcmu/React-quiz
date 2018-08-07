import React, { Component } from 'react';

import './Option.css';

export default class OptionSingle extends Component {
    
    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange() {
        this.props.handleOnChange(this.props.value, this.props.handleDisable);
    }

    render() {
        return (
            <div className="single-option">
                <label className="rad">
                    <input
                        type="radio"
                        name={this.props.name}
                        id={this.props.value}
                        value={this.props.value}
                        onChange={this.handleOnChange}
                    />
                    <div className="radio-customize-button">
                        <div className="button-content">
                            {this.props.value}
                        </div>
                    </div>
                    <div className="option-content">
                        {this.props.content}
                    </div>
                </label>
            </div>
        )
    }
}