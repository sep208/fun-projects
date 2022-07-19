import React, { Component } from 'react';
import Header from '../header/header';
import './top-area.css';
import { withRouter } from 'react-router';
class TopArea extends Component {
  constructor(props){
    super(props)

    this.state = {
      added:""
    }
  }
  render(){
    return(
  <div className="TopArea">
    {console.log(this.props)}
    <Header />
    <img className="img" src="main.png" alt=""/>
    <p className="title">Coding <section className="for-kids"><b>For Kids</b></section></p>
    <button className="button" onClick={() => this.props.history.push('/sign-up')}>
      Sign Up {this.state.added} 
    </button>
  </div>
    )
 }
}

export default withRouter(TopArea);