import React, { useEffect,useState } from "react";
import axios from 'axios';
import pic from '../images/hostelallotment.png';
import toast, { Toaster } from 'react-hot-toast';


function AllotmentsView()
{
const [details,setDetails]=useState([])
const [year,setYear]=useState("")



  function allotmentsearch()
  {
  
    if(!year)
    {
      console.log("ok")
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
        url: 'http://localhost:3001/userroutes/allotment/allotmentview',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : ({
          "year":year
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
        <div className="row">
        <Toaster  position="top-right" reverseOrder={false}  />
          <h5>Select Year</h5> &nbsp;&nbsp;&nbsp;
          <div style={{ display:'inline-block'}}>
            <div class="form-group">
                <select  className="form-control"  onChange={e=>setYear(e.target.value)} value={year} >
                    <option className="text-center" value="">--Select Year--</option>
                    <option className="text-center" value="1">1st Year</option>
                    <option className="text-center" value="2">2nd Year</option>
                    <option className="text-center" value="3">3rd Year</option>
                    <option className="text-center" value="4">4th Year</option>
          
                </select>
            </div>
          </div>

          <div style={{ display:'inline-block'}}>
          &nbsp;&nbsp;&nbsp; <button style={{ border:'none',backgroundColor:'#2F80ED',color:'white',padding:'6px',borderRadius:'6px'}} onClick={allotmentsearch}>Search</button>
          </div>
        </div>
         

         

        
      {
        details.length? (  
                  <table class="table table-hover table-dark">
                      <thead>
                          <tr class="bg-primary">
                          <th scope="col">Room No</th>
                          <th scope="col">Name</th>
                          <th scope="col">Dept</th>
                          <th scope="col">Contact</th>
                          </tr>
                      </thead>
                      <tbody>

                          {details.map(item=>(
                              <tr>
                                  <td>{item.room}</td>
                                  <td>{item.name}</td>
                                  <td>{item.dept}</td>
                                  <td>{item.contact}</td>
                              </tr>
                          ))}
                          
                      </tbody>
                  </table>
      
    ):( 
        <>
          <br></br>
          <br></br>
          <div className="d-flex justify-content-center">
            <img src={pic} width="80%"/>
          </div>
          
        </>
      )
    }

      
        </>
    );
}


export default AllotmentsView;