import { ReactNode, useEffect, useState } from "react";
import PersonalModel from "../Model/PersonalModel";
import { useNavigate } from "react-router-dom";
import {
  CreatePersonalInfo,
  UpdatePersonInfoAsync,
  UpdatePersonalInfo,
  getPersonalInfoById,
} from "../Services/PersonalInfoServices";
import { JSX } from "react/jsx-runtime";
import { validatePersonalInfo } from "../Validations/validatePersonalInfo";

export default function PersonalInfoUtility(id: number) {
  const navigate = useNavigate();

  const initialValue: PersonalModel = {
    firstName: "",
    lastName: "",
    mobileNumber: "",
    phoneNumber: "",
    description: "",
    userId: 11,
    IsActive: false,
    id: id,
  };



  useEffect(() => {
    async function fetchData() {
      try {
        if (id > 0) {
          const response = await getPersonalInfoById(id);
          if (response.data) {
            setPersonalinfo(response.data);
          }
        }
      } catch (error) {
        console.error("Error fetching personal information:", error);
      }
    }

    fetchData();

    // return () => {

    // };
  }, [id]);

  const [personalinfo, setPersonalinfo] = useState<PersonalModel>(initialValue);

  const handelSavePersonalInfo = async () => {
    const validationErrors = validatePersonalInfo(personalinfo);
    if (validationErrors.length === 0) {
      if (personalinfo.id !== 0) {
        alert(personalinfo.id);
        console.log(personalinfo.id + "update");
        await UpdatePersonInfoAsync(personalinfo, personalinfo.id);
        console.log("User data updated successfully.");
      } else {
        alert(personalinfo.id + "new");
        await CreatePersonalInfo(personalinfo);
        console.log("New user data created successfully.");
      }
      setPersonalinfo(initialValue);
    }
    else{
      alert("please provide valid credentials");
    }
  };

  const handelShowList = () => {
    navigate("/showlist");
  };

  const onInputChangePersonal = (event: React.ChangeEvent<HTMLInputElement>
  ) => {
    var name = event.currentTarget.name;
    var newValue = event.currentTarget.value;
    setPersonalinfo((prev) => ({ ...prev, [name]: newValue }));
  };

  const onTextAreaChangePersonalDetails = (event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    var name = event.currentTarget.name;
    var newValue = event.currentTarget.value;
    setPersonalinfo((prev) => ({ ...prev, [name]: newValue }));
  };

  return {
    personalinfo,
    setPersonalinfo,
    handelSavePersonalInfo,
    onTextAreaChangePersonalDetails,
    onInputChangePersonal,
    handelShowList,
  };
}
