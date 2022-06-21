import React , { useState } from "react";
import axios from 'axios';
import pic from '../images/studymaterial.jpg'
import toast, { Toaster } from 'react-hot-toast';
function AddStudyMaterials()
{

    const [subjects,setSubjects]=useState([])
    const [year,setYear]=useState("")
    const [dept,setDept]=useState("")
    const [date,setDate]=useState("")
    const [coursename,setCoursename]=useState("null")
    const [about,setAbout]=useState("")
    const [selectedfile,setSelectedfile]=useState(null)

const yearChange=(event)=>{
    event.preventDefault();
    setYear(event.target.value);

    if(dept)
    {
        var config = {
            method: 'post',
            url: 'http://localhost:3001/userroutes/addcourse/getcourse',
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


}

const deptChange=(event)=>{

    event.preventDefault();
    setDept(event.target.value);

    var config = {
    method: 'post',
    url: 'http://localhost:3001/userroutes/addcourse/getcourse',
    headers: { 
        'Content-Type': 'application/json'
    },
    data : ({
        'year': year,
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
    var today = new Date(),
    dte= today.getDate()+ '-' + (today.getMonth() + 1) + '-' + today.getFullYear() ;
    setDate(dte)

}

const submitForm=(event)=>{
    event.preventDefault();


    if(!date || !dept || !year || !coursename || ! about || ! selectedfile)
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
        const fd = new FormData();
        fd.append('date',date);
        fd.append('dept',dept.toUpperCase() );
        fd.append('year',year);
        fd.append('coursename',coursename);
        fd.append('about',about);
        fd.append('image',selectedfile);
      
       axios.post('http://localhost:3001/userroutes/studymaterial',fd)
           .then(res =>{
                if(res.data.status==200)
                 {
                    toast('Study Material Uploaded Successfully !!', {
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
                    window.location.reload();
                 }   
                else if(res.data.status==500) 
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
           .catch(error =>{
           console.log(error);
       })

    }
        
}
  
   
    return(
        <>
        <h1 className="text-center">Add Study Material</h1>
        <br></br>
        <Toaster  position="top-right" reverseOrder={false}  />
        <div className="row">
            <div className="col-lg-6">
                <img src={pic} style={{height:'auto',width:'100%',borderRadius:'40px'}} />
            </div>

            <div className="col-lg-6">
                <form >

                    <div class="form-group">
                        <label for="exampleFormControlInput2">Year</label>
                        <select  className="form-control"  onChange={yearChange} value={year} >
                            <option className="text-center" value="0">--Select Year--</option>
                            <option className="text-center" value="1">1st Year</option>
                            <option className="text-center" value="2">2nd Year</option>
                            <option className="text-center" value="3">3rd Year</option>
                            <option className="text-center" value="4">4th Year</option>
                    
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput3">Department</label>
                        <select  className="form-control"  onChange={deptChange} value={dept} >
                            <option className="text-center" value="">--Select dept--</option>
                            <option className="text-center" value="CSE">CSE</option>
                            <option className="text-center" value="IT">IT</option>
                            <option className="text-center" value="ECE">ECE</option>
                            <option className="text-center" value="EE">EE</option>
                            <option className="text-center" value="ME">ME</option>
                    
                        </select>
                    </div>


                    <div class="form-group">
                    <label for="exampleFormControlInput3">Subject</label>
                        <select  className="form-control" onChange={e=>setCoursename(e.target.value)} value={coursename}>
                            <option className="text-center" value="0" >--Select year and dept to select Subject--</option>
                            {subjects.map(item=>(
                                <option className="text-center" value={item.coursename}>{ item.coursename.toUpperCase() }</option>
                                ))}
                    
                        </select>
                    </div>



                    <div class="form-group">
                        <label for="exampleFormControlTextarea4"> Comment</label>
                        <textarea class="form-control"  id="exampleFormControlTextarea4" rows="3" value={about} onChange={e=>setAbout(e.target.value)}></textarea>
                    </div>
                    
                    <input type="file" onChange={e=>setSelectedfile(e.target.files[0])} placeholder="Enter files"/>

                    <br></br><br></br>
                    <div>
                        <button  className="btn btn-success" onClick={submitForm}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            
            </div>
        </>
        
    );
}

export default AddStudyMaterials;