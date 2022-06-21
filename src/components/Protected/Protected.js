import React,{useEffect}  from 'react';

import {useNavigate} from 'react-router-dom';
function Protected(props) 
{
    const navigate=useNavigate();
    let Component=props.cmp;
    useEffect(() => {
        if(!localStorage.getItem("token"))
            navigate('/');
        
      },[]);

  return (
         <div>
            <Component/>
         </div>      
          
          );
}

export default Protected;
