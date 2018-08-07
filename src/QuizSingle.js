import React, { Component } from 'react';

import Vignette from './Vignette';
import OptionSingle from './OptionSingle';

import './Quiz.css';

export default class QuizSingle extends Component {
    
    constructor(props) {
        super(props);
        this.renderSingleOption = this.renderSingleOption.bind(this);
    }

    renderSingleOption(item, key) {
        return(
            <div className='option' key={"question" + this.props.questionId + "option" + key}>
                <OptionSingle
                    content={item.content}
                    answer={this.props.answer}
                    id={this.props.questionId}
                    name={this.props.questionId}
                    value={item.type}
                    reply={this.props.reply}
                    handleOnChange={this.props.handleOnChange}
                    handleDisable={this.props.handleDisable}
                />
            </div>
        )
    }

    render() {

        return (
            <div className="quiz-single">
                <Vignette 
                    index={this.props.questionId}
                    content={this.props.vignette}
                    isSingle = {true}
                />
                {this.props.options.map(this.renderSingleOption)}
            </div>
        )
    }
}