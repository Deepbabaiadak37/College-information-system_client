import React from 'react';
import './index.css';
import { Modal, Button} from 'antd';
import { Form } from 'react-bootstrap';
import axios from "axios";
import NoticeItems from './index1';
import toast, { Toaster } from 'react-hot-toast';

class NoticeManageHostelAdmin extends React.Component
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
            toast("Enter Notice please!!", {
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
                        toast('Notice Added Successfully !!', {
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
                        toast("Unexpected Error !!", {
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
                <div><h1>Hostel Notice Manage</h1>
                <Toaster  position="top-right" reverseOrder={false}  />
                </div>
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


                <table class="table table-dark table-hover" style={{ width:'80%'}}>
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

export default NoticeManageHostelAdmin;