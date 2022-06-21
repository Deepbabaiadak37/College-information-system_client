import React , { useState } from "react";
import pic from'../images/addcourse.png';
import axios from 'axios';

import toast, { Toaster } from 'react-hot-toast';




function AddCourse()
{
    const [coursecode,setCoursecode]=useState("")
    const [coursename,setCoursename]=useState("")
    const [year,setYear]=useState("")
    const [dept,setDept]=useState("")

    const formSubmit= (event)=>
    {
      event.preventDefault();
      
      if(!coursecode || !coursename || !year || !dept)
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
            url: 'http://localhost:3001/userroutes/addcourse',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : ({
              "coursecode": coursecode,
              "coursename":coursename,
              "year":year,
              "dept" :dept
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
                    setCoursecode("");
                    setCoursename("");
                    setYear("");
                    setDept("");

                }    
                else 
                {
                    toast("Error Occurred!!", {
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
  
   
    return(
        <>
        <h1 className="text-center">Add New Course</h1><Toaster  position="top-right" reverseOrder={false}  />
        <br></br>
        <div className="row">
            <div className="col-lg-6">
                <img src={pic} style={{height:'auto',width:'100%',borderRadius:'40px'}} />
            </div>

            <div className="col-lg-6">
                <form>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Course Name</label>
                        <input type="text" class="form-control" onChange={e=>setCoursename(e.target.value)} value={coursename} id="exampleFormControlInput1" placeholder="Enter course Name"/>
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
                    <div class="form-group">
                        <label for="exampleFormControlTextarea4">Course Code</label>
                        <textarea class="form-control" onChange={e=>setCoursecode(e.target.value)} value={coursecode} id="exampleFormControlTextarea4" rows="1"></textarea>
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

export default AddCourse;