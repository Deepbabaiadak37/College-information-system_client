import {React} from 'react';
import { DeleteOutlined} from '@ant-design/icons';
import axios from 'axios';




const NoticeItems=(props)=>
{

    const deletefunc=(id,e)=>{
       
        var config = {
            method: 'delete',
            url: 'http://localhost:3001/userroutes/admin/notice/delete',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : ({
              'id':id
            })
          };

          axios(config)
                  .then(function (res) {
                   window.location.reload();
                  })
              .catch(function (error) {
                    console.log(error);
              });
    }

    return(
        <>
       { props.name.map(item=> (
                        
                        <tr id={item._id}>
                            <td></td>
                            <td colspan="4">{item.notice}</td>
                            <td style={{ float:"right"}} colspan="1"><button onClick={deletefunc.bind(this,item._id)} className="btn btn-cus-red"><DeleteOutlined  style={{ fontSize: '22px', color: 'white' }} /> </button></td>             
                        </tr>
                        )
                    )
       }
        </>
    );
}


export default NoticeItems;