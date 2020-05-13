    import React, { Component } from 'react';
    class Section extends Component{
        constructor(props){
              super(props);
              this.state={
                   useData:[],
                  Allusers:[],
              }
              
        }
        componentDidMount(){
            const logedUser = this.state.useData.map(useData=>useData.id);
            //fetch(`http://localhost:4000/users/All?user=${this.state.item}`)
            //alert(logedUser);
        }
    
        render(){
           // const {src} = this.props.imageProfile;
            return(
                <div>
                




                <div className="head">
                    
                    <span className="emoji">
                         <i class="fa fa-search" aria-hidden="true"></i>
                         <i class="fa fa-paperclip" onClick={this.props.paperHandle} aria-hidden="true"></i>
                         <i class="fa fa-ellipsis-v" onClick={this.props.elspsisHandle} aria-hidden="true"></i>

                         </span>
                            
                        <span onClick={this.props.openHandle} className="image">
                            <img src={this.props.imageProfile} alt="" srcset=""/>
                            
                        </span>
                        <div className="stateTime">
                                     <span>{this.props.friendsName}</span>
                                       <br/>
                                     <span>last seen:1:00am</span>
                              </div> 
                        <div className="paper">

                        <div id="papercli" className="papercli">
                                <div className="round">
                                <center><div class="fa fa-picture-o" aria-hidden="true"></div></center>
                                </div>
                            <br/>
                            <div className="round"> <i className="fa fa-camera icon"></i></div>
                            <br/>
                            <div className="round"> <i className="fa fa-file icon"></i></div>
                            <br/>
                            <div className="round"> <i className="fa fa-user icon"></i></div>
                        </div>
                          
                          </div>

                        <div className="contain">
                            
                        <span id="paperclip" className="paperclip">
                              <button className="info">Info</button>
                                 <br/>
                              <button className="info">Delete chat</button>
                              <br/>
                              <button className="info">Mute</button>
                          </span>
                          
                          </div>
                    </div>


                     <div className="body">
                     
                        <div className="receiver">
                            <span className="receiverMessage">
                                receiver
        
                            </span>
                           
                        </div>

                        <div className="sender">
                            <span className="senderMessage">
                                sender
                                {this.props.friendsPhone}
                            </span>
                        </div>
                     </div>
                            
                            

                     <div className="foot">
                     <div class="form-group">
                     <span className="emojis">
                         <i class="fa fa-smile-o" aria-hidden="true"></i>
                         </span>
                        <textarea placeholder="Type message" class="form-control" rows="2" id="message"></textarea>
                        <span className="emojis">
                         <i class="fa fa-microphone" aria-hidden="true"></i>
                         </span>
                     </div>
                     </div>



                      




                </div>
            )
        }
    }
    export default Section;