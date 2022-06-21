import React, { useEffect, useState } from 'react';
import {Card} from 'react-bootstrap';
import './index.css';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
function TeacherGivenAttendance()
{
   
    const [day,setDay]=useState("")
    const [month,setMonth]=useState("")
    const [det,setDet]=useState([])

    const [subjects,setSubjects]=useState([])
    const [attendancesubj,setAttendancesubj]=useState("")

    const current = new Date();
    const date=current.getDate()+"-"+(current.getMonth()+1)+"-"+current.getFullYear();
    
    useEffect(()=>{
        
        if(current.getDay()==0)
            setDay("Sunday")
        else if(current.getDay()==1)
            setDay("Monday")
        else if(current.getDay()==2)
            setDay("Tuesday")
        else if(current.getDay()==3)
            setDay("Wednesday")
        else if(current.getDay()==4)
            setDay("Thursday")
        else if(current.getDay()==5)
            setDay("Friday")
        else if(current.getDay()==6)
            setDay("Saturday")


    if(current.getMonth()+1 ==1)
        setMonth("January")
    else if(current.getMonth()+1 ==2) 
        setMonth("February")
    else if(current.getMonth()+1 ==3) 
        setMonth("March")
    else if(current.getMonth()+1 ==4) 
        setMonth("April")
    else if(current.getMonth()+1 ==5) 
        setMonth("May")
    else if(current.getMonth()+1 ==6) 
        setMonth("June")
    else if(current.getMonth()+1 ==7) 
        setMonth("July")
    else if(current.getMonth()+1 ==8) 
        setMonth("August")
    else if(current.getMonth()+1 ==9) 
        setMonth("September")
    else if(current.getMonth()+1 ==10) 
        setMonth("October")
    else if(current.getMonth()+1 ==11) 
        setMonth("November")
    else if(current.getMonth()+1 ==12) 
        setMonth("December")



    },[]);
   

    const batchChange=(event)=>
    {
        event.preventDefault();

        var batch=event.target.value;
        var batch_dept=batch.slice(0,batch.length-1);
        var batch_year=batch.slice(batch.length-1,batch.length);
        setAttendancesubj("");

        var config = {
            method: 'post',
            url: 'http://localhost:3001/userroutes/signup/getusers',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : ({
              'year': batch_year,
              'dept': batch_dept.toUpperCase() 
            })
          };
    
          axios(config)
              .then(function (res) {

                var arr=[];
                for(let i=0;i<res.data.length;i++)
                {
                    arr.push(res.data[i]);
                }
                setDet(arr);

                    try {

                        var config = {
                            method: 'post',
                            url: 'http://localhost:3001/userroutes/addcourse/getcourse',
                            headers: { 
                              'Content-Type': 'application/json'
                            },
                            data : ({
                              'year': batch_year,
                              'dept': batch_dept.toUpperCase() 
                            })
                          };
                    
                          axios(config)
                              .then(function (res) {
                                var sarr=[];
                                for(let i=0;i<res.data.length;i++)
                                {
                                    sarr.push(res.data[i]);
                                }
                                setSubjects(sarr);
                              })
                          .catch(function (error) {
                              console.log(error)
                          });
                        
                    } catch (error) {
                        console.log(error)
                    }

              })
          .catch(function (error) {
              console.log(error)
          });


    }   

    const presentfunc=(em,de,ye,cn,e)=>{
        
    if(attendancesubj=="")
    {
        toast("Select Subject First!!", {
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
            url: 'http://localhost:3001/userroutes/attendance/markattendance',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : ({
              'year': ye,
              'dept': de.toUpperCase() ,
              'date' :date,
              'email':em,
              'coursename':cn,
              'presentstatus': "1",
              'absentstatus':  "0"
            })
          };
    
          axios(config)
              .then(function (res) {
               console.log(res);
               
              })
          .catch(function (error) {
            if(error.status=422)
              {
                toast("Already marked as present !!", {
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
            else if(error.status=500)
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
          });
    }
}



    const absentfunc=(em,de,ye,cn,e)=>{

        if(attendancesubj=="")
        {
            toast("Select Subject first!!", {
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
                url: 'http://localhost:3001/userroutes/attendance/markattendance',
                headers: { 
                  'Content-Type': 'application/json'
                },
                data : ({
                  'year': ye,
                  'dept': de.toUpperCase() ,
                  'date' :date,
                  'email':em,
                  'coursename':cn,
                  'presentstatus': "0",
                  'absentstatus':  "1"
                })
              };
        
              axios(config)
                  .then(function (res) {
                   console.log(res.status);
                   
                  })
              .catch(function (error) {
                if(error.status=422)
                  {
                    toast("Already marked!!", {
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
              });
        }
    }


  
return(
    <>


<div className='container'> 
<h1>Mark Attendance --Select Batch and Subject</h1>
<Toaster  position="top-right" reverseOrder={false}  />
<div className='row'>
   
    <div>
            <Card style={{ width: '18rem' ,padding:'8px'}}>
                <Card.Body>
                    <Card.Title className="d-flex justify-content-center" style={{ backgroundColor:'#4A00E0',padding:'9px',color:'white',borderRadius:'25px'}}>{day}</Card.Title>
                    <div className="mb-2 text-muted">
                        <h3 className="d-flex justify-content-center" style={{ display:'inline-block'}}>
                        <b style={{ color:'#2948ff'}}>  { current.getDate() }-  </b>  { month }-{current.getFullYear() }
                        </h3>
                        <div style={{ display:'inline-block',float:'right'}}>
                            <h3>  
                            </h3>
                        </div>
                        
                    </div>
                </Card.Body>
            </Card>
    </div>

    &nbsp;&nbsp;
    <div>
            <select  className="form-control"  onChange={batchChange} >
                <option className="text-center" value="0">--Select Batch--</option>
    <hr></hr>
                <option className="text-center" value="cse1">CSE 1st  Year</option>
                <option className="text-center" value="cse2">CSE 2nd  Year</option>
                <option className="text-center" value="cse3">CSE 3rd  Year</option>
                <option className="text-center" value="cse4">CSE 4th  Year</option>
    <hr></hr>
                <option className="text-center" value="ece1">ECE 1st  Year</option>
                <option className="text-center" value="ece2">ECE 2nd  Year</option>
                <option className="text-center" value="ece3">ECE 3rd  Year</option>
                <option className="text-center" value="ece4">ECE 4th  Year</option>
    <hr></hr>
                <option className="text-center" value="it1">IT 1st  Year</option>
                <option className="text-center" value="it2">IT 2nd  Year</option>
                <option className="text-center" value="it3">IT 3rd  Year</option>
                <option className="text-center" value="it4">IT 4th  Year</option>
    <hr></hr>       
                <option className="text-center" value="ee1">EE 1st  Year</option>
                <option className="text-center" value="ee2">EE 2nd  Year</option>
                <option className="text-center" value="ee3">EE 3rd  Year</option>
                <option className="text-center" value="ee4">EE 4th  Year</option>   
            </select>

    </div>
    &nbsp;&nbsp;
    <div>
            <select  className="form-control" onChange={e=>setAttendancesubj(e.target.value)}>
                <option className="text-center" value="0">--Select Subject--</option>
                {subjects.map(item=>(
                    <option className="text-center" value={item.coursename}>{ item.coursename.toUpperCase() }</option>
                    ))}
        
            </select>
    </div>
</div>
</div>
<br></br>

<div class="container">
    <div class="row">
    <table class="table table-hover table-dark">
  <thead>
    <tr>
      <th scope="col">email</th>
      <th scope="col">name</th>
      <th scope="col">roll</th>
      <th scope="col">Dept</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
      {det.map(item=>(

          <tr>
              <td>{item.email}</td>
              <td>{item.username}</td>
              <td>{item.email.slice(0,item.email.length-11)}</td>
              <td>{item.dept}</td>
              <td>
                <button className="btn btn-primary" onClick={presentfunc.bind(this,item.email,item.dept,item.year,attendancesubj)}>
                    present
                </button>
              </td>
              <td>
                <button className="btn btn-primary" onClick={absentfunc.bind(this,item.email,item.dept,item.year,attendancesubj)}>
                    absent
                </button>
              </td>
          </tr>
    ))}
    
  </tbody>
</table>
    </div>
</div> 




         
    </>
  );

}

export default TeacherGivenAttendance;



//date,dept,year,email,subject

