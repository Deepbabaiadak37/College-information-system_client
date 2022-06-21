import {React} from 'react';
import { DeleteOutlined} from '@ant-design/icons';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const NoticeItems=(props)=>
{

    const deletefunc=(id,e)=>{
       
        var config = {
            method: 'delete',
            url: 'http://localhost:3001/userroutes/hostelnotice/delete',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : ({
              'id':id
            })
          };

          axios(config)
                  .then(function (res) {
                    if(res.data.status==200)
                    {
                        toast(res.data.msg, {
                            duration: 2000,
                            position: 'top-center',
                            // Styling
                            style: {
                                padding: '20px',
                                fontWeight: '700',
                                width:'100%',
                                backgroundColor:'#00c851',
                                color:'white'
                            },
                            className: '',
                            // Custom Icon
                            icon: '✅',
                            // Change colors of success/error/loading icon
                            iconTheme: {
                              primary: '#000'
                            },
                            // Aria
                            ariaProps: {
                              role: 'status',
                              'aria-live': 'polite',
                            },
                          });
                        window.location.reload();
                    }
                    else if(res.data.status==422)
                    {
                        toast(res.data.msg, {
                            duration: 2000,
                            position: 'top-center',
                            // Styling
                            style: {
                                padding: '20px',
                                fontWeight: '700',
                                width:'100%',
                                backgroundColor:' #f80759',
                                color:'white'
                            },
                            className: '',
                            // Custom Icon
                            icon: '⚠',
                            // Change colors of success/error/loading icon
                            iconTheme: {
                              primary: '#000'
                            },
                            // Aria
                            ariaProps: {
                              role: 'status',
                              'aria-live': 'polite',
                            },
                          });

                    }
                    else
                    {
                        toast('Unexpected Error !!', {
                            duration: 2000,
                            position: 'top-center',
                            // Styling
                            style: {
                                padding: '20px',
                                fontWeight: '700',
                                width:'100%',
                                backgroundColor:' #f80759',
                                color:'white'
                            },
                            className: '',
                            // Custom Icon
                            icon: '⚠',
                            // Change colors of success/error/loading icon
                            iconTheme: {
                              primary: '#000'
                            },
                            // Aria
                            ariaProps: {
                              role: 'status',
                              'aria-live': 'polite',
                            },
                          });
                    }
                   
                  })
              .catch(function (error) {
                    console.log(error);
              });
    }


    return(
        <>
        <Toaster  position="top-right" reverseOrder={false}  />
       { props.name.map((item,index)=> (
                        
                        <tr id={item._id}>
                            <td>{index+1}</td>
                            <td colspan="1">{item.notice}</td>
                            <td style={{ float:'right'}} colspan=""><button onClick={deletefunc.bind(this,item._id)} className="btn btn-cus-red"><DeleteOutlined  style={{ fontSize: '22px', color: 'white' }} /> </button></td>             
                        </tr>
                        )
                    )
       }
        </>
    );
}


export default NoticeItems;