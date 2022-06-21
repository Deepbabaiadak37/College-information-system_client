import React , { useState } from "react";
import pic from'../images/addfaculty.png';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';


function AdminTeacherManage()
{
    const [name,setName]=useState("")
    const [contact,setContact]=useState("")
    const [email,setEmail]=useState("")
    const [address,setAddress]=useState("")
    const [type,setType]=useState("")
    const [designation,setDesignation]=useState("")

const formSubmit= (event)=>
{
      event.preventDefault();

    if(!address || !email || !contact || !name || !designation || !type )
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
        if(contact.length!=10)
            {
                toast("10 Digit Contact number required", {
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
                url: 'http://localhost:3001/userroutes/teachermanage',
                headers: { 
                  'Content-Type': 'application/json'
                },
                data : ({
                  "address": address,
                  "email":email,
                  "contact":contact,
                  "name" :name,
                  "designation":designation,
                  "type":type
                })
              };
        
              axios(config)
                  .then(function (res) {
                    if(res.data.status==200)
                    {
                        toast('Added Successfully !!', {
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
                        setName("");
                        setEmail("");
                        setContact("");
                        setName("");
                        setDesignation("");
                        setType("");
                        setAddress("");
                    }    
                    else if(res.data.status==400)
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
                        {
                            toast("Unexpected Error !!", {
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
              .catch(function (error) {
                  console.log(error)
              });
        }
    }

         
        
    }
  
   
    return(
    <>
        <h1 className="text-center">Add Faculty</h1>
        <Toaster  position="top-right" reverseOrder={false}  />
        <br></br>
        <div className="row">
            <div className="col-lg-6">
                <img src={pic} style={{height:'auto',width:'100%',borderRadius:'40px'}} />
            </div>

            <div className="col-lg-6">
                <form>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Teacher Name</label>
                        <input type="text" class="form-control" onChange={e=>setName(e.target.value)} value={name} id="exampleFormControlInput1" placeholder="Enter Name"/>
                    </div>

                    <div className="row">
                        <div className="col-md-6 col-lg-6">
                            <div class="form-group">
                                <label for="exampleFormControlInput2">Contact</label>
                                <input type="number" class="form-control" onChange={e=>setContact(e.target.value)} value={contact} id="exampleFormControlInput2" placeholder="Contact number"/>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <div class="form-group">
                                <label for="exampleFormControlInput2">Designation</label>
                                <input type="text" class="form-control" onChange={e=>setDesignation(e.target.value)} value={designation} id="exampleFormControlInput2" placeholder="Designation"/>
                            </div>
                        </div>
                    </div>
                   
                    <div class="form-group">
                        <label for="exampleFormControlInput3">Email</label>
                        <input type="text" class="form-control" onChange={e=>setEmail(e.target.value)} value={email} id="exampleFormControlInput3" placeholder="Enter Email ID"/>
                    </div>

                    <div class="form-group">
                        <label for="exampleFormControlInput3">Type</label>
                        <select className="form-control"  onChange={e=>setType(e.target.value)} value={type}>
                            <option className="text-center" value="">--select--</option>
                            <option className="text-center" value="1">Staff</option>
                            <option className="text-center" value="2">Faculty</option>
                        </select>

                    </div>

                    <div class="form-group">
                        <label for="exampleFormControlTextarea4">Address</label>
                        <textarea class="form-control" onChange={e=>setAddress(e.target.value)} value={address} id="exampleFormControlTextarea4" rows="3"></textarea>
                    </div>

                    <div>
                        <button onClick={formSubmit} className="btn btn-success">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </>
    );
}

export default AdminTeacherManage;