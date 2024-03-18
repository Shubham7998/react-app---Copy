
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './Layout';
import LoginComponent from './Component/LoginComponent';
import RegisterComponent from './Component/RegisterComponent';
import HomeComponent from './Component/HomeComponent';
import PersonalDetailsComponents from './Component/PersonalDetailsComponents';
import ShowListComponent from './Component/ShowListComponent';
import AddressDetailComponent from './Component/AddressDetailComponent';
import EmployementDetailComponent from './Component/EmployementDetailComponent';
import AcademicDetailComponent from './Component/AcademicDetailComponent';
import ExperienceDetailsComponent from './Component/ExperienceDetails';



function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route element={<Layout/>}>
    <Route path="/" element={<HomeComponent/>}></Route> 
     <Route path="/login" element={<LoginComponent/>}></Route> 
     <Route path="/register" element={<RegisterComponent/>}></Route> 
     
     <Route path="/PersonalDetails" element={<PersonalDetailsComponents/>}></Route> 
     <Route path="/PersonalDetails/:id" element={<PersonalDetailsComponents />} />

     <Route path="/AddressDetails" element={<AddressDetailComponent/>}></Route> 
     <Route path="/AddressDetails/:id" element={<AddressDetailComponent/>}></Route> 

     <Route path="/AcademicDetails" element={<AcademicDetailComponent/>}></Route> 
     <Route path="/AcademicDetails/:id" element={<AcademicDetailComponent/>}></Route> 
     
     <Route path="/ExperienceDetails" element={<ExperienceDetailsComponent/>}></Route> 
     <Route path="/ExperienceDetails/:id" element={<ExperienceDetailsComponent/>}></Route> 

     <Route path="/EmploymentDetails" element={<EmployementDetailComponent/>}></Route> 
     <Route path="/EmploymentDetails/:id" element={<EmployementDetailComponent/>}></Route> 
     
     <Route path="/showList" element={<ShowListComponent/>}></Route> 
    </Route>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
