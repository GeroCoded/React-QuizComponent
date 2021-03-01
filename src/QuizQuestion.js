import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component {

    handleClick(buttonText) {
        console.log('\n== QuizQuestionext ==');
        console.log('ButtonText:', buttonText);
        console.log('this.props.quiz_question.answer:', this.props.quiz_question.answer);
        if (buttonText === this.props.quiz_question.answer) {
            this.props.showNextQuestionHandler();
        }
    }

    render() {
        return (
            <main>
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