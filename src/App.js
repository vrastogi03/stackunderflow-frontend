import React,{ Component } from 'react';
import './App.css';
import Navigation from './components/navigation/navigation';
import SearchBox from './components/searchbox/searchbox';
import Scroll from './components/Scroll/scroll';
import QuesList from './components/quesList/quesList';
import Navigation2 from './components/Navigation2/Navigation2'
import SigninStudent from './components/Signin/SigninStudent';
import SigninTeacher from './components/Signin/SigninTeacher';

const initialState = {
  questions: [],
  searchfield: '',
  isTeach: false,
  route: 'signinstud',
  isSignedIn: false
}

class App extends Component {
  constructor() {
      super()
      this.state= initialState
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

  onRouteChange = (route) =>{
    if ( route === 'signinstud') {
      this.setState(initialState)

    } else if ( route === 'homestud') {
      this.setState({isSignedIn: true,isTeach: false})
    }else if(route === 'hometeach')
    {
      this.setState({isSignedIn: true,isTeach: true})
    }
    this.setState({route: route})
  }

  render(){
      return (
        <div>
          <Navigation onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn}/>

          {
            this.state.route==="signinstud"?
            <SigninStudent onRouteChange={this.onRouteChange}/>:
            this.state.route==="signinteach"?
          <SigninTeacher onRouteChange={this.onRouteChange}/>:
          <div>
          <div className='tc'>
                    <h1 className='f1'>STACK UNDERFLOW</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                      <QuesList questions={this.state.questions} isTeach={this.state.isTeach} />
                    </Scroll>
          </div>
          <Navigation2
            onButtonAll={this.onButtonAll}
            onButtonAns={this.onButtonAns}
            onButtonUnAns={this.onButtonUnAns}
          />
          </div>
        }
        </div>
      )
  }
}

export default App;