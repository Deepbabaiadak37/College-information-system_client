import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css';
import pic from '../images/nodata.png'
import toast, { Toaster } from 'react-hot-toast';


function ViewCourse()
{
    const [year,setYear]=useState("")
    const [dept,setDept]=useState("")
    const [details,setDetails]=useState([])

   
    const submitfunc=()=>{

        if(!year || !dept)
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
                url: 'http://localhost:3001/userroutes/addcourse/getcourse',
                headers: { 
                  'Content-Type': 'application/json'
                },
                data : ({
                  "year":year,
                  "dept" :dept
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
                  console.log(error)
              });
        }
    }

    const deletefunc=(id,e)=>
    {
        var config = {
            method: 'delete',
            url: 'http://localhost:3001/userroutes/addcourse/deletecourse',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : ({
              "_id":id
            })
          };
    
          axios(config)
            .then(function (res) {
                console.log(res);  
                if(res.status==200)
                {
                    toast('Course Deleted Successfully !!', {
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
                    submitfunc();
                }
                    
            })
            .catch(function (error) {
                console.log(error)
            });
    }

return(
    <>

<div class="container">
    <div className="row">
    <Toaster  position="top-right" reverseOrder={false}  />

                    <div class="form-group">
                        <select  className="form-control"  onChange={e=>setYear(e.target.value)} value={year} >
                            <option className="text-center" value="0">--Select Year--</option>
                            <option className="text-center" value="1">1st Year</option>
                            <option className="text-center" value="2">2nd Year</option>
                            <option className="text-center" value="3">3rd Year</option>
                            <option className="text-center" value="4">4th Year</option>
                    
                        </select>
                    </div>
                    <div class="form-group">
                        <select  className="form-control"  onChange={e=>setDept(e.target.value)} value={dept} >
                            <option className="text-center" value="">--Select dept--</option>
                            <option className="text-center" value="CSE">CSE</option>
                            <option className="text-center" value="IT">IT</option>
                            <option className="text-center" value="ECE">ECE</option>
                            <option className="text-center" value="EE">EE</option>
                            <option className="text-center" value="ME">ME</option>
                    
                        </select>
                    </div>

                    <button style={{ background:'#FDC830',color:'white',height:'40px',border:'none',borderRadius:'10px',padding:'9px',marginLeft:'6px'}} onClick={submitfunc}>Search</button>
        
    </div>
    
   


        {
           details.length? (
 <div class="row">     
    <table class="table table-hover table-light">
        <thead style={{ background:'#302b63',color:'white'}}>
            <tr>
            <th scope="col">Course Code</th>
            <th scope="col">Course Name</th>
            <th scope="col">Department</th>
            <th scope="col">Year</th>
            <th scope="col"></th>
            </tr>
        </thead>
           <tbody>




            {details.map(item=>(

                <tr>
                    <td>{item.coursecode.toUpperCase()}</td>
                    <td>{item.coursename.toUpperCase()}</td>
                    <td>{item.dept.toUpperCase()}</td>
                    <td>{item.year}</td>
                    <td onClick={deletefunc.bind(this,item._id)}><img src="https://cdn-icons-png.flaticon.com/128/812/812853.png" style={{ color:'red'}} width="25" height="25" /></td>
                </tr>
            ))}
            
        </tbody>
        
    </table>
    </div>
           
           
           ):(
           <>
            <h1 style={{ background:'#f80759',color:'white',padding:'15px'}}>
                <img src={pic} width="60" height="60"/>
                Nothing is available for this Seach </h1>
           </>
           )
        }
        
</div> 




         
    </>
  );

}

export default ViewCourse;

