import React from 'react';
import Question from '../question/question';

const QuesList = ({ questions }) => {
    console.log(questions)
    return(
        <div>
            {
                questions.map((ques,i)=>{
                    return(
                        <Question
                            key={i}
                            number={i+1}
                            question={questions[i].question}
                            answer={questions[i].answer}
                            askedby={questions[i].askedbyname}
                            answeredby={questions[i].answeredbyname}
                      />
                    )
                })
            }
        </div>
    )
}

export default QuesList;