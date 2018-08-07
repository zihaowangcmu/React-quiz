import React, { Component } from 'react';

import './Option.css';

export default class OptionMultiple extends Component {
    
    constructor(props) {
        super(props);
        this.state={
            checked: false,
            value: this.props.value,
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.setReply = this.props.handleOnChange.bind(this);
    }

    componentDidMount() {
        this.setState({
            checked: false,
        })
    }

    handleOnChange() {
        this.setState({
            checked: !this.state.checked,
        }, () => {this.setReply(this.props.name, this.props.id, this.state.checked, this.state.value, this.props.handleDisable)})
    }

    render() {
        return (
            <div className="multiple-option">
                <label className="ckb">
                    <input
                        type="checkbox"
                        name={this.props.name}
                        id={this.props.value}
                        value={this.props.value}
                        checked={this.state.checked}
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