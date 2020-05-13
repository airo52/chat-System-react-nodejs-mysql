import React, { Component} from 'react';
import axios from 'axios';
class Register extends Component{
    constructor(props){
        super(props);
        this.state={
                username:'',
                phone:'',
                Confirm:'',
                pass:'',
          
            registerError:{
              server:'',
              password:'',
              username:'',
              phone:''
            }
        }
        
  }
  PhoneHandle= e =>{
    this.setState({phone:e.target.value});
  }
  usernameHandle= e =>{
this.setState({username:e.target.value});
  }
  pass1= e =>{
    this.setState({pass:e.target.value});
  }
  pass2= e =>{
    this.setState({Confirm:e.target.value});
  }
  Register= () =>{
    //http://localhost/Chat_sytem/assets/upload/default.png
    var defaultImage = `http://localhost/assets/upload/default.png`;
    var usernameErr = document.getElementById('username');
    var passErr = document.getElementById('password');
    var phoneErr = document.getElementById('phone');
    var passERR = document.getElementById('password');
    
    
if(this.state.username !== ''){
  const phone = this.state.phone;
  if(phone !== ''){
  if(phone.length <=9 && phone.length < 11){
  if(this.state.pass !== ''){
                      
  axios({
  method:'GET',
  url:`http://localhost:5000/chat/register?username=${this.state.username}&password=${this.state.pass}&phone=${this.state.phone}&avatar=${defaultImage}&confirm=${this.state.Confirm}`,
  })
  .then((response)=>{
  const data = response.data;

  if(data === 'user exist'){
  this.setState({registerError:{username:'you already have an account'}})
  usernameErr.style.display="block";
  passErr.style.display="none";
  }

  if(data === 'password err'){
  this.setState({registerError:{password:'password dint much'}})
  passErr.style.display="block";
  }

  if(data === 'registartion succesfull'){
  this.setState({registerError:{server:data}})
  passErr.style.display="none";
  usernameErr.style.display="none";
  }
  })
  }

  else{
  this.setState({registerError:{password:'password required'}})
  usernameErr.style.display="none";
  passErr.style.display="none";
  phoneErr.style.display="none";
  passERR.style.display = "block";
  }

  }

  else{
  this.setState({registerError:{phone:'the number must be ten digits'}})
  usernameErr.style.display="none";
  passErr.style.display="none";
  phoneErr.style.display="block";
  }

  }
  else{
  this.setState({registerError:{phone:'provide your phone number'}})
  usernameErr.style.display="none";
  passErr.style.display="none";
  phoneErr.style.display="block";
  }
  }
  else{
  this.setState({registerError:{username:'username required'}})
  usernameErr.style.display="block";
  passErr.style.display="none";
  phoneErr.style.display="none";
  }

  }

    render(){
        return(
            <div>
      <div className="container">
      <h4>Register</h4>
      <span className="err">{this.state.registerError.server}</span>
      <form>
      <label>Username</label>
      <div id="username" className="err">
      {this.state.registerError.username}
       </div>
      <br/>
      <input required onChange={this.usernameHandle} className="form-control" type="text" placeholder="Enter username" />
      <label className="pass">Phone</label>
      <div id="phone" className="err">
      {this.state.registerError.phone}
      </div>
      <br/>
      <input className="form-control" required onChange={this.PhoneHandle} placeholder="Enter your password" type="phone" />
      <label className="pass">password</label>
      <div id="password" className="err">
      {this.state.registerError.password}
      </div>
      <br/>
      <input required className="form-control" onChange={this.pass1} placeholder="Enter your password" type="password" />
      <label className="pass">Confirm password</label>
      <br/>
      <input required onChange={this.pass2} className="form-control" placeholder="Enter your password" type="password" />

                    
      <button type="button" onClick={this.Register} className="btn btn-primary login">Register</button>
                   
      </form>
      </div>
        </div>
        )
    }
}
export default Register;