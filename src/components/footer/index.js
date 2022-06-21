import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import facebook from '../images/facebook.png';
import whatsapp from '../images/whatsapp.png';
import linkedin from '../images/linkedin.png';
import youtube from '../images/youtube.png';
import instagram from '../images/instagram.png';

function Footer(){

return (
    <MDBFooter color="stylish-color-dark" className="page-footer font-small pt-4 ">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="3">
            <h5 style={{color:'white'}} className="text-uppercase mb-4 mt-3 font-weight-bold">
            <u>CITY   OFFICE   ADDRESS</u>
            </h5>
            <p>
            IA-209, Sector-III, Salt Lake City
            </p>
            <p>Kolkata - 700097, West Bengal</p>
            <p>tpo@cemk.ac.in</p>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="3">
            <h5 style={{color:'white'}} className="text-uppercase mb-4 mt-3 font-weight-bold">
              <u>Quick Links</u>
            </h5>
            <ul className="list-unstyled">
              <li style={{ padding:'10px'}}>
                <a href="https://www.cemkolaghat.org/communication-directory/">Contact us</a>
              </li>
              <li style={{ padding:'10px'}}>
                <a href="https://www.cemkolaghat.org/anti-ragging-rules/">Anti Ragging rules</a>
              </li>
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="3">
            <h5 style={{color:'white'}} className="text-uppercase mb-4 mt-3 font-weight-bold">
              <u>College Address</u>
            </h5>
            <ul className="list-unstyled">
              <li>
                <div>College of Engineering & Management, Kolaghat</div>
              </li>
              <li>
                <div >P.O. KTPP Township, Purba Medinipur</div>
                <p>Phone: (03228) 2500600, 2494443</p>
              </li>
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="3">
            <h5 style={{color:'white'}} className="text-uppercase mb-4 mt-3 font-weight-bold">
              <u>Connect With Us</u>
            </h5>
            <ul className="list-unstyled">
              <li style={{ padding:'10px'}}>
                <a href="https://www.youtube.com/c/OfficialCEMK"><img src={youtube}  height="28" width="28"/>&nbsp;&nbsp;Youtube</a>
              </li>
              <li style={{ padding:'10px'}}>
                <a href="https://www.instagram.com/accounts/login/?next=/cemkfest_2k22/"><img src={instagram}  height="28" width="28"/>&nbsp;&nbsp;Instagram</a>
              </li>
              <li style={{ padding:'10px'}}>
                <a href="https://www.linkedin.com/school/official-cemk/"><img src={linkedin}  height="28" width="28"/>&nbsp;&nbsp;Linkedin</a>
              </li>
              <li style={{ padding:'10px'}}>
                <a href="https://www.facebook.com/OfficialCEMK"><img src={facebook}  height="28" width="28"/>&nbsp;&nbsp;Facebook</a>
              </li>
              
              <li style={{ padding:'10px'}}>
                <a href="https://api.whatsapp.com/send?phone=919609064108&app=facebook&entry_point=page_cta"><img src={whatsapp}  height="28" width="28"/>&nbsp;&nbsp;Whatsapp</a>
              </li>


            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <hr />
      <div className="text-center py-3">
        <ul className="list-unstyled list-inline mb-0">
          <li className="list-inline-item">
            <h5 style={{color:'white'}} className="mb-1">Register With College Email</h5>
          </li>
          <li className="list-inline-item">
            <a href="/signup" className="btn btn-danger btn-rounded">
              Sign up!
            </a>
          </li>
        </ul>
      </div>
      <hr />
      <div className="text-center">
        <ul className="list-unstyled list-inline">
          <li className="list-inline-item">
            <a className="btn-floating btn-lg btn-fb mx-1" href="#facebook">
              <i className="fab fa-facebook-f"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-lg btn-tw mx-1" href="#twitter">
              <i className="fab fa-twitter"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-lg btn-gplus mx-1" href="#google">
              <i className="fab fa-google-plus"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-lg btn-li mx-1" href="#linkedin">
              <i className="fab fa-linkedin-in"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-lg btn-dribbble mx-1" href="#dribble">
              <i className="fab fa-dribbble"> </i>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} College Information Website:<a href="#link">--------</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );


} 

export default Footer;