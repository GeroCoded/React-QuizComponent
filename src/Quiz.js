import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion';
import QuizEnd from './QuizEnd';

let quizData = require('./quiz_data.json');

class Quiz extends Component {

    constructor(props) {
        super(props);

        this.state = {
            quiz_position: 1
        };
    }

    showNextQuestion() {
        console.log('\n== Quiz ==');
        this.setState((previousState) => {
            return { quiz_position: ++previousState.quiz_position }
        });
    }

    handleResetClick() {
        this.setState({ quiz_position: 1 });
    }

    render() {

        const isQuizEnd = this.state.quiz_position - 1 === quizData.quiz_questions.length;

        return (
            <div>
                { isQuizEnd 
                    ? <QuizEnd resetClickHandler={this.handleResetClick.bind(this)} />
                    : <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} showNextQuestionHandler={this.showNextQuestion.bind(this)} />
                }
                {/* <div className="QuizQuestion">
                    {quizData.quiz_questions.find((question) => question.id === this.state.quiz_position).instruction_text}
                </div> */}
            </div>
        );
    }
}

export default Quiz;
