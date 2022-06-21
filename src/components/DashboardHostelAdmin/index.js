import React,{ useState,useEffect} from 'react';
import Logo from '../images/logo3.png';
import { Layout, Menu,Breadcrumb} from 'antd';
import jwtDecode from 'jwt-decode';
import { 
         MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined,SafetyCertificateOutlined,
         VideoCameraOutlined,LogoutOutlined,ReconciliationOutlined,UploadOutlined,AppstoreOutlined ,InfoCircleOutlined
       } from '@ant-design/icons';
import ViewHostelComplains from '../ViewHostelComplains';
import NoticeManageHostelAdmin from '../NoticeManageHostelAdmin';
import AllotmentsAdd from '../AllotmentsAdd';
import AllotmentsView from '../AllotmentsView';


const { Header, Sider, Content, Footer } = Layout;
function DashboardHostelAdmin ()
{
     const [collapsed,setCollapsed]=useState(false);
     const [selectedMenuItem, setSelectedMenuItem]= useState('1');
     const [breadcrumb,setBreadcrumb]=useState("");
     const [load,setLoad]=useState("");
     const [type,setType]=useState("")
     const [user,setUser]=useState("")


     useEffect(()=>{
      if(localStorage.getItem('hosteladmin-token')==null)
      {
        setLoad(false);
        window.location.href='/nf';
      }
      else
      {
        if(jwtDecode(localStorage.getItem('hosteladmin-token')).type=="1")
        {
          setType("Admin")
        }
        else if(jwtDecode(localStorage.getItem('hosteladmin-token')).type=="2")
        {
          setType("Faculty")
        }
        if(jwtDecode(localStorage.getItem('hosteladmin-token')).type=="3")
        {
          setType("Hostel")
        }



        setUser(jwtDecode(localStorage.getItem('hosteladmin-token')).email);
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
        setBreadcrumb("Complains Manage");
      else if(event.key==='2')
        setBreadcrumb("Allotments Add");
      else if(event.key==='3')
        setBreadcrumb("Allotments View");
      else if(event.key==='4')
        setBreadcrumb("Hostel Notices Add");
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
          return (<ViewHostelComplains/>);
        case '2':
          return (<AllotmentsAdd/>);
        case '3':
          return (<AllotmentsView/>);
        case '4':
          return (<NoticeManageHostelAdmin/>);
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
                            Complains Manage
                          </Menu.Item>
                          
                          <Menu.Item key="2" icon={<VideoCameraOutlined style={{ fontSize: '19px', color: '#fff' }} />}>
                            Allotments Add
                          </Menu.Item>

                          <Menu.Item key="3" icon={<VideoCameraOutlined style={{ fontSize: '19px', color: '#fff' }} />}>
                            Allotments View
                          </Menu.Item>
                          
                          <Menu.Item key="4" icon={ <UploadOutlined style={{ fontSize: '19px', color: '#fff' }} /> } >
                            Hostel Notices Add
                          </Menu.Item>
                          
                          

                          

                          <Menu.Item key="8"  icon={ <LogoutOutlined style={{ fontSize: '22px', color: '#f80759' }} /> }>
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
                ) :(<></>)
              }
                
              </>
    );
  
}

export default DashboardHostelAdmin;