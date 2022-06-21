import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';


function ViewHostelComplains()
{
  const [details,setDetails]=useState([])
    useEffect(()=>{
        
          axios.get('http://localhost:3001/userroutes/hostelcomplain/showcomplains')
          .then(res => {
            
             
              var arr=[];
              for(let i=0;i<res.data.length;i++)
              {
                  arr.push(res.data[i]);
              }
              
              setDetails(arr);
            
            });
    },[])
    

    const deleteNotice=(id,e)=>
  {

      var config = {
        method: 'post',
        url: 'http://localhost:3001/userroutes/hostelcomplain/deletecomplain',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : ({
          "id":id
        })
      };

      axios(config)
        .then(function (res) {
           
          toast('Deleted Successfully !!', {
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
            
            axios.get('http://localhost:3001/userroutes/hostelcomplain/showcomplains')
            .then(res => {
             
                var arr=[];
                for(let i=0;i<res.data.length;i++)
                {
                    arr.push(res.data[i]);
                }
                
                setDetails(arr);
              
              });
            
                
        })
        .catch(function (error) {
            console.log(error)
        });
    }


    const markingDone=(id,e)=>
    {
        var config = {
            method: 'post',
            url: 'http://localhost:3001/userroutes/hostelcomplain/markdonecomplain',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : ({
              "id":id
            })
          };
    
          axios(config)
            .then(function (res) {
                console.log(res); 
                
                axios.get('http://localhost:3001/userroutes/hostelcomplain/showcomplains')
                .then(res => {
                  
                    console.log(res)
                    var arr=[];
                    for(let i=0;i<res.data.length;i++)
                    {
                        arr.push(res.data[i]);
                    }
                    
                    setDetails(arr);
                  
                  });
                
                    
            })
            .catch(function (error) {
                console.log(error)
            });
    }


return(
  <>
  <Toaster  position="top-right" reverseOrder={false}  />
      {   details.length? (  
                  <table class="table table-hover table-dark">
                      <thead>
                          <tr class="bg-primary">
                          <th scope="col">Room No</th>
                          <th scope="col">Name</th>
                          <th scope="col">Details</th>
                          <th scope="col">Contact</th>
                          <th></th>
                          <th></th>
                          </tr>
                      </thead>
                      <tbody>

                          {details.map(item=>(
                              <tr>
                                  <td>{ item.roomno }</td>
                                  <td>{ item.name }</td>
                                  <td>{ item.details  }</td>
                                  <td>{ item.contact }</td>

                                  { item.complainstate ? (
                                    <>
                                     <td><button style={{ backgroundColor:'#757F9A',border:'none',padding:'8px',borderRadius:'5px'}} disabled>Marked</button></td>
                                     <td><button style={{ backgroundColor:'#ff4b2b',border:'none',padding:'8px',borderRadius:'5px'}}  onClick={deleteNotice.bind(this,item._id)}><i className="fa fa-trash"> delete </i></button></td>
                                    </>
                                   
                                  ):(
                                    <td><button style={{ backgroundColor:'#007991',border:'none',padding:'8px',borderRadius:'5px'}} onClick={markingDone.bind(this,item._id)}>Mark Done</button></td>

                                  ) }
                                  
                              </tr>
                          ))}
                          
                      </tbody>
                  </table>
                ):( 
                    <>
                      <br></br>
                      <br></br>
                      <h1 style={{ color:'red'}}>No Complains Available</h1>
                    </>
                  )
        }
  </>
);

}

export default ViewHostelComplains;

