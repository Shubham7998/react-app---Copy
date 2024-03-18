import { useEffect, useState } from "react";
import AddressModel from "../Model/AddressModel";
import { useNavigate } from "react-router-dom";
import AcademicModel from "../Model/AcademicModel";
import {
  CreateAcademicalInfo, UpdateAcademicalInfo, getacdemicInfoById,
 
} from "../Services/AcademicService";

export default function AcademicUtility(id: number) {
  const navigate = useNavigate();

  const initialValue: AcademicModel = {
    id: id,
    institutionName: "",
    startYear: "",
    endYear: "",
    percentage: "",
    degree: "",
    UserId: 3
  };

  const [Academicinfo, setAcademicinfo] = useState<AcademicModel>(initialValue);


  useEffect(() => {
    async function fetchData() {
      try {
        if (id > 0) {
          const response = await getacdemicInfoById(id);
          if (response.data) {
            setAcademicinfo(response.data);
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

  const [errors, setErrors] = useState<Partial<Record<string, string>>>({});
  const validateFields = () => {
    const { institutionName, startYear, endYear, percentage } = Academicinfo;
    const newErrors: Partial<Record<string, string>> = {};

    if (!institutionName) {
      newErrors.institutionName = "Institution Name is required";
    } else if (institutionName.length > 40) {
      newErrors.institutionName = "Institution Name must be less than 40 characters";
    }

    const currentYear = new Date().getFullYear();
    const startYearNum = +startYear;
    const endYearNum = +endYear;
    const percentageNum = +percentage;

    if (isNaN(startYearNum) || startYearNum < 1900 || startYearNum > currentYear) {
      newErrors.startYear = "Please enter a valid start year";
    }

    if (isNaN(endYearNum) || endYearNum < 1900 || endYearNum > currentYear || endYearNum < startYearNum) {
      newErrors.endYear = "Please enter a valid end year";
    }

    if (isNaN(percentageNum) || percentageNum < 0 || percentageNum > 100 || percentage =="") {
      newErrors.percentage = "Percentage must be a number between 0 and 100";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const onSaveAcademic = async () => {
    alert("heyyyy");

    if(validateFields()){
      if (Academicinfo.id !== 0) {
        alert(Academicinfo.id);
        console.log(Academicinfo.id + "update");
        await UpdateAcademicalInfo(Academicinfo.id, Academicinfo);
        console.log("User data updated successfully.");
        navigate("/showlist");
      } else {
        alert(Academicinfo.id + "new");
        await CreateAcademicalInfo(Academicinfo);
        console.log("New user data created successfully.");
        navigate("/showlist");
      }
  
      setAcademicinfo(initialValue);
    }
  };

  const onInputChangeAcademic = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    var name = event.currentTarget.name;
    var newValue = event.currentTarget.value;
    setAcademicinfo((prev) => ({ ...prev, [name]: newValue }));
  };

  const onSelectFieldChangeAcademic = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newValue = event.currentTarget.value;
    const name = event.currentTarget.name;

    setAcademicinfo((prevState) => ({ ...prevState, [name]: newValue }));
  };
  const handelChangeNumberAcademic = (e: any) => {
    // alert(e.target.name);
    var name = e.target.name;
    var newValue = e.target.value;
    setAcademicinfo((prev) => ({ ...prev, [name]: newValue }));
  };

  const handelShowList = () => {
    navigate("/showlist");
  };
  return {
    handelShowList,
    handelChangeNumberAcademic,
    onSelectFieldChangeAcademic,
    setAcademicinfo,
    Academicinfo,
    errors,
    onSaveAcademic,
    onInputChangeAcademic,
  };
}