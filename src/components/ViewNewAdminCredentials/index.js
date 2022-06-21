import React, { useRef, useState } from "react";
import axios from "axios";
import admin_image from '../images/admins.png';
import toast, { Toaster } from 'react-hot-toast';


function ViewNewAdminCredentials()
{
    const [type,setType]=useState("")
    const [details,setDetails]=useState([])
    const [modalvisible,setModalvisible]=useState(false)
    const [password,setPassword]=useState("")
    const ref=useRef()

    const changeType=(event)=>{
        event.preventDefault();
        setType(event.target.value);

        var config = {
            method: 'post',
            url: 'http://localhost:3001/userroutes/admin/getadmins',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : ({
              "type": event.target.value
            })
          };
    
          axios(config)
              .then(function (res) {
                if(res.data.length===0)
                {
                    toast("No data available !!", {
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
                var arr=[];
                for(let i=0;i<res.data.length;i++)
                {
                    arr.push(res.data[i]);
                }
                
                setDetails(arr);
              })
          .catch(function (error) {
              console.log(error);
          });
      

    }

    const deletefunc=(id,e)=>
    {
        var config = {
            method: 'delete',
            url: 'http://localhost:3001/userroutes/admin/deleteadmin',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : ({
              "_id":id
            })
          };
    
          axios(config)
            .then(function (res) { 
                if(res.status==200)
                {
                    toast('Admin data deleted Successfully !!', {
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
                }   
                var config = {
                    method: 'post',
                    url: 'http://localhost:3001/userroutes/admin/getadmins',
                    headers: { 
                      'Content-Type': 'application/json'
                    },
                    data : ({
                      "type": type
                    })
                  };
            
                  axios(config)
                      .then(function (res) {
                        if(res.data.length===0)
                        {
                            toast("No data available!!", {
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
                        var arr=[];
                        for(let i=0;i<res.data.length;i++)
                        {
                            arr.push(res.data[i]);
                        }
                        
                        setDetails(arr);
                      })
                  .catch(function (error) {
                      console.log(error);
                  }); 
            })
            .catch(function (error) {
                console.log(error)
            });

    }

    const submitNewPassword=(id,e)=>{
        e.preventDefault();
        console.log(document.getElementById(id).value)
        if(document.getElementById(id).value!="")
        {
            if(document.getElementById(id).value.length<=5)
            {
                toast("Password Length should be greater than 5 !!", {
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
                    url: 'http://localhost:3001/userroutes/admin/changepassword',
                    headers: { 
                    'Content-Type': 'application/json'
                    },
                    data : ({
                    "_id":        id,
                    "password":   document.getElementById(id).value
                    })
                };
            
                axios(config)
                    .then(function (res) { 
                        if(res.status==200)
                        {
                            toast('Password Changed successfully !!', {
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
                        }
                            
                    })
                    .catch(function (error) 
                    {
                        alert(error)
                });
            }
        }
        else
        {
            toast("Enter  Password !!", {
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

        document.getElementById(id).value="";
    }

    


    return (
        <>
            <div className="container">
            <div className="row">
            <Toaster  position="top-right" reverseOrder={false}  />
                <div className="col-md-6 col-lg-6">
                    <h3 className="d-flex justify-content-center">Search Admin's Details & Credentials</h3>
                </div>
                    
                <div className="col-md-6 col-lg-6"> 
                    <select className="form-control" onChange={changeType} value={type}>
                        <option className="text-center" value="">--Select Your Admin Type--</option>    
                        <option className="text-center" value="1">Main Admin</option>
                        <option className="text-center" value="2">Teachers</option>
                        <option className="text-center" value="3">Hostel Admin</option>
                    </select>
                </div>
               
            </div>
            </div>
            


            <br></br>

            {
                details.length? (
                    <div className=" d-flex justify-content-center">
                    <table class="table table-hover table-dark" >
                    <tbody>
                        {
                            details.map((item,index)=>(
                                <>
                                <tr>
                                    <th scope="row">{   index+1             }</th>
                                    <td>{               item.email          }</td>
                                    <td><input  id={item._id}  onChange={(e)=>setPassword(e.target.value)} style={{ padding:'4px',border:'none',borderRadius:'13px',color:'black'}} type="password"  placeholder="new password"/>&nbsp;<button style={{ border:'none',padding:'5px',background:'#ff0084',color:'white',borderRadius:'18px'}} onClick={submitNewPassword.bind(this,item._id)}>change password</button></td>

                                    
                                    <td onClick={deletefunc.bind(this,item._id)}><img src="https://cdn-icons-png.flaticon.com/128/812/812853.png" style={{ color:'red'}} width="25" height="25" /></td>
        
                                </tr>

                                </>
        
                            ))
                        }
                        
        
                        
                    </tbody>
                    </table>
                    </div>

                ):(
                    <>
                    <div className="container">
                    <br></br>
                        <div className="row d-flex justify-content-center">
                        
                            <img src={admin_image} width="50%" height="500"/>
                   
                        </div>
                    </div>
                    </>
                )
            }
           
        </>
    )
}


export default ViewNewAdminCredentials;