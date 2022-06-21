import React, { useEffect, useState } from 'react';
import axios from 'axios';
import pic from '../images/nodata.png';
import jwt_decode from 'jwt-decode';

function StudentAttendanceView()
{
    const [details,setDetails]=useState([])


    useEffect(()=>{

        const details=jwt_decode(localStorage.getItem("token"));
        var config = {
            method: 'post',
            url: 'http://localhost:3001/userroutes/attendance/sendattendance',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : ({
              "email":details.email
            })
          };
    
          axios(config)
              .then(function (res) {
                console.log(res);
    
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

    },[]);
   
   

return(
    <>

<div class="container">
    <div className="row">

    </div>
    
        {
           details.length? (
 <div class="row">     
    <table class="table table-hover table-light">
        <thead style={{ background:'#302b63',color:'white'}}>
            <tr>
                <th scope="col">Course Name</th>
                <th scope="col">Date</th>
                <th>Attendance status</th>
            </tr>
        </thead>
           <tbody>




            {details.map(item=>(

                <tr>
                    <td>{item.coursename.toUpperCase()}</td>
                    <td>{item.date.toUpperCase()}</td>
                    <td>{item.presentstatus=="1"? (<div style={{ color:'green'}}> Present</div>):(<div style={{ color:'red'}}>Absent</div>) }</td>
                </tr>
            ))}
            
        </tbody>
        
    </table>
    </div>
           
           
           ):(
           <>
            <h1 style={{ background:'#f80759',color:'white',padding:'15px'}}>
                <img src={pic} width="60" height="60"/>
                Nothing is available to Show </h1>
           </>
           )
        }
        
</div> 




         
    </>
  );

}

export default StudentAttendanceView;

