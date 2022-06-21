import React,{ useEffect, useState} from 'react';
import './style.css';
import FacultyView from '../FacultyView';
import ProfileUpdate from '../ProfileUpdate';
import Camarks from '../Camarks';
import UserStudyMaterial from '../UserStudyMaterial';
import AllotmentsView from '../AllotmentsView';
import StudentAttendanceView from '../StudentAttendanceView';
import HostelComplaint from '../HostelComplaint';
import Logo from '../images/logo3.png';
import jwtDecode from 'jwt-decode';

import { Layout, Menu,Breadcrumb} from 'antd';
import { 
         MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined,SafetyCertificateOutlined,
         VideoCameraOutlined,LogoutOutlined,ReconciliationOutlined,
         UploadOutlined,AppstoreOutlined ,InfoCircleOutlined

       } from '@ant-design/icons';
import HostelnoticeView from '../HostelnoticeView';
const { Header, Sider, Content, Footer } = Layout;


function Dashboard ()
{
  const [collapsed,setCollapsed]=useState(false);
  const [selectedMenuItem, setSelectedMenuItem]= useState('1');
  const [breadcrumb,setBreadcrumb]=useState("");
  const [name,setName]=useState("");

    useEffect(()=>{
      if(localStorage.getItem('token')!=null)
      {
        const details=(jwtDecode(localStorage.getItem('token')));
        setName(details.name.toUpperCase())
      }
      else
        window.location.href='/nf';
     
    },[])

    
     function  toggle () 
     {
       if(collapsed)
         setCollapsed(false);
       else
         setCollapsed(true); 
      }


    function handleClick(event)
    {
      
      setSelectedMenuItem(event.key);
      if(event.key==='1')
        setBreadcrumb("Profile Details");
      else if(event.key==='2')
        setBreadcrumb("Study Materials");
      else if(event.key==='3')
        setBreadcrumb("CA Marks");
      else if(event.key==='4')
        setBreadcrumb("Attendance");
      else if(event.key==='5')
        setBreadcrumb("Hostel Complaints");
      else if(event.key==='6')
        setBreadcrumb("Hostel Allotment");
      else if(event.key==='7')
        setBreadcrumb("Faculty Details");
      else if(event.key==='8')
        setBreadcrumb("Hostel Notices");
      else
        setBreadcrumb("");
    }

    function funcLogout()
    {
      localStorage.clear();
      window.location='/';
    }
    const componentsSwitch = (key) => 
    {
      switch (key) 
      {
        case '1':
          return ( <ProfileUpdate/> );
        case '2':
          return (<UserStudyMaterial/>);
        case '3':
          return (<Camarks/>);
        case '4':
          return(<StudentAttendanceView/>);
        case '5':
          return (<HostelComplaint/>);
        case '6':
          return (<AllotmentsView/>);
        case '7':
          return (<FacultyView/>)
        case '8':
          return (<HostelnoticeView/>);
        default:
          break;
      }
    };


    return ( 
              <> 
                <div>
                    <Layout>
                      <Sider trigger={null} collapsible collapsed={collapsed}>
                        
                        <div className="text-center" style={{background:'dodgerblue'}} >
                          <div style={{paddingTop:'8px',paddingBottom:'8px'}}>
                            <img src={Logo} height="73" width="74"/>
                          </div>
                        </div>


                        <Menu theme="dark" mode="inline" selectedKeys={selectedMenuItem} onClick={handleClick} >
                          
                          <Menu.Item key="1"  icon={<UserOutlined style={{ fontSize: '19px', color: '#fff' }} />}>
                            Profile Details
                          </Menu.Item>
                          
                          <Menu.Item key="2" icon={<VideoCameraOutlined style={{ fontSize: '19px', color: '#fff' }} />}>
                            Study Materials
                          </Menu.Item>
                          
                          <Menu.Item key="3" icon={ <UploadOutlined style={{ fontSize: '19px', color: '#fff' }} /> } >
                            CA Marks
                          </Menu.Item>
                          
                          <Menu.Item key="4" icon={ <AppstoreOutlined  style={{ fontSize: '19px', color: '#fff' }}/> } >
                            Attendance 
                          </Menu.Item>

                          <Menu.Item key="5" icon={<ReconciliationOutlined style={{ fontSize: '19px', color: '#fff' }} /> } >
                            Hostel Complaints
                          </Menu.Item>

                          <Menu.Item key="6" icon={<SafetyCertificateOutlined  style={{ fontSize: '19px', color: '#fff' }}/>} >
                            Hostel Allotments
                          </Menu.Item>

                          <Menu.Item key="7" icon={ <InfoCircleOutlined style={{ fontSize: '19px', color: '#fff' }}/>} >
                            Faculty Details
                          </Menu.Item>
                          
                          <Menu.Item key="8"  icon={ <InfoCircleOutlined style={{ fontSize: '19px', color: '#fff' }}/>} >
                            Hostel Notice
                          </Menu.Item>

    
                          <Menu.Item key="9"  icon={ <LogoutOutlined style={{ fontSize: '22px', color: '#f80759' }} /> }>

                            <a style={{
                              color:'#fff',
                              backgroundColor:'#f80759',
                              borderRadius:'15px',
                              padding:'8px 8px'
                            }} onClick={funcLogout}>
                              LogOut
                            </a>
                          </Menu.Item>
                        
                        </Menu>
                      </Sider>
                      <Layout className="site-layout">
                        <Header className="site-layout-background" style={{ height:'80px',padding:'5px' }}>

                          { React.createElement (collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className: 'trigger',
                                onClick: toggle,
                              })
                          }
                          <span style={{ float:'right',padding:'9px',borderRadius:'32px',marginRight:'15px',color:'#363795',fontWeight:'700'}}>
                              
                            <i style={{ color:'#363795'}} className='fa fa-user fa-lg'></i>&nbsp;&nbsp;

                            <span style={{ background:'linear-gradient(to right, #ec008c, #fc6767)',borderRadius:'18px',color:'white',padding:'8px',fontSize:'19px'}}>   {name}  </span>
                           
                          </span>
                        </Header>

                        <Content style={{ padding: '0 50px' }}>    
                          <Breadcrumb style={{ margin: '16px 0' }} >
                              <Breadcrumb.Item> Dashboard </Breadcrumb.Item>
                              <Breadcrumb.Item> {breadcrumb} </Breadcrumb.Item>
                          </Breadcrumb>

                          <div className="site-layout-content" style={{minHeight: '100vh'}}>
                            { componentsSwitch(selectedMenuItem) }
                          </div>

                        </Content>


                      </Layout>
                    </Layout>

                      <div style={{ marginTop:'0.2px'}}>
                        <Footer style={{ textAlign: 'center',backgroundColor:'rgb(44, 49, 71)',color:'white' }} >
                          Ant Design ©2018 Created by Ant UED
                        </Footer>
                      </div>
                </div>
              </>
    );
  
}

export default Dashboard;