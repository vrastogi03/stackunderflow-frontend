import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';


class AskQues extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ques: ''
        }
    }
    onQuesChange = (event) =>{
        this.setState({ques: event.target.value})
    }
    onSubmit = () => {
        fetch('http://localhost:3000/askques',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                askedby: this.props.id,
                question: this.state.ques
            })
        })
            .then(response => response.json())
            .then(user =>{
                if(user.id){
                    this.props.updateCountStud()
                    this.props.onRouteChange('homestud');
                }
            })

    }
    render(){
        const {onRouteChange}=this.props;
        return(
            <div className="pa4 black-80">
                <div>
                    <label 
                        htmlFor="comment" 
                        className="f8 b db mb2"
                    >
                        Your Question- 
                    </label>
                    <textarea 
                        id="comment" 
                        name="comment" 
                        className="db border-box hover-black w-100 measure ba b--black-10 pa2 br1 mb1" 
                        aria-describedby="comment-desc"
                        onChange={this.onQuesChange}>
                    </textarea>
                    <ButtonGroup style= {{display: 'flex'}}>
                        <Button color="primary" onClick={this.onSubmit}>Submit</Button>
                        <Button color="primary"  onClick={ () => onRouteChange('homestud')} >Go Back</Button>
                    </ButtonGroup>
                </div>
            </div>
        )
    }
    
}

export default AskQues;