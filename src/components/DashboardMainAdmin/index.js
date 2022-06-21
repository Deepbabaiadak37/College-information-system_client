import React,{ useEffect, useState} from 'react';
import Logo from '../images/logo3.png';
import { Layout, Menu,Breadcrumb} from 'antd';

import { 
         MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined,SafetyCertificateOutlined,
         VideoCameraOutlined,LogoutOutlined,ReconciliationOutlined,UploadOutlined,AppstoreOutlined ,InfoCircleOutlined
       } from '@ant-design/icons';

import NoticeManage from '../NoticeManage';
import AdminTeacherManage from '../adminTeacherManage';
import FacultyView from '../FacultyView';
import AddCourse from '../AddCourse';
import ViewCourse from '../ViewCourse';
import AddNewAdminCredential from '../AddNewAdminCredential';
import ViewNewAdminCredentials from '../ViewNewAdminCredentials';
import jwtDecode from 'jwt-decode';


const { Header, Sider, Content, Footer } = Layout;
function DashboardMainAdmin ()
{
     const [collapsed,setCollapsed]=useState(false);
     const [selectedMenuItem, setSelectedMenuItem]= useState('1');
     const [breadcrumb,setBreadcrumb]=useState("");
     const [load,setLoad]=useState(false);
     const [type,setType]=useState("")
     const [user,setUser]=useState("")


      useEffect(()=>{

        if(localStorage.getItem('mainadmin-token')==null)
        {
          setLoad(false);
          window.location.href='/nf';
        }
        else
        {
          if(jwtDecode(localStorage.getItem('mainadmin-token')).type=="1")
          {
            setType("Admin")
          }
          else if(jwtDecode(localStorage.getItem('mainadmin-token')).type=="2")
          {
            setType("Faculty")
          }
          if(jwtDecode(localStorage.getItem('mainadmin-token')).type=="3")
          {
            setType("Hostel")
          }



          setUser(jwtDecode(localStorage.getItem('mainadmin-token')).email);
          setLoad(true);
        }
        
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
        setBreadcrumb("Notice Manage");
      else if(event.key==='2')
        setBreadcrumb("Faculty View");
      else if(event.key==='3')
        setBreadcrumb("Teacher Manage");
     // else if(event.key==='4')
      //  setBreadcrumb("Attendance---generate routine");
      else if(event.key==='5')
        setBreadcrumb("Add Course");
      else if(event.key==='6')
        setBreadcrumb("View Course");
      else if(event.key==='7')
        setBreadcrumb("Add Admins");
      else if(event.key==='8')
        setBreadcrumb("Manage Admins");
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
          return (<NoticeManage/>);
        case '2':
          return (<FacultyView/>);
        case '3':
          return (<AdminTeacherManage/>);
       // case '4':
        //  return (<></>);
        case '5':
          return (<AddCourse/>);
        case '6':
          return (<ViewCourse/>);
        case '7':
          return (<AddNewAdminCredential/>);
        case '8':
            return (<ViewNewAdminCredentials/>);
        default:
          break;
      }
    };


    return ( 
              <> 
              {
                load? (
                
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
                          Notice Manage
                        </Menu.Item>
                        
                        <Menu.Item key="2" icon={<VideoCameraOutlined style={{ fontSize: '19px', color: '#fff' }} />}>
                          Faculty View
                        </Menu.Item>
                        
                        <Menu.Item key="3" icon={ <UploadOutlined style={{ fontSize: '19px', color: '#fff' }} /> } >
                          Add Faculty Details
                        </Menu.Item>
                        
                   {/*     <Menu.Item key="4" icon={ <AppstoreOutlined  style={{ fontSize: '19px', color: '#fff' }}/> } >
                          Attendance Info
                        </Menu.Item>
                */}
                        <Menu.Item key="5" icon={<ReconciliationOutlined style={{ fontSize: '19px', color: '#fff' }} /> } >
                          Add Course
                        </Menu.Item>

                        <Menu.Item key="6" icon={<ReconciliationOutlined style={{ fontSize: '19px', color: '#fff' }} /> } >
                          View Course 
                        </Menu.Item>

                        <Menu.Item key="7" icon={<ReconciliationOutlined style={{ fontSize: '19px', color: '#fff' }} /> } >
                          Add Admins
                        </Menu.Item>

                        <Menu.Item key="8" icon={<ReconciliationOutlined style={{ fontSize: '19px', color: '#fff' }} /> } >
                          Manage Admins 
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
                      <Header className="site-layout-background" style={{ padding: 5 }}>

                        { React.createElement (collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                              className: 'trigger',
                              onClick: toggle,
                            })
                        }


                        <span style={{ float:'right'}}>{type} :{user} </span>

                      </Header>

                      <Content style={{ padding: '0 50px',height:'100%' }}>    
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
              
              
              
              ):(<></>)
              }
                
              </>
    );
  
}

export default DashboardMainAdmin;