import React, { useState } from 'react';
import './Signup.css';
import Header from '../Header/index';
import Footer from '../footer/index';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

function Signup()
{
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [year,setYear]=useState("");
  const [password,setPassword]=useState("");
  const [confirmpassword,setConfirmpassword]=useState("");
  const [dept,setDept]=useState("");

  const formSubmit= (event)=>
  {
    event.preventDefault();
    if(!name || !email || !password || !year  || !dept || !confirmpassword)
    {
      toast('All fields are mandatory!!', {
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
      const regex=new RegExp('[a-t]+[0-9]+@[c-m]+\.[a-c]+\.[i-n]{2,3}');
      console.log(regex.test(email));
      if(!regex.test(email))
      {
        toast('Email should be College Email!!', {
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
          toast('Password should be greather than length 5!!', {
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
          if(password==confirmpassword)
          {
              var config = {
                    method: 'post',
                    url: 'http://localhost:3001/userroutes/signup/',
                    headers: { 
                      'Content-Type': 'application/json'
                    },
                    data : ({
                      'username': name,
                      'email': email,
                      'year': year,
                      'password': password,
                      'dept': dept
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
          else
          {
            toast("Password Mismatch !!", {
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
        }
      }
     
        
    }
     
    
    
  
  }



return(
<>
<Header/>

 <div  className="container signup-container">
        <div className="row">
            <div className="col-md-4 offset-md-4  form signup-form">
                <h2 style={{color: '#5757d1',fontWeight:'bold'}} className="text-center">Signup</h2>
                <p className="text-center">Enter Valid Credentials</p>  
               
               
                <form>
                    <div className="row">
                      <div className="col-lg-12 col-sm-12 col-md-12 col-xs-12 form-group">
                        <input className="form-control" onChange={e=>setName(e.target.value)} value={name} type="text" name="name" placeholder="Full Name" required />
                      </div>                     
                    </div>  

                    <div className="row">
                      <div className="col-lg-7 col-sm-7 col-md-7 col-xs-12 form-group">
                          <div className="input-group mb-2">
                            <div className="input-group-prepend">
                              <div className="input-group-text"><i style={{color:'black'}} className="fa fa-envelope" aria-hidden="true"></i></div>
                            </div>
                            <input className="form-control" onChange={e=>setEmail(e.target.value)} value={email}  type="email" name="email" placeholder="Email Address" required />
                        </div>
                      </div>


                    <div className="col-lg-5 col-sm-5 col-md-5 col-xs-12 form-group">
                      <div className="input-group mb-2">
                            <div className="input-group-prepend">
                              <div className="input-group-text"><i style={{color:'black'}} className="fa fa-sort" aria-hidden="true"></i></div>
                            </div>
                   
                            <select onChange={e=>setYear(e.target.value)} value={year} className="form-control">
                              <option className="text-center" value="">--Select Your Year--</option>
                              
                              <option className="text-center" value="1">1st  Year</option>
                              <option className="text-center" value="2">2nd  Year</option>
                              <option className="text-center" value="3">3rd  Year</option>
                              <option className="text-center" value="4">4th  Year</option>
                              
                             </select>
                       </div>                         
                    </div>
                   </div>


                   <div className="form-group">
                      <div className="input-group mb-2">
                            <select onChange={e=>setDept(e.target.value)} value={dept} className="form-control">
                              <option className="text-center" value="">--Select Your Department--</option>
                              
                              <option className="text-center" value="CSE">Computer Science Engineering (CSE)</option>
                              <option className="text-center" value="ECE">Electronics and Communications Engineering (ECE)</option>
                              <option className="text-center" value="IT">Information Technology(IT)</option>
                              <option className="text-center" value="EE">Electrical Engineering (EE)</option>
                              <option className="text-center" value="ME">Mechanical Engineering (ME)</option>
                              
                             </select>
                      </div>
                    </div>


                    <div className="form-group">
                      <div className="input-group mb-2">
                          <div className="input-group-prepend">
                            <div className="input-group-text"><i style={{color:'black'}} className="fa fa-key" aria-hidden="true"></i></div>
                          </div>
                          <input className="form-control" onChange={e=>setPassword(e.target.value)} value={password} type="password" name="password" placeholder="Password" required />
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="input-group mb-2">
                          <div className="input-group-prepend">
                            <div className="input-group-text"><i style={{color:'black'}} className="fa fa-key" aria-hidden="true"></i></div>
                          </div>
                          <input className="form-control" onChange={e=>setConfirmpassword(e.target.value)} value={confirmpassword} type="password" name="cpassword" placeholder="Confirm password" required />
                      </div>
                    </div>
                    
                    <div className="form-group">
                        <button onClick={formSubmit}  className="form-control button">Submit</button>
                    </div>
                    
                    <div className="link login-link text-center">Already a member? <a href="/login">Login here</a>
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

export default Signup;

