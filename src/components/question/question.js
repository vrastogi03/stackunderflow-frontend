import React from 'react';
import {Button} from 'reactstrap';

const Question = ({isTeach,number,question,answer,askedby,answeredby}) =>{
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <div>
                <h2>{number+':'+question}</h2>
                <h4>{'Asked by-'+askedby}</h4>
                {   (answer=== 'Not Answered'&& isTeach===true)?
                    <Button color="primary" >Answer It</Button>
                    :
                        <div>
                            <h3>{'Answer'}</h3>
                            <p>{answer}</p>
                            <p>{'Answered by '+answeredby}</p>
                        </div>
                }
            </div>
        </div>
    )
}

export default Question;