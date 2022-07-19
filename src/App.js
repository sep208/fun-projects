import React, { Component } from 'react';
import './App.css'
import MainPage from './pages/main-page/main-page';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignUp from './pages/sign-up/sign-up';
import { auth,createProfileDocument } from './firebase/firebase.utils'
class App extends Component {
 constructor(props){
     super(props)
     this.state = {
        currentUser:null
     }
 }
    
   unsubscribeFromAuth = null
 
 componentDidMount() {
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if (userAuth){
      const userRef = await createProfileDocument(userAuth)

      userRef.onSnapshot(snapShot => {
        this.setState({
          currentUser: {
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }

          
        })

      })
    }
    else{
      this.setState({currentUser:userAuth})
      }
  })
 }

 componentWillUnmount(){
   this.unsubscribeFromAuth()
 }

 
     render() {
       
      return(
       <Router>
       <div className="App">
         <Switch>
         <Route exact path='/sign-up' component={SignUp} />
         <Route exact path='/' component={MainPage} />
         
         </Switch>
       </div>
       </Router>
      )
     }
 
}
export default App;