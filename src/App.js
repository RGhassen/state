import React from 'react';
import './App.css';
import NavPro from './compt/NavPro';
import Profile from './compt/Profile';

class App extends React.Component{
  constructor(){
    super()
      this.state={
        shows : false

      }
      
    
  }
  handelshow=()=>{this.setState({shows : !this.state.shows})}
render(){
  return(
    <div id='main'>
      <NavPro/>
      <section>
      <h2>Home</h2>
      <img src="/nav.jpg" alt='error-nav'id='nav-img'/>
      <p>if you want to see the profile click on the button bellow</p>
      </section>
      <button onClick={this.handelshow}>{this.state.shows? 'Hide profile' : 'Show profile'}</button>
      { this.state.shows && <Profile/>}
      
    </div>
  )
}
}

export default App;
