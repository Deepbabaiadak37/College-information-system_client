import React, { useEffect, useState } from 'react';
import Header from '../Header/index';
import Footer from '../footer/index';
import axios from 'axios';

import './style.css';




function Notice()
{
  const [details,setDetails]=useState([])

  useEffect(()=>{
    const config ={
      method: 'get',
      url: 'http://localhost:3001/userroutes/admin/notice/shownotice',
      headers: { 'Content-Type': 'application/json' } 
    }

      axios(config).then(res=> 
        {
          console.log(res.data)
          var arr=[];
          for(var i=0;i<res.data.length;i++)
            arr.push(res.data[i])
          setDetails(arr)

      
        }).catch(err=>
            {
                console.log("axios error");
            });   
  },[])

return(
  <>
   
    <body >
    <Header/>

    <div  className='row' style={{ background:' linear-gradient(to right,#00dbde,#fc00ff)'}}>
      <div className='col-md-6 col-lg-6 p-5'>

              <h3 className='d-flex justify-content-center' style={{ color:'white'}}><div>IMPORTANT NOTICES & ANNOUNCEMENTS</div></h3>


          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner" style={{ borderRadius:'18px'}}>
                <div class="carousel-item active">
                  <img class="d-block w-100" src="https://www.cemkolaghat.org/images/Image2_web.jpg" alt="First slide" />
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="https://www.cemkolaghat.org/images/CollegeGate.png" alt="Second slide" />
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="https://www.cemkolaghat.org/images/CollegeMainBuilding.png" alt="Third slide" />
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
          </div>
      </div>



      



      <div className='col-md-6 col-lg-6'>
      <div className='container d-flex justify-content-center col-auto p-5'>
          <div className="table-responsive  " style={{ width:'70%',borderRadius:'16px'}}>
          <table class="table table-md table-light" style={{ padding:'10px',borderRadius:'16px'}}>
            
            <thead class="thead-info custom-thead" >
              <tr className="tr-cus1 col-auto" >
                <th scope="col" style={{ width:'5%',color:'white'}} ><h5 style={{ color:'white'}}>Sl</h5></th>
                <th scope="col" ><h5 style={{ color:'white'}}>Notice</h5></th>
                <th ><h5 style={{ color:'white'}}>Date </h5></th>
              </tr>
            </thead>

            <tbody style={{ borderRadius:'16px'}} className="custom-tbody">

              {details.map((item,index)=>(

                  <tr className="col-auto custom-tr" style={{ borderRadius:'16px'}}> 
                    <td scope="row" style={{ color:'black'}}>  {index+1} </td>
                    <td style={{ color:'black'}}>{item.notice}</td>
                    <td >{item.date}
                      <p>{item.time}</p>
                    </td>
                  </tr> 
              ))}
                

            </tbody>

          </table>
          </div>
      </div>
      </div>
    </div>
    </body>
   
      
  
    <Footer/>
  </>

  );

}

export default Notice;

