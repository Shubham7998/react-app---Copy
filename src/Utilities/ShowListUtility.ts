import { useState, useEffect } from "react";
import PersonalModel from "../Model/PersonalModel";
import { DeletePersonInfoAsync, DeletePersonalInfoById, GetPersonInfoAsync } from "../Services/PersonalInfoServices";
import { Navigate, useNavigate } from "react-router-dom";
import AcademicModel from "../Model/AcademicModel";
import { DeleteAcademicInfoAsync, GetAcademicInfoAsync, getAcademicalInfo } from "../Services/AcademicService";
import { DeleteAddressInfoAsync, GetAddressInfoAsync } from "../Services/AddressInfoService";
import AddressModel from "../Model/AddressModel";
import EmployeModel from "../Model/EmployeModel";
import { DeleteEmployeeInfoById, GetEmployeeInfoAsync } from "../Services/EmployeeService";
import ExperienceModel from "../Model/ExperienceModel";
import {  DeleteExperienceInfoById, GetExperienceInfoAsync } from "../Services/ExperienceService";


const ShowListUtility = () => {
  const [personalInfo, setPersonalInfo] = useState<PersonalModel[]>([]);
  const [Academicinfo, setAcademicinfo] = useState<AcademicModel[]>([]);
  const[Addressinfo, setAddressinfo ] =  useState<AddressModel[]>([]);
  const[Employeeinfo, setEmployeeinfo ] =  useState<EmployeModel[]>([]);
  const [Experienceinfo, setExperienceinfo] =useState<ExperienceModel[]>([]);
  const navigate = useNavigate();
  

  useEffect(() => {
    async function fetchData() {
      try {
        console.log("Fetching personal info...");
        const personalRes = await GetPersonInfoAsync(5);
        console.log("Personal info:", personalRes.data);
        
        console.log("Fetching academic info...");
       const academicRes = await GetAcademicInfoAsync(3);
       
       
       console.log("Fetching address info...");
       const addressres = await GetAddressInfoAsync(1);
       console.log("Academic info:", academicRes.data);

       console.log("Fetching employee info...");
       const employeeres = await GetEmployeeInfoAsync(1);

       console.log("Fetching employee info...");
       const experienceres = await GetExperienceInfoAsync(1);
        
        setPersonalInfo(personalRes.data);
        setAcademicinfo(academicRes.data);
        setAddressinfo(addressres.data);
        setEmployeeinfo(employeeres.data);
        setExperienceinfo(experienceres.data);
      }
       catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    
    fetchData();
  }, []);
  
  const handleUpdateDataEmployee = (id: number) => {
    navigate("/EmploymentDetails/" + id);
  };
  const handleUpdateDataExperience = (id: number) => {
    navigate("/ExperienceDetails/" + id);
  };
  const handleUpdateDataAddress = (id: number) => {
    navigate("/AddressDetails/" + id);
  };
  const handleUpdateDataPersonal = (id: number) => {
    navigate("/PersonalDetails/" + id);
  };
  const handleUpdateDataAcademic = (id: number) => {
    navigate("/AcademicDetails/" + id);
  };


  const handleDeletePersonal = async (id: number) => {
    const confirmation = window.confirm("Are you sure you want to delete this user?");
    if (confirmation) {
      try {
        await DeletePersonalInfoById(id);
        alert("User deleted successfully!");
        
      } catch (error) {
        console.error("Error deleting user:", error);
        alert("An error occurred while deleting user. Please try again later.");
      }
    }
  };

  const handleDeleteAcademic = async (id: number) => {
    const confirmation = window.confirm("Are you sure you want to delete this user?");
    if (confirmation) {
      try {
        await DeleteAcademicInfoAsync(id);
        alert("User deleted successfully!");
        
      } catch (error) {
        console.error("Error deleting user:", error);
        alert("An error occurred while deleting user. Please try again later.");
      }
    }
  };

  const handleDeleteExperience = async (id: number) => {
    const confirmation = window.confirm("Are you sure you want to delete this user?");
    if (confirmation) {
      try {
       await DeleteExperienceInfoById(id);
        alert("User deleted successfully!");
        
      } catch (error) {
        console.error("Error deleting user:", error);
        alert("An error occurred while deleting user. Please try again later.");
      }
    }
  };

  const handleDeleteEmployee = async (id: number) => {
    const confirmation = window.confirm("Are you sure you want to delete this user?");
    if (confirmation) {
      try {
        alert("employe delete try");
        await DeleteEmployeeInfoById(id);
        alert("User deleted successfully!");
        
      } catch (error) {
        console.error("Error deleting user:", error);
        alert("An error occurred while deleting user. Please try again later.");
      }
    }
  };
  const handleDeleteAddress = async (id: number) => {
    const confirmation = window.confirm("Are you sure you want to delete this user?");
    if (confirmation) {
      try {
        await DeleteAddressInfoAsync(id);
        alert("User deleted successfully!");
        
      } catch (error) {
        console.error("Error deleting user:", error);
        alert("An error occurred while deleting user. Please try again later.");
      }
    }
  };

  return {
    personalInfo,
    handleUpdateDataPersonal,
    handleUpdateDataAcademic,
    handleDeleteAcademic,
    handleDeletePersonal,
    Academicinfo,
    setAcademicinfo,
    Addressinfo,
    setAddressinfo,
    handleDeleteAddress,
    handleUpdateDataAddress,
    Experienceinfo,
    setExperienceinfo,
    handleUpdateDataExperience,
    handleDeleteExperience,
    Employeeinfo,
    setEmployeeinfo,
    handleUpdateDataEmployee,
    handleDeleteEmployee
  };
};

export default ShowListUtility;
