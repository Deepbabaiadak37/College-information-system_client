import React from 'react';
import './index.css';
import { Modal, Button} from 'antd';
import { Form } from 'react-bootstrap';
import axios from "axios";
import NoticeItems from './index1';
import toast, { Toaster } from 'react-hot-toast';


class NoticeManage extends React.Component
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
            url: 'http://localhost:3001/userroutes/admin/notice/shownotice?_start=0&_end=4',
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

        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes();
        var date =today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();

        if(this.state.notice=="")
        {
            toast("All Fields are Mandatory !!", {
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
            var config = {
                method: 'post',
                url: 'http://localhost:3001/userroutes/admin/notice',
                headers: { 
                  'Content-Type': 'application/json'
                },
                data : ({
                  'notice': this.state.notice,
                  'date':date,
                  'time':time
                })
              };
        
              axios(config)
                  .then(function (res) {
                    if(res.data.status==200)
                    {
                                                
                        toast('Notice Added !!', {
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
                        
                    else if(res.data.status==400)
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
                        alert("Unexpected Error !!");
                    
                  })
              .catch(function (error) {
                    console.log(error);
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
                <h1>View Notice & Add</h1>
                <Toaster  position="top-right" reverseOrder={false}  />

                <button onClick={()=>this.setState({isModalVisible:true})} className="btn btn-primary" style={{ float:'right'}}>Add</button>
                <Modal title="Notice" visible={this.state.isModalVisible} onCancel={()=>this.setState({isModalVisible:false})}  footer={[ <Button key="submit" onClick={this.handleSubmit} className="btn btn-cus" type="primary" > Submit</Button>,
                                                                                                            <Button className="btn btn-cus-red2" onClick={()=>this.setState({isModalVisible:false})}>Cancel</Button>
                    ]}>
                    <Form>
                        <Form.Control
                            as="textarea"
                            onChange={this.setNotice} value={this.state.notice} 
                            placeholder="Add Notice"
                            style={{ height: '100px' }}
                            />
                    </Form>
                </Modal>


                <table class="table table-dark table-hover" style={{ width:"80%"}}>
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

export default NoticeManage;