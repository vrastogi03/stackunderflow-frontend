import React,{ Component } from 'react';
import './App.css';
import Navigation from './components/navigation/navigation';
import SearchBox from './components/searchbox/searchbox';
import Scroll from './components/Scroll/scroll';
import QuesList from './components/quesList/quesList';
import Navigation2 from './components/Navigation2/Navigation2'

class App extends Component {
  constructor() {
      super()
      this.state= {
          questions: [],
          searchfield: '' 
      }
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

  render(){
      return (
        <div>
          <Navigation/>
          <div className='tc'>
                    <h1 className='f1'>STACK UNDERFLOW</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                      <QuesList questions={this.state.questions}/>
                    </Scroll>
          </div>
          <Navigation2
            onButtonAll={this.onButtonAll}
            onButtonAns={this.onButtonAns}
            onButtonUnAns={this.onButtonUnAns}
          />
        </div>
      )
  }
}

export default App;