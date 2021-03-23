import React from 'react';
import Question from '../question/question';

const QuesList = ({ questions,isTeach }) => {
    console.log(questions)
    return(
        <div>
            {
                questions.map((ques,i)=>{
                    return(
                        <Question
                            key={i}
                            isTeach={isTeach}
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