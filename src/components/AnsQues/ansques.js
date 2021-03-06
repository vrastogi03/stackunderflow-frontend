import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';


class AnsQues extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ans: ''
        }
    }
    onAnsChange = (event) =>{
        this.setState({ans: event.target.value})
    }

    render(){
        const {onRouteChange,currques,onSubmitAnsQues} = this.props;
        return(
            <div className="pa4 black-80">
                <div>
                <label 
                        htmlFor="comment" 
                        className="f8 b db mb2"
                    >
                        {currques.ques}
                    </label>
                    <label 
                        htmlFor="comment" 
                        className="f8 b db mb2"
                    >
                        Your answer- 
                    </label>
                    <textarea 
                        id="comment" 
                        name="comment" 
                        onChange={this.onAnsChange}
                        className="db border-box hover-black w-100 measure ba b--black-10 pa2 br1 mb1" 
                        aria-describedby="comment-desc">
                    </textarea>
                    <ButtonGroup style= {{display: 'flex'}}>
                        <Button color="primary" onClick={()=> onSubmitAnsQues(this.state.ans)}>Submit</Button>
                        <Button color="primary"  onClick={ () => onRouteChange('hometeach')} >Go Back</Button>
                    </ButtonGroup>
                </div>
            </div>
        )
    }
}

export default AnsQues;