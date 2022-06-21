import React from 'react';
import ReactLoading from 'react-loading';
  
function Preloader (){
    return  (
        <>
            <div style={{display: 'flex',backgroundColor:'#141E30',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
                <div style={{ paddingTop:'80px'}}>
                    <ReactLoading type={"bars"} color={"#f80759"} height={200} width={200}/>
                </div>
            </div>
        </>
        )
}
  
export default Preloader;