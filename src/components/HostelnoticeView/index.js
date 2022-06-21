import React from 'react';
import { Modal, Button} from 'antd';
import { Form } from 'react-bootstrap';
import axios from "axios";
import NoticeItems from './index1';

class HostelnoticeView extends React.Component
{
    
    constructor() 
    {
        super();
        this.state = 
        {
           isModalVisible : false,
            notice : "",
            test:[],
            start: 0,
            end: 5
        };

        this.config ={
            method: 'get',
            url: 'http://localhost:3001/userroutes/hostelnotice/shownotice?_start=0&_end=4',
            headers: { 'Content-Type': 'application/json' } 
        };   
    }
    
    componentDidMount()
    {
        axios(this.config).then(res=> 
        {
            this.setState({test: res.data});
            console.log(this.state.test);

        }).catch(err=>
            {
                console.log("axios error");
            });
    }


    handleSubmit = (event) => {
        event.preventDefault();

        if(this.state.notice=="")
        {
            alert("Enter Notice Field !!");
        }
        else
        {
        var config = {
            method: 'post',
            url: 'http://localhost:3001/userroutes/hostelnotice',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : ({
              'notice': this.state.notice
            })
          };
    
          axios(config)
              .then(function (res) 
              {
                if(res.data.status==200)
                    {
                        alert("Notice Added !!");
                        window.location.reload();
                    }
                        
                    else if(res.data.status==422)
                        alert(res.data.msg);
                    else
                        alert("Unexpected Error !!");
              })
          .catch(function (error) 
          {
            console.log(error)
          });

        }

        this.setState({ notice:""});
        this.setState({ isModalVisible:false}); 
    };

    setNotice=(event)=>{
        this.setState({ notice: event.target.value });
    };


    render(){
        return(
            <>
                <div><h1>Hostel Notices</h1>
                </div>
               

                <table class="table table-dark table-hover" style={{ width:'100%'}}>
                    <tbody>
                        
                        <NoticeItems name={this.state.test.slice(this.state.start , this.state.end)}/>

                           
                    </tbody>
                </table> 
                
                <button className="btn btn-success" onClick={()=> this.state.start>0 ? this.setState({ start: this.state.start-5 , end: this.state.start}) : console.log("no") }>Previous</button>
                <button className="btn btn-primary" onClick={()=> this.state.end<this.state.test.length ? this.setState({ start: this.state.end , end: this.state.end+5 }) : console.log("no") }>Next</button>
                
            
            </>
           
        )
    };
}

export default HostelnoticeView;