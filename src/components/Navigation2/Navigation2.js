import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';

const Navigation2 = ({onRouteChange,onButtonAll,onButtonAns,onButtonUnAns,isTeach}) =>{
    if(isTeach){
        return(
            <div>
                <ButtonGroup style= {{display: 'flex', justifyContent: 'flex-end'}}>
                    <Button color="primary" onClick={onButtonAll}>All Ques</Button>
                    <Button color="primary" onClick={onButtonAns}>Answered Ques</Button>
                    <Button color="primary" onClick={onButtonUnAns} >Unanswered Ques</Button>
                </ButtonGroup>
            </div>
        )
    }
    else{
        return(
            <div>
                <ButtonGroup style= {{display: 'flex', justifyContent: 'flex-end'}}>
                    <Button color="primary" onClick={onButtonAll}>All Ques</Button>
                    <Button color="primary" onClick={onButtonAns}>Answered Ques</Button>
                    <Button color="primary" onClick={onButtonUnAns} >Unanswered Ques</Button>
                    <Button color="primary" onClick={ () => onRouteChange('askques')} >Ask Ques</Button>
                </ButtonGroup>
            </div>
        )
    }
}

export default Navigation2;