import React from 'react';
import {CardGroup,Card,Button} from 'react-bootstrap';
import './card.css';


function Card_comp()
{
	return(

<>
<div className="cardbody">


    <div className="col-auto text-center"><h1 style={{ color:'white'}}>- Choose Your Stream -</h1></div>
	<div className="row">
    
    <div className="col-lg-4">
      <Card style={{ margin:'10px',borderRadius: '12px'}}>
        <Card.Body>
          <Card.Title style={{ background:'#FF0080',color:'white',borderRadius:'8px'}} className="text-center">EE</Card.Title>
          <center><Button>View</Button></center>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    
    
    </div>

    <div className="col-lg-4">
      <Card style={{ margin:'10px',borderRadius: '12px'}}>
        <Card.Body>
          <Card.Title style={{ background:'#6dd5ed',color:'white',borderRadius:'8px'}} className="text-center">CSE</Card.Title>
          <center><a className="btn btn-primary" href='/study/cse'>View</a></center>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    
    
    </div>

    <div className="col-lg-4">
      <Card style={{ margin:'10px',borderRadius: '12px'}}>
        <Card.Body>
          <Card.Title style={{ background:'#f12711',color:'white',borderRadius:'8px'}} className="text-center">IT</Card.Title>
          <center><Button>View</Button></center>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    
    
    </div>

    <div className="col-lg-4">
      <Card style={{ margin:'10px',borderRadius: '12px'}}>
        <Card.Body>
          <Card.Title style={{ background:'#FDC830',color:'white',borderRadius:'8px'}} className="text-center">AEIE</Card.Title>
          
          <center><Button>View</Button></center>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>

      
    </div>

    <div className="col-lg-4">
      <Card style={{ margin:'10px',borderRadius: '12px'}}>
        <Card.Body>
          <Card.Title style={{ background:'#a8e063',color:'white',borderRadius:'8px'}} className="text-center">ECE</Card.Title>
          
          <center><Button>View</Button></center>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>

      </div>
      <div className="col-lg-4">
      <Card style={{ margin:'10px',borderRadius: '12px'}}>
        <Card.Body>
          <Card.Title style={{ background:'#a044ff',color:'white',borderRadius:'8px'}} className="text-center">BASICS</Card.Title>
          
          <center><Button>View</Button></center>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      </div>
    
  </div>



<br></br>
<br></br>

</div>

</>

		);
}



export default Card_comp;