import React from 'react';
import './QuizCard.css';

const JoinedQuizCard = ({ title, score, questions }) => {
    return (
        <div className="quiz-card">
            <h1 id="created-quiz-title">{title}</h1>
            <div id="horizontal-line"></div>
            <div id="row">
                <p id="responses">
                    Score : {score}/{questions}
                </p>
                <p id="result">{score / questions > 0.6 ? 'Passed' : 'Fail'}</p>
                <p id="questions">Questions : {questions}</p>
            </div>
            <div id="open"></div>
        </div>
    );
};

export default JoinedQuizCard;
