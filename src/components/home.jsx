import React, { Component} from 'react';
import Section from './section';
import axios from 'axios';
import Logo from './logo';
class Home extends Component{
    constructor(props){
        super(props);
    this.state={
        logedUser:[],
        User:[],
        rightNavImage:'',
        Section:false,
        logo:true,
        selectedUserImageName:"",
        selectedUserName:"",
        selectedUserPhone:"",
    }
}


setHandle=e=>{
    localStorage.clear();
    window.location.reload(false);
}

 statChat =(param,param1,username)=>e=>{
     //retrieve all the selected user details using the param phone number 
     console.log(param);
     console.log(param1)
     var friendName=username; 
     var friendsPhone=param;
   // alert(friendsPhone);
    var FriendImage=param1;
    this.setState({selectedUserImageName:FriendImage,
        selectedUserName:friendName,
        selectedUserPhone:friendsPhone
    });
    this.setState({Section:true,logo:false});
   
    

    
 }
 componentDidMount(){
     this.setState({logedUser:this.props.userDatas});
     //const logedUser = this.props.userDatas;
     const userR= this.props.userIDS;
  
  axios({
    method:'GET',
    url:`http://localhost:5000/chat/users?name=${userR}`,
  })
  .then((response)=>{
    const data = response.data;
     this.setState({User:data})
  })
  
     
 }

 componentDidUpdate(){
  //console.log(this.state.User);
   
     
 }
 
 
 
handleEllipsis =e=>{
        var papercli = document.getElementById('papercli');
        var paperclip = document.getElementById('paperclip');
       if(paperclip.style.width==="150px"){
        paperclip.style.width="0px";
        paperclip.style.height="0px";
        
       }else{
        paperclip.style.width="150px";
        paperclip.style.height="200px";
        papercli.style.width="0px";
        papercli.style.height="0px";
        
       }
}
handlePaper = e =>{
        var paperclip = document.getElementById('paperclip');
        var papercli = document.getElementById('papercli');
       if(papercli.style.width==="150px"){
        papercli.style.width="0px";
        papercli.style.height="0px";
        
       }else{
        papercli.style.width="150px";
        papercli.style.height="260px";
        paperclip.style.width="0px";
        paperclip.style.height="0px";
        
       }
    }
    handleOpenPaper = e =>{
        var papercli = document.getElementById('paperclif');
        if(papercli.style.width==="150px"){
         papercli.style.width="0px";
         papercli.style.height="0px";
         
        }else{
         papercli.style.width="150px";
         papercli.style.height="260px";
         
         
        } 
    }
    handleOpen= e =>{
        document.getElementById('rightNav').style.width="30%";
        this.setState({rightNavImage:require('../images/test.jpg')})
    }
    handleClose= e =>{
        document.getElementById('rightNav').style.width="0%";
    }
    renderUser = ({avatar})=><span className="image"><img src={avatar}></img></span>;
    allUsers = ({username,phone,avatar})=><div className="userProfile">
                      
             <button onClick={this.statChat(phone,avatar,username)} className="userPrbtn">
        
           <span className="image">
           <img src={avatar} alt="avatar" srcset=""/>
        <input type="hidden" id="imagE" value={avatar}></input>
           </span>
        <span id="namE" className="userName">
                {username}
            
        </span> 
        <span className="badge">3</span> 
    </button>  
  </div>;  
    
    render(){
                const {logedUser}=this.state;
                 const {User} = this.state;
                //LOGEDuserPHONE =({avatar})=><span className="image"><img src={avatar}></img></span>;
                
        
        return(
            <div>
                <React.Fragment>
                <div className="sideNav">

                    <div>
                
                     <div className="sideHead">
                     <i class="fa fa-ellipsis-v" onClick={this.handleOpenPaper} aria-hidden="true"></i>
                     <i class="fa fa-envelope" aria-hidden="true"></i>
                     <div>{logedUser.map(this.renderUser)}</div>
                     
                        
                     </div>
                     
                     <div className="contaiN">
                            
                        <span id="paperclif" className="paperclif">
                              <button className="info">Seatings</button>
                                 <br/>
                              <button className="info">New group</button>
                              <br/>
                              <button className="info">new chat</button>
                              <br/>
                              <button onClick={this.setHandle} className="info">Logout</button>


                          </span>
                          
                          </div>
                     <input type="search" class="form-control search" placeholder="serach for friend"/>
                     </div>  

                     {/* users profiles*/}
                       {User.map(this.allUsers)}



                </div>
                       

                     <div id="rightNav" className="rightNav">
                            <span onClick={this.handleClose} className="close">&times;</span>
                              
                             <span className="imagee">
                            <img src={this.state.rightNavImage} alt="avatar" srcset=""/>
                             </span>
                              <br/><br/><br/><br/><br/><br/>
                               <div>
                                  <table>
                                      <tr>
                                          <td>
                                              james
                                          </td>
                                      </tr>
                                      <tr>
                                          <td className="timeC">
                                              lastseen <span className="time">12:00pm</span>
                                          </td>
                                      </tr>
                                         
                                       <button className="profileBtn">mute</button> <button className="profileBtn">block</button>
                                  </table>
                               </div>
                    </div>


                  <div className="section">
                  
                   {this.state.Section &&  <Section
                   paperHandle={this.handlePaper}
                   elspsisHandle={this.handleEllipsis}
                   openHandle={this.handleOpen}
                   imageProfile={this.state.selectedUserImageName}
                   friendsPhone={this.state.selectedUserPhone}
                   friendsName={this.state.selectedUserName}
                   />
                }
                     {this.state.logo && <Logo/>}
                  </div>
                  </React.Fragment>
            </div>
        )
    }
    user(user){
        return user;
     }
    
}
export default Home;