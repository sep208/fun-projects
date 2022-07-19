import React from 'react';
import './sign-up.css';
import CustomInput from '../../components/custom-input/custom-input';

import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

import createUserProfileDocument from '../../firebase/firebase.utils'

class SignUp extends React.Component{
 constructor(props){
   super(props);

   this.state={
      Name:'',
      Password:'',
      Email:''
   }
 }
 handleSubmit = async event => {
   event.preventDefault();
   const {name, password, email} = this.state;

   try{
    const { user } = await auth.createUserWithEmailAndPassword(email, password)

    createUserProfileDocument(user, name)
   } catch(error){
     alert(error) 
   }
 }
  handleChange = async event => {
    event.preventDefault()
    const { name,value } = event.target;
    this.setState({ [name]: value });
  }
 render(){
    return(
 <div className="SignUp">
    <h1 className="sign-up-header">Sign Up</h1>
    <CustomInput 
    type="text"
    name="Name"
    value={this.Name}
    onChange={this.handleChange}
    placeholder="Name"
    required
    />
    <br />
   <CustomInput 
    type="password"
    name="password"
    value={this.Password}
    onChange={this.handleChange}
    placeholder="Password"
    required
    />
    <br />
  <CustomInput 
    type="text"
    name="email"
    value={this.Email}
    onChange={this.handleChange}
    placeholder="Email"
    required
    />
    <p className="sign-in-redirect">Need To sign In Click Here</p>
    <button className="sign-up-button button" >Sign Up</button>
    <button onClick={signInWithGoogle} className="sign-up-with-google button">Sign Up With Google</button>
 </div>
  )
 }
}

export default SignUp;