import React , { useState } from "react";
import pic from'../images/a5.png';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

function HostelComplaint()
{
    const [name,setName]=useState("")
    const [contact,setContact]=useState("")
    const [roomno,setRoomno]=useState("")
    const [details,setDetails]=useState("")

    const formSubmit= (event)=>{
      event.preventDefault();
        if(!name || !contact || !roomno || !details)
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
            if(contact.length!=10)
            {
                toast("Enter 10 Digit Contact !!", {
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
                    url: 'http://localhost:3001/userroutes/hostelcomplain',
                    headers: { 
                      'Content-Type': 'application/json'
                    },
                    data : ({
                      "details": details,
                      "roomno":roomno,
                      "contact":contact,
                      "name" :name
                    })
                  };
            
                  axios(config).then(function (res) {
                    toast('Complain Added Successfully!!', {
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
                        setName("");
                        setContact("");
                        setRoomno("");
                        setDetails("");
                      })
                  .catch(function (error) {
                      console.log(error)
                  });
            }
        }
    }
  
   
    return(
        <>
        <h1 className="text-center">Hostel Complain Form</h1>
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

                    <div class="form-group">
                        <label for="exampleFormControlInput2">Contact</label>
                        <input type="number" class="form-control" onChange={e=>setContact(e.target.value)} value={contact} id="exampleFormControlInput2" placeholder="Contact number"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput3">Room No</label>
                        <input type="text" class="form-control" onChange={e=>setRoomno(e.target.value)} value={roomno} id="exampleFormControlInput3" placeholder="Room No"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea4">Enter Your Complain:</label>
                        <textarea class="form-control" onChange={e=>setDetails(e.target.value)} value={details} id="exampleFormControlTextarea4" rows="3"></textarea>
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

export default HostelComplaint;