import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { Button } from 'antd';
import Common from '../images/common2.png';
import { DownloadOutlined } from '@ant-design/icons';


function UserStudyMaterial()
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
                url: 'http://localhost:3001/userroutes/studymaterial/getstudymaterials',
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
                    console.log(res.data);
                    if(res.data.length===0)
                        {
                            toast("No Data Available !!", {
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

  
return(
    <>

<div class="container">
    <div className="row">
    <Toaster  position="top-right" reverseOrder={false}  />
                    <div class="form-group">
                        <select  className="form-control"  onChange={e=>setYear(e.target.value)} value={year} >
                            <option className="text-center" value="">--Select Year--</option>
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

                    <button style={{ background:'#FDC830',color:'white',height:'40px',border:'none',borderRadius:'10px',padding:'9px',marginLeft:'6px'}} onClick={submitfunc}>
                        Search
                    </button>
        
    </div>
    
   


        {
           details.length? (
 <div class="row">     
    <table class="table table-hover table-light">
        <thead style={{ background:'#302b63',color:'white'}}>
            <tr>
                <th scope="col">Course Name</th>
                <th scope="col">Date</th>
                <th scope="col">Details</th>
                <th scope="col">Department</th>
                <th>Attach</th>
            </tr>
        </thead>
           <tbody>




            {details.map(item=>(

                <tr>
                    <td>{item.coursename.toUpperCase()}</td>
                    <td>{item.date.toUpperCase()}</td>
                    <td>{item.about}</td>
                    <td>{item.dept}</td>
                    <td>
                        <a href={item.imageUrl} download target='_blank' shape="round" >
                            <Button type="primary" shape="round" icon={<DownloadOutlined />} size="default" >Download</Button>
                        </a>
                    </td>
                </tr>
            ))}
            
        </tbody>
        
    </table>

    
    </div>
           
           
           ):(
           <>
           <div className="text-center flex">
                <img className="cmn" src={Common}/>
            </div>
           </>
           )
        }
        
</div> 




         
    </>
  );

}

export default UserStudyMaterial;

