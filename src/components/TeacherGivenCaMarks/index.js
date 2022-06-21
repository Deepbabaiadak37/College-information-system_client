import React , { useState } from "react";
import pic from'../images/camarks.png';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

function TeacherGivenCaMarks()
{
    const [subjects,setSubjects]=useState([])
    const [students,setStudents]=useState([])

    const [marks,setMarks]=useState("")
    const [coursename,setCoursename]=useState("")
    const [year,setYear]=useState("")
    const [dept,setDept]=useState("")
    const [exam,setExam]=useState("")
    const [sem,setSem]=useState("")
    const [email,setEmail]=useState("")

    const [sem_a,setSem_a]=useState("")
    const [sem_b,setSem_b]=useState("")
    const [sem_aval,setSem_aval]=useState("")
    const [sem_bval,setSem_bval]=useState("")

    
    var dict = 
    {

        11: "First",
        12: "Second",
        21: "Third",
        22: "Fourth",
        31: "Fifth",
        32: "Sixth",
        41: "Seventh",
        42: "Eighth"

    };
    
    const getKeyByValue=(object, value)=>{
        return Object.keys(object).find(key => object[key] === value);
    }
      
    const getValueByKey=(object,key)=>{
          return object[key];
    }

    const getIndex=(object,find_key)=>{
       
        var index=1;
        for(var key in object)
        {
           
            if(key==find_key)
                return index;
            index++;
        }
        return index;
    }

    const formSubmit= (event)=>{
      event.preventDefault();
      if(!coursename || !year || !dept || !exam || !sem || !email || !marks)
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
        if(marks>25)
        {
            toast("Max Marks 25 allowed!!", {
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
                url: 'http://localhost:3001/userroutes/camarks/add',
                headers: { 
                  'Content-Type': 'application/json'
                },
                data : ({
                  "coursename":coursename,
                  "year":year,
                  "dept" :dept,
                  "sem":sem,
                  "exam":exam,
                  "email":email,
                  "marks":marks
                })
              };
        
              axios(config)
                  .then(function (res) {
                    if(res.data.status==422)
                     {
                        toast("Marks already given !!", {
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
                        toast('Marks added Successfully !!', {
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
                        setCoursename("");
                        setYear("");
                        setDept("");
                        setSem("");
                        setEmail("");
                        setExam("");
                        setMarks("");
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

    const yearChange=(event)=>{
        
        event.preventDefault();
        setYear(event.target.value) 
        
        setSem_a(getValueByKey(dict,event.target.value+1))
        setSem_aval(getIndex(dict,getKeyByValue(dict,getValueByKey(dict,event.target.value+1))) )

        setSem_b(getValueByKey(dict,event.target.value+2))
        setSem_bval(getIndex(dict,getKeyByValue(dict,getValueByKey(dict,event.target.value+2))) )

        var config = {
            method: 'post',
            url: 'http://localhost:3001/userroutes/addcourse/getcourse',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : ({
              'year': event.target.value.toUpperCase(),
              'dept': dept.toUpperCase()
            })
          };
    
         
         if(!dept || !year)
         {
            
         }
         else{
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
         }
        


         var config = {
            method: 'post',
            url: 'http://localhost:3001/userroutes/signup/getusers',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : ({
              'year': event.target.value,
              'dept': dept.toUpperCase()
            })
          };
    
          axios(config)
              .then(function (res) {

                var arr=[];
                for(let i=0;i<res.data.length;i++)
                {
                    arr.push(res.data[i]);
                }
                setStudents(arr);
            });

        
    }

    const deptChange=(event)=>{
        setDept(event.target.value);
        
        
        var config = {
            method: 'post',
            url: 'http://localhost:3001/userroutes/addcourse/getcourse',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : ({
              'year': year.toUpperCase(),
              'dept': event.target.value.toUpperCase()
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



          var config = {
            method: 'post',
            url: 'http://localhost:3001/userroutes/signup/getusers',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : ({
              'year': year.toUpperCase(),
              'dept': event.target.value.toUpperCase()
            })
          };
    
          axios(config)
              .then(function (res) {

                var arr=[];
                for(let i=0;i<res.data.length;i++)
                {
                    arr.push(res.data[i]);
                }
                setStudents(arr);
            });
    }
   
    return(
        <>
        <h1 className="text-center">CA Marks Upload</h1>
        <Toaster  position="top-right" reverseOrder={false}  />
        <br></br>
        <div className="row">
            <div className="col-lg-6">
                <img src={pic} style={{height:'auto',width:'100%',borderRadius:'40px'}} />
            </div>

            <div className="col-lg-6">
                <form>
                    <div className="row">
                        <div className="col-lg-5 col-sm-5">
                            <div class="form-group">
                            <label for="exampleFormControlInput3">Exam</label>
                            <select  className="form-control"  onChange={e=>setExam(e.target.value)} value={exam} >
                                <option className="text-center" value="">---Select Exam---</option>
                                <option className="text-center" value="CA1">CA1</option>
                                <option className="text-center" value="CA2">CA2</option>
                                <option className="text-center" value="CA3">CA3</option>
                                <option className="text-center" value="CA4">CA4</option>
                        
                            </select>
                            </div>
                        </div>

                        <div className="col-lg-7 col-sm-7">
                            <div class="form-group">
                                <label for="exampleFormControlInput2">year</label>
                                <select  className="form-control"  onChange={yearChange} value={year} >
                                    <option className="text-center" value="0">--Select Year--</option>
                                    <option className="text-center" value="1">First Year</option>
                                    <option className="text-center" value="2">Second Year</option>
                                    <option className="text-center" value="3">Third Year</option>
                                    <option className="text-center" value="4">Fourth Year</option>
                            
                                </select>
                            </div>
                        </div>
                    </div>  {/* ---row div ends----*/}

                    <div className="row">
                        <div className="col-lg-7 col-sm-7">
                            <div class="form-group">
                                <label for="exampleFormControlInput3">dept</label>
                                <select  className="form-control"  onChange={deptChange} value={dept} >
                                    <option className="text-center" value="">---Select dept---</option>
                                    <option className="text-center" value="CSE">Computer Science And Engineering</option>
                                    <option className="text-center" value="IT">Information Technology</option>
                                    <option className="text-center" value="ECE">Electronics And Communication Engineering</option>
                                    <option className="text-center" value="EE">Electrical Engineering</option>
                                    <option className="text-center" value="ME">Mechanical Engineering</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-5 col-sm-5">
                            <div class="form-group">
                                <label for="exampleFormControlInput3">Semester</label>
                                <select  className="form-control"  onChange={e=>setSem(e.target.value)} value={sem} >
                                    <option className="text-center" value="0">--Select Semester--</option>
                                    <option className="text-center" value={sem_aval}>{sem_a}</option>
                                    <option className="text-center" value={sem_bval}>{sem_b}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    <label>Course Name</label>
                    <select  className="form-control" onChange={e=>setCoursename(e.target.value)} value={coursename}>
                        <option className="text-center" value="0">--Select Subject--</option>
                        {subjects.map(item=>(
                            <option className="text-center" value={item.coursename}>{ item.coursename.toUpperCase() }</option>
                            ))}
                
                    </select>
                    
                    <br></br>
                    <label>Select Student</label>
                    <select  className="form-control" onChange={e=>setEmail(e.target.value)} value={email}>
                        <option className="text-center" value="0" >--Select Student--</option>
                        {students.map(item=>(
                            <option className="text-center" value={item.email}>{ item.email.slice(0,item.email.length-11) }</option>
                            ))}
                
                    </select>

                    <br>
                    </br>
                    <label><h5>Enter Marks :&nbsp;</h5></label>&nbsp;<input style={{ border:'1px solid grey',padding:'8px'}} onChange={e=>setMarks(e.target.value)} value={marks} type="number" maxLength={2}/>
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

export default TeacherGivenCaMarks;