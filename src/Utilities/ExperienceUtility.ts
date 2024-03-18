import { useNavigate } from "react-router-dom";
import AddressModel from "../Model/ExperienceModel";
import ExperienceModel from "../Model/ExperienceModel";
import { useEffect, useState } from "react";
import { CreateExperienceInfo, UpdateExperienceInfo, getExperienceInfoById } from "../Services/ExperienceService";

export default function ExperienceUtility(id:number) {
  const navigate = useNavigate();

  const initialValue: ExperienceModel = {
    id: 0,
    userId: 1,
    companyName: "",
    startYear: 0,
    endYear: 0,
    designationId: 0
  };
  const [Experienceinfo, setExperienceinfo] =useState<ExperienceModel>(initialValue);


  useEffect(() => {
    async function fetchData() {
      try {
        if (id > 0) {
          const response = await getExperienceInfoById(id);
          if (response.data) {
            setExperienceinfo(response.data);
          }
        }
      } catch (error) {
        console.error('Error fetching Experience information:', error);
      }
    }

    fetchData();

    // return () => {
      
    // };
  }, [id]);

  const onInputChangeExperience = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    var name = event.currentTarget.name;
    var newValue = event.currentTarget.value;
    setExperienceinfo((prev: any) => ({ ...prev, [name]: newValue }));
  };
  const handelShowList = () => {
    navigate("/showlist");
  };

  const onSaveExperience = async () => {
  
    if (Experienceinfo.id !== 0) {
      alert(Experienceinfo.id);
      console.log(Experienceinfo.id + "update");
      await UpdateExperienceInfo( Experienceinfo.id,Experienceinfo);
      console.log("User data updated successfully.");
      navigate("/showlist");
    } else {
      alert(Experienceinfo.id + "new");
      await CreateExperienceInfo(Experienceinfo);
      console.log("New user data created successfully.");
      navigate("/showlist");
    }

    setExperienceinfo(initialValue);
  };
  
  return {
    onInputChangeExperience,
    handelShowList,
    onSaveExperience,
    Experienceinfo,
    setExperienceinfo,
  };
}
