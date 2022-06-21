import React from 'react';
import axios from "axios";
import {Card} from 'react-bootstrap';
class FacultyView extends React.Component
{
    
    constructor() 
    {
        super();
        this.state = 
        {
            staff:[],
            faculty:[]
        };

        this.config = {
          method: 'get',
          url: 'http://localhost:3001/userroutes/teachermanage/showteachers',
          headers: { 
            'Content-Type': 'application/json'
          }
        };
    }
    
    componentDidMount()
    {
        axios(this.config).then(res=> 
        {
           var staff_data=res.data.filter(function(item){
              return item.type==2;
            });

           var faculty_data=res.data.filter(function(item){
            return item.type==1;
            });

          this.setState({staff: staff_data});
          this.setState({faculty: faculty_data});

        }).catch(err=>
            {
                console.log("axios error");
            });
    }


  

    render(){
        return(
            <>
            <div className="container">
            <h1 className='d-flex justify-content-center' style={{ background:'linear-gradient(to right, #fc00ff, #00dbde)',color:'white'}}>Staff Lists</h1>
                <br></br>
              <div className="row">
               
              { this.state.staff.map(item=> (
                        <Card style={{ width: '18rem',margin:'10px' }}>
                          <Card.Body>
                          <Card.Title style={{ backgroundColor:'grey',padding:'3px',color:'white'}} className='d-flex justify-content-center'>{ item.name.toUpperCase()}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"><i>{item.designation}</i></Card.Subtitle> 
                            <Card.Subtitle className="mb-2 text-muted">
                            <i style={{ color:'black'}} class="fa fa-envelope" aria-hidden="true"></i>&nbsp;&nbsp;
                              {item.email}
                            </Card.Subtitle>
                            <Card.Text>
                            <i style={{ color:'black'}} class="fa fa-address-book" aria-hidden="true"></i> &nbsp;&nbsp;{item.contact}
                            <p><i style={{ color:'black'}} class="fa fa-map-marker" aria-hidden="true"></i> &nbsp;&nbsp;{item.address}</p>
                            </Card.Text>
                          </Card.Body>
                        </Card>



                        ))
                    }

              </div>


              <hr>
              </hr>

              <h1 className='d-flex justify-content-center' style={{ background:'linear-gradient(to right, #fc00ff, #00dbde)',color:'white'}}>Faculty Lists</h1>
                <br></br>
              <div className="row">
              { this.state.faculty.map(item=> (
                        <Card style={{ width: '18rem',margin:'10px' }}>
                          <Card.Body>
                          <Card.Title style={{ backgroundColor:'grey',padding:'3px',color:'white'}} className='d-flex justify-content-center'>{ item.name.toUpperCase()}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"><i>{item.designation}</i></Card.Subtitle> 
                            <Card.Subtitle className="mb-2 text-muted">
                            <i style={{ color:'black'}} class="fa fa-envelope" aria-hidden="true"></i>&nbsp;&nbsp;
                              {item.email}
                            </Card.Subtitle>
                            <Card.Text>
                            <i style={{ color:'black'}} class="fa fa-address-book" aria-hidden="true"></i> &nbsp;&nbsp;{item.contact}
                            <p><i style={{ color:'black'}} class="fa fa-map-marker" aria-hidden="true"></i> &nbsp;&nbsp;{item.address}</p>
                            </Card.Text>
                          </Card.Body>
                        </Card>



                        ))
                    }

              </div>
            </div>   
            </>
           
        )
    };
}

export default FacultyView;