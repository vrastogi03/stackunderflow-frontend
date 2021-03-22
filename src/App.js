import React,{ Component } from 'react';
import './App.css';
import Navigation from './components/navigation/navigation';
import SearchBox from './components/searchbox/searchbox';
import Scroll from './components/Scroll/scroll';
class App extends Component {
  constructor() {
      super()
      this.state= {
          
          searchfield: '' 
      }
  }

  componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(users => this.setState({ robots: users}));
  }

  onSearchChange = (event) => {
      this.setState({ searchfield: event.target.value })
      
  }

  render(){
      return (
        <div>
          <Navigation/>
          <div className='tc'>
                    <h1 className='f1'>STACK UNDERFLOW</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                    </Scroll>
          </div>
        </div>
      )
  }
}

export default App;