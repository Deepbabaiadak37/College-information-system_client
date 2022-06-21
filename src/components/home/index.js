import React,{ useState,useEffect }  from 'react';
import Header from '../Header/index';
//import Card_comp from '../Card/index';
import Feature from '../Feature/index';
import About from '../About/about';
import Contact from '../Contact/contact';
import Footer from '../footer/index';
import {} from 'react-bootstrap';
import Preloader from '../preloader/index';
import './home.css';


function Home (){

const [done,setDone]=useState(undefined);

      useEffect(()=>{
          setTimeout(()=>{
              setDone(true);
          },1500);

      },[]);


    return (

      !done ? (<Preloader />)  :
      (
        <>
            <Header/>  
            
            <div className="container mb-5" > 
              <img className="clg-pic" />
              <div className="row" >
              <div className="content">
                <center>
                  <h1 className="new-h1">College Of Engineering & Management ,Kolaghat</h1>
                  <p>Kolaghat,Thermal Power Plant ,Township,</p>
                  <p>Kolaghat WestBengal-721171</p>
                </center>
              </div>
              </div>
            </div>
            
            <About/>
            <Contact/>
            <Footer/>
        
        </>
      )
    );
}
  
export default Home;