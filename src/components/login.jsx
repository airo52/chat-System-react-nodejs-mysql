import React, { Component} from 'react';
class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            pass:this.props.pass,
            usern:this.props.usern
        }
    }
 
    handleLogin=e=>{
       // alert('ok');
       var data = 'mimi';
       this.props.onGetdata(data);

      }
    render(){
        return(
            
            <div>
                  <div className="container">
                   <h4>Login</h4>
                   <form>
                       
                   <label>Username</label>
                   <div id="user" className="err">
                   {this.messageuser()}
                    </div>
                   <br></br>
                   <input className="form-control" onChange={this.props.onUsernameChange} type="text" placeholder="Enter username" />
                   <label className="pass">password
                   </label>
                   <div id="passh" className="err">
                   {this.messagepass()}
                    </div>
                   <br></br>
                   <input className="form-control" onChange={this.props.onPasswordChange} placeholder="Enter your password" type="password" />
                    
                   <button type="button" onClick={this.handleLogin} className="btn btn-primary login">Login</button>
                   <br/>
                   <br/>
                   <input className="check" type="checkbox"/>remember me?
                   <br/>
                   <br/>
                   <a href="none">Forgot password</a>
                   </form>
                  </div>
            </div>
        )
    }
    messageuser(){
        var passERR = document.getElementById('passh');
        var userERR = document.getElementById('user')
    
        var username = this.props.usern;
        if(username !==''){
            userERR.style.display='block';
            passERR.style.display='none';
            return username;
        }
    }
    messagepass(){
        var passERR = document.getElementById('passh');
        var userERR = document.getElementById('user')
        var pass=this.props.pass;
       //var username = this.props.usern;
        if(pass !==''){
            passERR.style.display='block';
            userERR.style.display='none';
            return pass;
        }
        
    }
}
export default Login;