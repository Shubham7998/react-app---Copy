import { useEffect, useState } from "react";
import EmployeModel from "../Model/EmployeModel";
import { useNavigate } from "react-router-dom";
import { CreateEmployeeInfo, UpdateEmployeeInfoAsync, getEmployeeInfoById } from "../Services/EmployeeService";


export default function EmployeeUtility(id:number) {
    const navigate =useNavigate();
    const initialValue : EmployeModel = {
        id: 0,
        userId: 1,
        noticePeriod: 0,
        expectedCTC: 0,
        currentCTC: 0,
       
    }
    const[Employeeinfo, setEmployeeinfo ] =  useState<EmployeModel>(initialValue);



    useEffect(() => {
        async function fetchData() {
          try {
            if (id > 0) {
              const response = await getEmployeeInfoById(id);
              if (response.data) {
                setEmployeeinfo(response.data);
              }
            }
          } catch (error) {
            console.error('Error fetching personal information:', error);
          }
        }
    
        fetchData();
    
        // return () => {
          
        // };
      }, [id]);


    const onSaveEmployee = async() => {
    
        if (Employeeinfo.id !== 0) {
            alert(Employeeinfo.id);
            console.log(Employeeinfo.id + "update");
            await UpdateEmployeeInfoAsync( Employeeinfo,Employeeinfo.id);
            navigate("/showList");
   
            console.log("Employee data updated successfully.");
          } else {
            alert(Employeeinfo.id + "new");
            alert(JSON.stringify(Employeeinfo));
            await CreateEmployeeInfo(Employeeinfo);
            navigate("/showList");
   
            console.log("New Employee data created successfully.");
          }
               setEmployeeinfo(initialValue);
    };

    const handelShowList = async() => {
    
       navigate("/showList");
   
    };
    const onInputChangeEmployee = (event: React.ChangeEvent<HTMLInputElement>) =>{
        var name  = event.currentTarget.name;
        var newValue  =  event.currentTarget.value;
        setEmployeeinfo((prev)=> ({...prev , [name]: newValue}));
    }
    const handelChangeNumber=(e: React.ChangeEvent<HTMLInputElement>)=>{
       //  alert(e.target.name);
        var name  = e.currentTarget.name;
        var newValue  =  e.currentTarget.value;
        setEmployeeinfo((prev)=> ({...prev , [name]: newValue}));
    }

   
    return{onInputChangeEmployee,onSaveEmployee,handelShowList,Employeeinfo,setEmployeeinfo,handelChangeNumber};
}


