import React from 'react';
import Question from '../question/question';

const QuesList = ({loadQues, questions,isTeach,onRouteChange }) => {
    console.log(questions)
    return(
        <div>
            {
                questions.map((ques,i)=>{
                    return(
                        <Question
                            key={i}
                            onRouteChange={onRouteChange}
                            isTeach={isTeach}
                            number={i+1}
                            loadQues={loadQues}
                            ques={questions[i]}
                      />
                    )
                })
            }
        </div>
    )
}

export default QuesList;