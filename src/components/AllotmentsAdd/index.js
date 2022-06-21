import React , { useState } from "react";
import pic from'../images/5.jpg';
import axios from 'axios';

import toast, { Toaster } from 'react-hot-toast';


function AllotmentsAdd()
{
    const [name,setName]=useState("")
    const [contact,setContact]=useState("")
    const [roomno,setRoomno]=useState("")
    const [year,setYear]=useState("")
    const [dept,setDept]=useState("")


    const formSubmit= (event)=>
    {
      event.preventDefault();
     
      if(!year || !dept || !roomno || !contact || !name)
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
          url: 'http://localhost:3001/userroutes/allotment',
          headers: { 
            'Content-Type': 'application/json'
          },
          data : ({
            "year": year,
            "dept":dept,
            "room":roomno,
            "contact":contact,
            "name" :name
          })
        };
  
        axios(config)
            .then(function (res) {
              if(res.data.status==422)
              {
                toast("Room already alloted !!", {
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
                  toast('Alloted Successfully !!', {
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
                  setYear("");
                  setDept("")
                  setRoomno("")
                  setContact("")
                  setName("")
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
        .catch(function (error) {
           console.log(error);
        });
      }  
    }
  
   
    return(
        <>
        <h1 className="text-center">Hostel Room  Allot</h1>
        <Toaster  position="top-right" reverseOrder={false}  />
        <br></br>
        <div className="row">
            <div className="col-lg-6">
                <img src={pic} style={{height:'auto',width:'100%',borderRadius:'40px'}} />
            </div>

            <div className="col-lg-6">
                <form>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Name</label>
                        <input type="text" class="form-control" onChange={e=>setName(e.target.value)} value={name} id="exampleFormControlInput1" placeholder="Enter Your Name"/>
                    </div>
                    <div className="row">
                      <div className="col-md-6 col-sm-6">
                        <div class="form-group">
                          <label for="exampleFormControlInput2">Contact</label>
                          <input type="number" class="form-control" onChange={e=>setContact(e.target.value)} value={contact} id="exampleFormControlInput2" placeholder="Contact number"/>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <div class="form-group">
                          <label for="exampleFormControlInput3">Room No</label>
                          <input type="text" class="form-control" onChange={e=>setRoomno(e.target.value)} value={roomno} id="exampleFormControlInput3" placeholder="Room No"/>
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput2">year</label>
                        <select  className="form-control"  onChange={e=>setYear(e.target.value)} value={year} >
                            <option className="text-center" value="0">--Select Year--</option>
                            <option className="text-center" value="1">1st Year</option>
                            <option className="text-center" value="2">2nd Year</option>
                            <option className="text-center" value="3">3rd Year</option>
                            <option className="text-center" value="4">4th Year</option>
                    
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput3">dept</label>
                        <select  className="form-control"  onChange={e=>setDept(e.target.value)} value={dept} >
                            <option className="text-center" value="">--Select dept--</option>
                            <option className="text-center" value="CSE">CSE</option>
                            <option className="text-center" value="IT">IT</option>
                            <option className="text-center" value="ECE">ECE</option>
                            <option className="text-center" value="EE">EE</option>
                            <option className="text-center" value="ME">ME</option>
                    
                        </select>
                    </div>

                    <div className="d-flex justify-content-center " >
                        <button style={{width:'100%'}} onClick={formSubmit} className="btn btn-success">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            
            </div>
        </>
        
    );
}

export default AllotmentsAdd;