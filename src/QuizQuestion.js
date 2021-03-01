import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            incorrectAnswer: false
        };
    }

    handleClick(buttonText) {
        console.log('\n== QuizQuestionext ==');
        console.log('ButtonText:', buttonText);
        console.log('this.props.quiz_question.answer:', this.props.quiz_question.answer);
        const incorrectAnswer = buttonText !== this.props.quiz_question.answer;
        
        if (!incorrectAnswer) {
            this.props.showNextQuestionHandler();
        }
        this.setState({ incorrectAnswer })
    }

    render() {
        return (
            <main>
                { this.state.incorrectAnswer && <p className="error">Sorry, that's not right</p> }
                <section>
                    <p>
                        {this.props.quiz_question.instruction_text}
                    </p>
                </section>
                <section className="buttons">
                    <ul>
                        {this.props.quiz_question.answer_options.map((option, idx) => 
                            <QuizQuestionButton key={idx} button_text={option} clickHandler={this.handleClick.bind(this)} />
                        )}
                    </ul>
                </section>
            </main>
        )
    }
}

export default QuizQuestion;