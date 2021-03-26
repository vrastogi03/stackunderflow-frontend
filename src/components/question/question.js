import React from 'react';
import {Button} from 'reactstrap';

const Question = ({loadQues,isTeach,number,ques,onRouteChange}) =>{
    
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <div>
                <h2>{number+':'+ques.question}</h2>
                <h4>{'Asked by-'+ques.askedbyname}</h4>
                {   (ques.answer=== 'Not Answered'&& isTeach===true)?
                    <Button color="primary" onClick={ () => loadQues(ques)} >Answer It</Button>
                    :
                        <div>
                            <h3>{'Answer'}</h3>
                            <p>{ques.answer}</p>
                            <p>{'Answered by '+ques.answeredbyname}</p>
                        </div>
                }
            </div>
        </div>
    )
}

export default Question;