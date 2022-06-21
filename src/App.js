import React from 'react';

import './App.css';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';

import Home from './components/home';
import Signup from './components/Signup/Signup.js';
import Login from './components/Login/Login.js';
import Protected from './components/Protected/Protected';
import Notice from './components/Notice';
import Admin from './components/Admin';
import Dashboard from './components/Dashboard';
import DashboardMainAdmin from './components/DashboardMainAdmin';
import DashboardTeacherAdmin from './components/DashboardTeacherAdmin';
import DashboardHostelAdmin from './components/DashboardHostelAdmin';
import Notfoundpage from './components/Notfoundpage';
import ForgotPassword from './components/ForgotPassword';

function App() 
{
  return (
          
          <div className="App">
            {(
              <Router>
                <Routes>
                    <Route exact path='/'          element={<Home/>}     ></Route>
                    <Route exact path='/nf'     element={<Notfoundpage/>}    ></Route>


                    <Route exact path='/signup'    element={<Signup/>}   ></Route>
                    <Route exact path='/login'     element={<Login/>}    ></Route>
                    <Route exact path='/notice'    element={<Notice/>}   ></Route>
                    <Route exact path='/admin'     element={<Admin/>}    ></Route>
                    <Route exact path='/fpasswd'    element={<ForgotPassword/>}   ></Route>
                    <Route exact path='/dashboard' element={<Dashboard/>}></Route>
                    <Route exact path='/adminmain' element={<DashboardMainAdmin/>}> </Route>
                    <Route  path='/adminteacher' element={<DashboardTeacherAdmin/>}> </Route>
                    <Route path='/adminhostel' element={<DashboardHostelAdmin/>} > </Route>
                    
                

                </Routes>
                   
              </Router> 
            )}
          </div>         
          
          );
}

export default App;
