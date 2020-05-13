import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Login from './components/login';
import Register from './components/register';
import Home from './components/home';

class App extends Component{
  constructor(){
    super();
  this.state={
    username:'',
    password:'',
    LoginStatus:'',
    userData:[],
    userID:'',
    usernameerrR:'',
    passworderrR:'',
    buttons:true,
    login:true,
    register:false,
    home:false,
  }
}

componentDidMount(){
  var logged = localStorage.getItem('user')
    if(logged === '1'){
      //this.setState({buttons:true,login:true,register:false,home:false})
      //this.setState({buttons:false,login:false,register:false,home:true});
    }
    if(logged === '0'){
      //this.setState({buttons:true,login:true,register:false,home:false})
    }
 
}

usernameHandle= e =>{
  this.setState({username:e.target.value});
}
passwordHandle=e=>{
  this.setState({password:e.target.value});
}
logData=e=>{
  this.setState({passworderrR:''});
  this.setState({usernameerrR:''});
  if(this.state.password && this.state.username !==''){
  axios({
    method:'GET',
    url:`http://localhost:5000/chat/Login?username=${this.state.username}&password=${this.state.password}`,
  })
  .then((response)=>{
    const data = response.data;
    if(data.data === 'logged'){
       this.setState({userData:data.message,userID:data.ID});
       localStorage.setItem('user',1);
       this.setState({LoginStatus:localStorage.getItem('user')});
       this.getUser();
    }
    if(data === 'NO user FOUND'){
      this.setState({usernameerrR:'NO user FOUND:please register'});
    }
    if(data === 'wrong password'){
      this.setState({passworderrR:'wrong password'});
    }

  })
}else{
  this.setState({usernameerrR:'PROVIDE YOUR USERNAME AND PASSWORD'});
}

}

  Register=e=>{
    this.setState({register:true,login:false});
  }
  Login=e=>{
    this.setState({register:false,login:true});
  }
  handleTry= e =>{
    console.log('ok');
    alert('ok');
  }
 render(){

   return(
      <div>
          
        <React.Fragment>
        {this.state.buttons && <div className="buttons">
          <button onClick={this.Login}  className="log">Login</button>
          <button onClick={this.Register} className="log">Register</button>
          
          </div>
          }
         {this.state.login && <Login 
         pass={this.state.passworderrR}
         usern={this.state.usernameerrR}
         onUsernameChange={this.usernameHandle}
         onPasswordChange={this.passwordHandle}
         onGetdata={this.logData} />}
         {this.state.register && <Register/>}
         {this.state.home && <Home 
         userIDS={this.state.userID}
          userDatas={this.state.userData} 
          onLogout={this.logout}
         />}
        </React.Fragment>
      </div>
   )
 }
 logout=e=>{
  var states = this.state.LoginStatus;
  if(states === '1'){
    return this.setState({buttons:false,login:false,register:false,home:true});
  }else{
    return this.setState({buttons:true,login:true,register:false,home:false});
  }
 }
 getUser(){
  var states = this.state.LoginStatus;
  if(states === '1'){
    return this.setState({buttons:false,login:false,register:false,home:true});
  }else{
    return this.setState({buttons:true,login:true,register:false,home:false});
  }
  
 }
}


export default App;
