import React,{useState} from 'react';
import Header from '../Header/index';
import Footer from '../footer/index';
import axios from 'axios';
import '../Signup/Signup.css';
import toast, { Toaster } from 'react-hot-toast';

function Login()
{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const formSubmit= (event)=>
    {
        event.preventDefault();
        if(!email || !password )
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
            if(password.length<=5)
            {
                toast("Password length should be greater than 5 !!", {
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
                    url: 'http://localhost:3001/userroutes/login/',
                    headers: { 
                    'Content-Type': 'application/json'
                    },
                    data : ({
                    'email': email,
                    'password': password 
                    })
                };
            
                axios(config)
                    .then(function (res) 
                    {
                        if(res.data.status==422)
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
                        else if(res.data.status===200)
                        {

                                                        
                            toast('Login Successfull !!', {
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
                            localStorage.clear();
                            localStorage.setItem('token',res.data.token);
                            window.location='/dashboard'; 
                        }
                        else
                        {
                            toast("Unexpected Error!!", {
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
                    
                        console.log(error);
                        window.location='/login';
                });
            }
            
        }
        

    }
	return(
		<>
		<Header/>
		<div style={{ background: '',backgroundSize:'cover',backgroundRepeat:'no-repeat'}} className="container login-container">
        <div className="row">
            <div className="col-md-4 offset-md-4 form  login-form">
                <form>
                    <h2 style={{color: '#5757d1',fontWeight:'bold'}} className="text-center">Login</h2>
                    <p className="text-center">Login with your email and password.</p>
                   
                     <div class="input-group mb-2">
                        <div class="input-group-prepend">
                          <div class="input-group-text"><i style={{color:'black'}} className="fa fa-envelope" aria-hidden="true"></i></div>
                        </div>
                        <input className="form-control" type="email" name="email" onChange={e=>setEmail(e.target.value)} value={email} placeholder="Email Address" required autocomplete="off"/>
                    </div>
                    
                    <br></br>
                    
                    <div className="input-group mb-2">
                        <div class="input-group-prepend">
                          <div class="input-group-text"><i style={{color:'black'}} class="fa fa-key" aria-hidden="true"></i></div>
                        </div>
                        <input className="form-control" type="password" name="password" onChange={e=>setPassword(e.target.value)} value={password} placeholder="Password" required />
                    </div>


                    <div className="link forget-pass text-right"><a href="/fpasswd">Forgot password?</a></div>
                    <div className="form-group">
                        <button onClick={formSubmit} className="form-control button">Login</button>
                    </div>
                    <div className="link login-link text-center">Not yet a member? <a href="/signup">Signup now</a></div>
                </form>
            </div>
        </div>
    </div>
    <Toaster  position="top-right" reverseOrder={false}  />
		<Footer/>
        </>

	);

}


export default Login;