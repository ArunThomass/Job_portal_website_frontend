import React, { useContext, useEffect } from 'react';
import './App.css'
import { BrowserRouter , Route,  Routes } from 'react-router-dom';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import Jobs from './components/Job/Jobs';
import { Context } from './main';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Home from './components/Home/Home';
import JobDetails from './components/Job/JobDetails';
import MyApplications from './components/Application/MyApplications';
import PostJob from './components/Job/PostJob';
import MyJobs from './components/Job/MyJobs';
import NotFound from './components/NotFound/NotFound';
import Application from './components/Application/Application';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';


const App = () => {
  const { isAuthorized, setIsAuthorized, setUser } = useContext(Context);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "https://job-portal-website-backend.onrender.com/api/v1/user/getuser",
          {
            withCredentials: true,
          }
        );
        setUser(response.data.user);
        setIsAuthorized(true);
      } catch (error) {
        setIsAuthorized(false);   
      }
    };
    fetchUser();
  }, [isAuthorized]);

  return (
    <>
      <BrowserRouter>
       <Navbar />
        <Routes>
         <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/job/getall" element={<Jobs />} />
          <Route path='/' element={<Home/>}/>  
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path="/application/:id" element={<Application />} />
          <Route path="/applications/me" element={<MyApplications />} />
          <Route path="/job/post" element={<PostJob />} />
          <Route path="/job/me" element={<MyJobs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>

    </>
  );
};

export default App;
