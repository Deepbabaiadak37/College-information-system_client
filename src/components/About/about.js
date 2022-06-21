import React from 'react';
import {CardGroup,Card,Button} from 'react-bootstrap';
import about from '../images/about.jpg';
import './about.css';

function About()
{
	return(

<>
  <h1 id="ss" style={{color:'#00b4db',fontSize:'55px'}} className="text-center">About</h1>
  <center><hr className="text-center" style={{ width:'50%'}}/>
	</center>
  <div  className="row">

    <div className="col-lg-6 ">
      <div className="container">
        <img src={about} className="about-img"/>
      </div>
    </div>
    <div className="col-lg-6 mb-6">
      <div className="container">
      <h3 className="text-center sh2" style={{ color:'white'}}>College of Engineering & Management,Kolaghat</h3>
      <br></br>
       Established in September 1998, College of Engineering & Management, Kolaghat (CEMK) is an institute under the aegis of Vidyasagar Society for Integrated Learning (VSIL) - a society chaired by Shri Sobhandeb Chattopadhyay, Minister-in-charge, Department of Power & NES, Government of West Bengal.
        <p>
        An educational institute with proven track record of excellence CEMK is spread over 32 acres of land provided by the West Bengal Power Development Corporation Limited. </p><p>Located at Kolaghat in Purba Medinipur district of West Bengal within the township of Kolaghat thermal Power Station-CEMK is aesthetically landscaped and provides a serene and peaceful atmosphere.
        </p>
        <p>
        A fully residential facility, CEMK offers its student and the faculty members the perfect milieu to pursue excellence in academic and other developments.
        </p>
      </div>
    </div>
  </div>

</>

		);
}



export default About;