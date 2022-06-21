import React, { useState } from "react";
import "./header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from '../images/logo3.png';

const Header = () => {
  
  const Brand= "C E M K";
  const [showIcons, setShowIcons] = useState(false);
  return (
    <>
      <nav className="main-nav" style={{marginBottom:'2px'}}>
       
        <div style={{ width: 'fit-content',borderRadius: '73px',paddingLeft:'5px' }}>
         <img src={Logo} height="80" width="80"/>
        </div>
        
        <div className={ showIcons ? "menu-link mobile-menu-link" : "menu-link"  }>
        
          <ul>
            <li>
                <a href="/"><i  className="fa fa-home fa-sm fa-cus" ></i> Home</a>
            </li>
            <li>
                <a href="/notice"><i className="fa fa-exclamation-circle fa-sm fa-cus" aria-hidden="true"></i> Notices</a>
            </li>
            <li>
                <a href="/signup"><i className="fa fa-user-plus fa-sm fa-cus" aria-hidden="true"></i> SignUp</a>
            </li>
            <li>
                <a href="/login"><i  className="fa fa-user-circle fa-sm fa-cus" aria-hidden="true"></i> Login</a>
            </li>

             <li>
                <a href="/admin"><i className="fa fa-lock fa-sm fa-cus" aria-hidden="true"></i> Admin</a>
            </li>
          </ul>
        
        </div>
        
        <div className="hamburger-menu">
          <a href="#" onClick={() => setShowIcons(!showIcons)}>
            <GiHamburgerMenu />
          </a>
        </div>
      
      </nav>

    
    </>
  );
};

export default Header;