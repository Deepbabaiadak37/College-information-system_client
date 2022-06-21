import React, { useState } from 'react';
import Header from '../Header/index';
import Footer from '../footer/index';
import '../Signup/Signup.css';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import toast, { Toaster } from 'react-hot-toast';

function Admin()
{
    const [password,setPassword]=useState("");
    const [type,setType]=useState("");
    const [email,setEmail]=useState("");

    const submit=(event)=>{
        event.preventDefault();
        if(!password || !type || !email)
        {
            toast("All Fields are Mandatory !!", {
                duration: 2000,
                position: 'top-center',
                // Styling
                style: {
                    padding: '20px',
                    fontWeight: '700',
                    width:'100%',
                    backgroundColor:' #f80759',
                    color:'white'
                },
                className: '',
                // Custom Icon
                icon: '⚠',
                // Change colors of success/error/loading icon
                iconTheme: {
                  primary: '#000'
                },
                // Aria
                ariaProps: {
                  role: 'status',
                  'aria-live': 'polite',
                },
              });
        }
        else
        {
            var config = {
                method: 'post',
                url: 'http://localhost:3001/userroutes/admin/',
                headers: { 
                'Content-Type': 'application/json'
                },
                data : ({
                'email': email,
                'type': type ,
                "password":password
                })
            };
        
            axios(config)
                .then(function (res) 
                {
                    if(res.data.status==400)
                    {
                        toast(res.data.msg, {
                            duration: 2000,
                            position: 'top-center',
                            // Styling
                            style: {
                                padding: '20px',
                                fontWeight: '700',
                                width:'100%',
                                backgroundColor:' #f80759',
                                color:'white'
                            },
                            className: '',
                            // Custom Icon
                            icon: '⚠',
                            // Change colors of success/error/loading icon
                            iconTheme: {
                              primary: '#000'
                            },
                            // Aria
                            ariaProps: {
                              role: 'status',
                              'aria-live': 'polite',
                            },
                          });
                    }
                    else if(res.data.status==401)
                    {
                        toast(res.data.msg, {
                            duration: 2000,
                            position: 'top-center',
                            // Styling
                            style: {
                                padding: '20px',
                                fontWeight: '700',
                                width:'100%',
                                backgroundColor:' #f80759',
                                color:'white'
                            },
                            className: '',
                            // Custom Icon
                            icon: '⚠',
                            // Change colors of success/error/loading icon
                            iconTheme: {
                              primary: '#000'
                            },
                            // Aria
                            ariaProps: {
                              role: 'status',
                              'aria-live': 'polite',
                            },
                          });
                    }
                    else if(res.data.status==200)
                    {
                        localStorage.clear();
                        const login_det=(jwtDecode( res.data.token));
                        toast('Login Successfull  !!', {
                            duration: 2000,
                            position: 'top-center',
                            // Styling
                            style: {
                                padding: '20px',
                                fontWeight: '700',
                                width:'100%',
                                backgroundColor:'#00c851',
                                color:'white'
                            },
                            className: '',
                            // Custom Icon
                            icon: '✅',
                            // Change colors of success/error/loading icon
                            iconTheme: {
                              primary: '#000'
                            },
                            // Aria
                            ariaProps: {
                              role: 'status',
                              'aria-live': 'polite',
                            },
                          });
                
                        if(login_det.type==1)
                        {
                            localStorage.clear();
                            localStorage.setItem("mainadmin-token",res.data.token);
                            window.location='/adminmain';
                        }
                        else if(login_det.type==2)
                        {
                            localStorage.clear();
                            localStorage.setItem("teacheradmin-token",res.data.token);
                            window.location='/adminteacher';
                        }
                        else if(login_det.type==3)
                        {
                            localStorage.clear();
                            localStorage.setItem("hosteladmin-token",res.data.token);
                            window.location='/adminhostel';
                        }
                    }
                    else
                        {
                            toast('Unexpected Error !!', {
                                duration: 2000,
                                position: 'top-center',
                                // Styling
                                style: {
                                    padding: '20px',
                                    fontWeight: '700',
                                    width:'100%',
                                    backgroundColor:' #f80759',
                                    color:'white'
                                },
                                className: '',
                                // Custom Icon
                                icon: '⚠',
                                // Change colors of success/error/loading icon
                                iconTheme: {
                                  primary: '#000'
                                },
                                // Aria
                                ariaProps: {
                                  role: 'status',
                                  'aria-live': 'polite',
                                },
                              });
                        }
                    
                })
                .catch(function (error) 
                {
                        console.log(error)
                });
        }
        
    }


    return(
        <>
        <Header/>

        <div style={{ background:'',backgroundSize:'cover',backgroundRepeat:'no-repeat'}} className="container login-container">
            <div className="row">
                <div className="col-md-4 offset-md-4 form  login-form">
                    
                        <h2 style={{color: '#5757d1',fontWeight:'bold'}} className="text-center"> 
                            Admin Login
                        </h2>
                    <form>
                        <div class="input-group mb-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text"><i style={{color:'black'}} class="fa fa-envelope" aria-hidden="true"></i></div>
                            </div>
                            <input className="form-control" type="text" name="email" placeholder="Your Id" required autocomplete="off" onChange={e=>setEmail(e.target.value)} value={email}/>
                        </div>
                        <br></br>

                        <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                    <i style={{color:'black'}} className="fa fa-sort" aria-hidden="true"></i>
                                    </div>
                                </div>
                    
                                <select className="form-control" onChange={e=>setType(e.target.value)} value={type}>
                                    <option className="text-center" value="">--Select Your Admin Type--</option>    
                                    <option className="text-center" value="1">Main Admin</option>
                                    <option className="text-center" value="2">Teachers</option>
                                    <option className="text-center" value="3">Hostel Admin</option>
                                </select>
                        </div>                         
                        
                        <br></br>
                        
                        <div className="input-group mb-2">
                            <div class="input-group-prepend">
                            <div class="input-group-text"><i style={{color:'black'}} class="fa fa-key" aria-hidden="true"></i></div>
                            </div>
                            <input className="form-control" type="password" name="password" placeholder="Password" required onChange={e=>setPassword(e.target.value)} value={password}/>
                        </div>
                        <br></br>
                        <div className="form-group">
                            <button className="form-control button" onClick={submit} >Login</button>
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
        <Toaster  position="top-right" reverseOrder={false}  />
        <Footer/>
        </>

    );

}


export default Admin;