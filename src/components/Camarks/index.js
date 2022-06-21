import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";
import 'jspdf-autotable'; 
import Logo from '../images/logo3.png';
import jwtDecode from "jwt-decode";
import axios from "axios";
import { UploadOutlined } from '@ant-design/icons';
import pic from '../images/camarksshow.png'
import toast, { Toaster } from 'react-hot-toast';

function Camarks()
{
    const [roll,setRoll]=useState("")
    const [name,setName]=useState("")
    const [sem,setSem]=useState("")
    const [exam,setExam]=useState("")
    const [showdetails,setShowdetails]=useState([])


    const deoded_details=jwtDecode( localStorage.getItem("token"));

    useEffect(()=>{
        
        setRoll(deoded_details.email.slice(0,deoded_details.email.length-11));
        setName(deoded_details.name.toUpperCase());
    },[])



    function downloadPDFWithBrowserPrint() 
    {
        const pdf=new jsPDF('l','mm','a4',true);
        pdf.addImage(Logo, 'png', 126, 10,35,35);
        pdf.autoTable({html:'#tablePrint',startY:80});
        pdf.text("NAME: ",15,74);
        pdf.text(name,40,74);
        pdf.text("ROLL: ",140,74);
        pdf.text(roll,160,74);
        pdf.text("Semester:",192,74);
        pdf.text(sem,225,74)
        pdf.save('CaMarks.pdf');
    }

    const SearchMarks=()=>{
        if(!exam || !sem)
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
                url: 'http://localhost:3001/userroutes/camarks/getmarks',
                headers: { 
                  'Content-Type': 'application/json'
                },
                data : ({
                  "sem":    sem,
                  "exam":   exam,
                  "email":  deoded_details.email
                })
              };
        
              axios(config)
                  .then(function (res) {

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
                    var sarr=[];
                    for(let i=0;i<res.data.length;i++)
                    {
                        sarr.push(res.data[i]);
                    }
                    setShowdetails(sarr);
                    
                    
                  })
              .catch(function (error) {
                  console.log(error)
              });

        }
        
    }



    return(

        <div id="main_marks" id="main_marks" >
            <Toaster  position="top-right" reverseOrder={false}  />
        <div className="row">
            <div className="col-md-5 col-lg-5">
            <div class="form-group">
                <select  className="form-control"  onChange={e=>setSem(e.target.value)}  >
                    <option className="text-center" value="0">--Select Semester--</option>
                    <option className="text-center" value="1">First Sem</option>
                    <option className="text-center" value="2">Second Sem</option>
                    <hr></hr>
                    <option className="text-center" value="3">Third Sem</option>
                    <option className="text-center" value="4">Fourth Sem</option>
                    <hr></hr>
                    <option className="text-center" value="5">Fifth Sem</option>
                    <option className="text-center" value="6">Sixth Sem</option>
                    <hr></hr>
                    <option className="text-center" value="7">Seventh Sem</option>
                    <option className="text-center" value="8">Eighth Sem</option>

                </select>
            </div>
            </div>
            <div className="col-md-5 col-lg-5">
                    <select  className="form-control"  onChange={e=>setExam(e.target.value)}  >
                        <option className="text-center" value="0">--Select Exam--</option>
                        <option className="text-center" value="CA1">CA1</option>
                        <option className="text-center" value="CA2">CA2</option>
                        <option className="text-center" value="CA3">CA3</option>
                        <option className="text-center" value="CA4">CA4</option>
                        
                    </select>
            </div>

            <div className="col-md-2 col-lg-2">
                <button style={{ border:'none',padding:'9px',backgroundColor:'#f80759',color:'white',borderRadius:'18px'}} onClick={SearchMarks}><i className="fa fa-search"></i>&nbsp;Marks</button>
            </div>
        </div>
            

           

{
    showdetails.length?(
        <>
        <div className="text-center mb-3">
                <img src={Logo} height="130" width="130"/>
            </div>

            <div className="row">
                <div className="col-auto">
                    <h5>NAME:  &nbsp;[{ name }]</h5>
                </div>
                <div className="col-auto">
                    <h5>ROLL:&nbsp;[{ roll.toUpperCase()}]</h5>
                </div>
            </div>  
        

            <table class="table table-bordered" id="tablePrint" >
            <thead class="thead-dark">
                <tr>
                <th scope="col">Sl No</th>
                <th scope="col">Subject</th>
                <th class="text-center" scope="col" colspan="3">Marks</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                        <td colspan="2"></td>

                        {
                            exam=="CA1"?(<td style={{ background:'#2980b9',color:'white'}}>CA1</td>):(<></>)
                        }
                        {
                            exam=="CA2"?(<td style={{ background:'#2980b9',color:'white'}}>CA2</td>):(<></>)
                        }
                        {
                            exam=="CA3"?(<td style={{ background:'#2980b9',color:'white'}}>CA3</td>):(<></>)
                        }
                        {
                            exam=="CA4"?(<td style={{ background:'#2980b9',color:'white'}}>CA4</td>):(<></>)
                        }
                        
                </tr>

                {showdetails.map((item,index)=>(<tr>
                    <th scope="row">{index+1}</th>
                        <td>{item.coursename}</td>
                        <td>{item.marks}</td>
                        
                </tr>
                ))}

            </tbody>
            </table>

            <button class="btn btn-success rounded" style={{float:'right'}} onClick={downloadPDFWithBrowserPrint}><UploadOutlined /> Download</button>
        
        
        </>

    ):(
        <>
            <div className="container d-flex justify-content-center">
                <img src={pic} width="80%" />
            </div>
        </>
    )
}


        
</div>
    );
}


export default Camarks;