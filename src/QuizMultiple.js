import React, { Component } from 'react';

import Vignette from './Vignette';
import OptionMultiple from './OptionMultiple';

import './Quiz.css';

export default class QuizMultiple extends Component {
    
    constructor(props) {
        super(props);
        this.renderMultipleOption = this.renderMultipleOption.bind(this);
    }

    renderMultipleOption(item, key) {
        return(
            // Key should be like this unique
            // Don't just use key={key}
            // Or checkbox will remain the checked status when you go to next question
            <div className='option' key={"question" + this.props.questionId + "option" + key}>
                <OptionMultiple
                    content={item.content}
                    answer={this.props.answer}
                    id={key}
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
            <div className="quiz-multiple">
                <Vignette 
                    index={this.props.questionId}
                    content={this.props.vignette}
                    isSingle = {false}
                />
                {this.props.options.map(this.renderMultipleOption)}
            </div>
        )
    }
}