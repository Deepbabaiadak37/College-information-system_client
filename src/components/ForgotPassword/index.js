import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../footer';
import axios from 'axios';
import './index.css';

import toast, { Toaster } from 'react-hot-toast';
import { GiConsoleController } from 'react-icons/gi';

export default function ForgotPassword()
{
    const [email,setEmail]=useState("");
    const [otp,setOtp]=useState("");
    const [visibility0,setVisibility0]=useState('visible')
    const [visibility1,setVisibility1]=useState('hidden')
    const [visibility2,setVisibility2]=useState('visible')
    const [visibility3,setVisibility3]=useState('hidden')
    const [visibility4,setVisibility4]=useState('hidden')
    const [visibility5,setVisibility5]=useState('hidden')
    const [visibility6,setVisibility6]=useState('hidden')
    const [visibility7,setVisibility7]=useState('hidden')
    const [newpass,setNewpass]=useState("")
    const [newconfpass,setNewconfpass]=useState("")


    const submitform=(event)=>{
        event.preventDefault();



     /*  
        toast('error screen!!', {
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

         
          toast('tick screen !!', {
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

        */
        var config = {
            method: 'post',
            url: 'http://localhost:3001/userroutes/forgotpssword/',
            headers: { 
            'Content-Type': 'application/json'
            },
            data:
            {
                'email':email
            }
        };
    
        axios(config).then(function (res) 
            {
                if(res.data.status==200)
                {
                    toast('OTP sent to your mail. Check !!', {
                        duration: 2500,
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
                   setVisibility1('visible')
                   setVisibility2('hidden')
                   setVisibility3('visible')
                   setVisibility0('hidden')
                   setVisibility4('visible')
                }
                else if(res.data.status==400)
                {
                    toast(res.data.msg, {
                        duration: 2500,
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
                    console.log(res)
                }
            })
            .catch(function (error) 
            {
                console.log(error);
             });

             
    }

    const submitotp=(event)=>{
        event.preventDefault();
        if(!otp)
        {
            toast('Enter OTP  !!', {
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
            if(otp.length<6 || otp.length>6)
            {
                toast('Enter 6 digit Otp !!', {
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
                //check from database with otp value 

                var config = {
                  method: 'post',
                  url: 'http://localhost:3001/userroutes/forgotpssword/matchotp',
                  headers: { 
                  'Content-Type': 'application/json'
                  },
                  data:
                  {
                      'email':email,
                      'otp':otp
                  }
              };
          
              axios(config).then(function (res) 
                  {
                      if(res.data.status==200)
                      {
                          toast(res.data.msg, {
                              duration: 2500,
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



                            setVisibility7('visible')
                            setVisibility6('visible')
                            setVisibility5('visible')
            
                            setVisibility1('hidden')
                            setVisibility2('hidden')
                            setVisibility3('hidden')
                            setVisibility0('hidden')
                            setVisibility4('hidden')

                      }
                      else if(res.data.status==422)
                      {
                          toast(res.data.msg, {
                              duration: 2500,
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
                          console.log(res)
                      }
                  })
                  .catch(function (error) 
                  {
                      console.log(error);
                   });
      
                
            }
        }
        
    }

    const changepasswd=(event)=>{
        event.preventDefault();


        if(!newpass || !newconfpass)
        {
            toast('Enter All the Fields!!', {
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
            if(newpass.length<=5)
            {
                toast('Passwords length should be greater than 5!!', {
                    duration: 2000,
                    position: 'top-center',
                    // Styling
                    style: {
                        padding: '20px',
                        fontWeight: '700',
                        width:'110%',
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
                if(newpass!=newconfpass)
                {
                    toast('Passwords are not matching!!', {
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
                    //call api and change password

                    var config = {
                      method: 'post',
                      url: 'http://localhost:3001/userroutes/forgotpssword/changepassword',
                      headers: { 
                        'Content-Type': 'application/json'
                      },
                      data : ({
                        'password': newconfpass,
                        'email': email
                      })
                    };
              
                    axios(config)
                        .then(function (res) {
                          if (res.data.status==200)
                          {
                            toast(res.data.msg, {
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
                            window.location='/login';
                          }
                          else if(res.data.status==422)
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
                          else
                            alert("Unexpected Error !!");
                            
                          
                        })
                    .catch(function (error) {
                        window.location='/signup';
                    });

      
                }
            }
           
        }

    }



    return (
        <>
        <Header/>
       
        <div className='container custom-contain' style={{  height:'600px',background:'linear-gradient(to right,#0f0c29, #302b63, #24243e)'}}>
            <div className='row '>
                    
                <div className=' d-flex justify-content--center' style={{ borderRadius:'10px',width:'fit-content' , background: 'linear-gradient(to right, #8e2de2, #4a00e0)',color:'white',marginLeft:'50%',transform:'translate(-50%)',marginTop:'50px'}}>
                    <div className='row align-items-center'>
                      <div className='col-md-6 col-lg-6'>
                          <h3 style={{ padding:'10px',marginLeft:'50%',color:'white',transform:'translate(-50%)'}}>Change Password</h3>
                          <img style={{ padding:'10px',marginLeft:'50%',transform:'translate(-50%)',color:'white'}} src='https://cdn-icons.flaticon.com/png/128/2665/premium/2665311.png?token=exp=1655225538~hmac=5fea358b97576254a4c2d6b1ec2391ab'/>
                          <br></br>
                      </div>

                      <div className='col-md-6 col-lg-6'>
                        <form className='form-group' style={{ padding:'30px'}}>
                            <input class="form-control" type="email" placeholder='Enter Your Email ' style={{ visibility :visibility0}} onChange={(e)=>setEmail(e.target.value)}/>
                            <input className='form-control' type="text" placeholder='Enter OTP' maxLength="6" onChange={(e)=>setOtp(e.target.value)} style={{ visibility :visibility4}}/>

                            <input  className='form-control' type="password" placeholder='Enter New Password'onChange={(e)=>setNewpass(e.target.value)} value={newpass} style={{ visibility :visibility5, marginBottom:'10px'}}/>               
                            <input className='form-control' type="password" placeholder='Confirm Password' onChange={(e)=>setNewconfpass(e.target.value)} value={newconfpass} style={{ visibility :visibility6}}/>
                          
                            <button id="resend-id" className='btn btn-warning' type="button" onClick={submitform} style={{ border:'none',padding:'10px',visibility: visibility1,backgroundColor: 'deeppink',color:'white' }}>Resend otp</button>
                            <button id="send-id" className='btn btn-success' onClick={submitform} style={{ visibility: visibility2 }}> Send otp</button>
                            <button className='btn btn-success' onClick={submitotp} style={{ visibility: visibility3 }}> submit</button>

                            <button className='btn btn-info' onClick={changepasswd} style={{ visibility: visibility7 }}> Change Password</button>
                        </form>
                      </div>
                    </div>
                    


                   
                    
                </div>
                
          </div>
            <Toaster  position="top-right" reverseOrder={false}  />
   
        </div>
        
        <Footer className="mt-4"/>
        </>

    );
}

