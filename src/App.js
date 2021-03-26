import React,{ Component } from 'react';
import './App.css';
import Navigation from './components/navigation/navigation';
import SearchBox from './components/searchbox/searchbox';
import Scroll from './components/Scroll/scroll';
import QuesList from './components/quesList/quesList';
import Navigation2 from './components/Navigation2/Navigation2'
import SigninStudent from './components/Signin/SigninStudent';
import SigninTeacher from './components/Signin/SigninTeacher';
import RegisterStudent from './components/Register/registerStudent';
import RegisterTeacher from './components/Register/registerTeacher';
import Rank from './components/Rank/rank';
import AskQues from './components/Askques/askques';
import AnsQues from './components/AnsQues/ansques';

const initialState = {
  questions: [],
  searchfield: '',
  isTeach: false,
  route: 'signinstud',
  isSignedIn: false,
  user: {
    id: '',
    name:'',
    email:'',
    entries:0
  },
  currques:{
    id:'',
    ques:''
  }
}

class App extends Component {
  constructor() {
      super()
      this.state= initialState
  }
  loadQues=(data)=>{
    this.setState({currques:{
      id: data.id,
      ques:data.question
    }});

    this.onRouteChange('ansques')
  }
  loadstud=(data)=>{
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.quesasked
    }})
  }

  loadteach=(data)=>{
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.quesanswered
    }})
  }

   onButtonAll = () =>{
     fetch('http://localhost:3000/getques',{
       method: 'get',
       headers: {'Content-Type':'application/json'}
     }).then(response=>response.json())
     .then(resp=>{
       this.setState({questions:resp})
      //  console.log(this.state.questions[0].question)
     })
   }

   onButtonAns = () =>{
    fetch('http://localhost:3000/getansques',{
      method: 'get',
      headers: {'Content-Type':'application/json'}
    }).then(response=>response.json())
    .then(resp=>{
      this.setState({questions:resp})
     //  console.log(this.state.questions[0].question)
    })
  }

  onButtonUnAns = () =>{
    fetch('http://localhost:3000/getunansques',{
      method: 'get',
      headers: {'Content-Type':'application/json'}
    }).then(response=>response.json())
    .then(resp=>{
      this.setState({questions:resp})
     //  console.log(this.state.questions[0].question)
    })
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
    
}

updateCountTeach=()=>{
      this.setState({user: {
        entries:this.state.user.entries+1
      }})
    
}

updateCountStud=()=>{
  this.setState({user: {
    entries:this.state.user.entries+1
  }})

}

  onRouteChange = (route) =>{
    if ( route === 'signinstud') {
      this.setState(initialState)

    } else if ( route === 'homestud') {
      this.setState({isSignedIn: true,isTeach: false})
      this.setState({questions:[]})
    }else if(route === 'hometeach')
    {
      this.setState({isSignedIn: true,isTeach: true})
      this.setState({questions:[]})
      // this.updateCountTeach()

    }
    
    this.setState({route: route})
  }

  render(){
    const filteredQues = this.state.questions.filter( robot =>{
      return robot.question.toLowerCase().includes(this.state.searchfield.toLowerCase());
  })
      return (
        <div>
          <Navigation onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn}/>
          {
            this.state.route==='signinstud'?
            <SigninStudent onRouteChange={this.onRouteChange} loadstud={this.loadstud}/>:
            this.state.route==='signinteach'?
          <SigninTeacher onRouteChange={this.onRouteChange} loadteach={this.loadteach}/>:
          this.state.route==='registerstud'?
          <RegisterStudent onRouteChange={this.onRouteChange} loadstud={this.loadstud}/>:
          this.state.route==='registerteach'?
          <RegisterTeacher onRouteChange={this.onRouteChange} loadteach={this.loadteach}/>:
            this.state.route==='askques'?
            <AskQues updateCountStud={this.updateCountStud} onRouteChange={this.onRouteChange} id={this.state.user.id} />:
            this.state.route==='ansques'?
            <AnsQues updateCountTeach={this.updateCountTeach} onRouteChange={this.onRouteChange} currques={this.state.currques} user={this.state.user}/>:
          <div>
          <div className='tc'>
                    <h1 className='f1'>STACK UNDERFLOW</h1>
                    <Rank name={this.state.user.name} entries={this.state.user.entries} isTeach={this.state.isTeach} />

                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                      <QuesList 
                        questions={filteredQues} 
                        isTeach={this.state.isTeach} 
                        loadQues={this.loadQues}
                        onRouteChange={this.onRouteChange} />
                    </Scroll>
          </div>
          <Navigation2
            isTeach={this.state.isTeach}  
            onButtonAll={this.onButtonAll}
            onButtonAns={this.onButtonAns}
            onButtonUnAns={this.onButtonUnAns}
            onRouteChange={this.onRouteChange}
          />
          </div>
        }
        </div>
      )
  }
}

export default App;