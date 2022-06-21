import React from 'react';
import {Jumbotron,Container,Form,Button,Card,Carousel,Row,Col} from 'react-bootstrap';
import './feature.css';



function Feature()
{
	return(
		<>
			     
            <div class="jumbotron jumbotron-fluid ">
            
                <div className="row">
                <div className=" col-lg-4">
                <center>
                <Card  className="card1" style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>Faculty List</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                      <Card.Text>
                        
                      </Card.Text>
                      <button  className="btn btn-warning">Visit here</button>

                    </Card.Body>
                  </Card>
                  </center>
                  </div>
                  
                <div className="col-lg-4">
                <center>
                <Card className="card2" style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>Updates</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                      <Card.Text>
                      </Card.Text>
                      <button  className="btn btn-warning">See here</button>
                    </Card.Body>
                  </Card>
                  </center>
                  </div>
                  
                  <div className="col-lg-4">
                  <center>
                <Card className="card3" style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>Remarks</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                      <Card.Text>
                      </Card.Text>
                      <button  className="btn btn-warning">Check here</button>
                    </Card.Body>
                  </Card>
                  </center>
                  </div>



              </div>
            </div>
        </>

	);

}


export default Feature;