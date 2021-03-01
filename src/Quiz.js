import React, { Component } from 'react';

let questions = require('./quiz_data.json').quiz_questions;

class Quiz extends Component {

    constructor(props) {
        super(props);

        this.state = {
            quiz_position: 1
        };
    }

    render() {
        return (
            <div>
                <div className="QuizQuestion">
                    {questions.find((question) => question.id === this.state.quiz_position).instruction_text}
                </div>
            </div>
        );
    }
}

export default Quiz;
