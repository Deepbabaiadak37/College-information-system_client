import React,{ useState,useEffect} from 'react';
import Logo from '../images/logo3.png';
import { Layout, Menu,Breadcrumb} from 'antd';

import TeacherGivenAttendance from '../TeacherGivenAttendance';
import AddStudyMaterials from '../AddStudyMaterials';
import TeacherGivenCaMarks from '../TeacherGivenCaMarks';
import jwtDecode from 'jwt-decode';
import { 
         MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined,
         VideoCameraOutlined,LogoutOutlined,UploadOutlined
       } from '@ant-design/icons';
const { Header, Sider, Content, Footer } = Layout;





function DashboardTeacherAdmin ()
{
     const [collapsed,setCollapsed]=useState(false);
     const [selectedMenuItem, setSelectedMenuItem]= useState('1');
     const [breadcrumb,setBreadcrumb]=useState("");
     const [load,setLoad]=useState(false)
     const [type,setType]=useState("")
     const [user,setUser]=useState("")


     useEffect(()=>{
      if(localStorage.getItem('teacheradmin-token')==null)
      {
        setLoad(false);
        window.location.href='/nf';
      }
      else
      {
        if(jwtDecode(localStorage.getItem('teacheradmin-token')).type=="1")
        {
          setType("Admin")
        }
        else if(jwtDecode(localStorage.getItem('teacheradmin-token')).type=="2")
        {
          setType("Faculty")
        }
        if(jwtDecode(localStorage.getItem('teacheradmin-token')).type=="3")
        {
          setType("Hostel")
        }



        setUser(jwtDecode(localStorage.getItem('teacheradmin-token')).email);
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
        setBreadcrumb("CA Marks");
      else if(event.key==='2')
        setBreadcrumb("Attendance");
      else if(event.key==='3')
        setBreadcrumb("Study Materials");
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
          return (<TeacherGivenCaMarks/>);
        case '2':
          return (<TeacherGivenAttendance/>);
        case '3':
          return (<AddStudyMaterials/>);
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
                            CA Marks
                          </Menu.Item>

                          <Menu.Item key="2" icon={<VideoCameraOutlined style={{   fontSize: '19px', color: '#fff' }}/>     }>
                            Attendance
                          </Menu.Item>

                          <Menu.Item key="3" icon={ <UploadOutlined style={{ fontSize: '19px', color: '#fff' }} />        }>
                            Study Materials
                          </Menu.Item>
        
                          <Menu.Item key="8"  icon={ <LogoutOutlined style={{ fontSize: '22px', color: '#f80759' }} />}>
                            <a style={{
                                        color:'#fff',
                                        backgroundColor:'#f80759',
                                        borderRadius:'15px',
                                        padding:'8px 8px'
                                      }}                        onClick={funcLogout}>
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

export default DashboardTeacherAdmin;