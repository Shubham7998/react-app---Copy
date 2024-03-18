import React from 'react'
import ExperienceUtility from '../Utilities/ExperienceUtility';
import { useParams } from 'react-router-dom';

export default function ExperienceDetailsComponent() {
  
  const {id =0} = useParams();
  const experienceUtility =ExperienceUtility(+id);
  
  return (
    <div className='Container'>
      <div className='Experience-container'></div>
      <div>
        <h1>Experience Details</h1>
        <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            name="companyName"
            id="companyName"
            placeholder="Company Name"
            autoComplete="off"
            maxLength={50}
            onChange={experienceUtility.onInputChangeExperience}
             value={experienceUtility.Experienceinfo.companyName}
          />
           <label htmlFor="startYear">Start Year</label>
          <input
            type="number"
            name="startYear"
            id="startYear"
            placeholder="start Year"
            autoComplete="off"
            maxLength={4}
            onChange={experienceUtility.onInputChangeExperience}
             value={experienceUtility.Experienceinfo.startYear}
             style={{ width: "97%", padding: "10px" }}
         />
          <label htmlFor="endYear">End Year</label>
          <input
            type="number"
            name="endYear"
            id="endYear"
            placeholder="End Year"
            autoComplete="off"
            maxLength={4}
            onChange={experienceUtility.onInputChangeExperience}
             value={experienceUtility.Experienceinfo.endYear}
             style={{ width: "97%", padding: "10px" }}
          />
        
          <label htmlFor="designationId">DesignationId</label>
          <input
            type="text"
            name="designationId"
            id="designationId"
            placeholder="Designation Id"
            autoComplete="off"
            maxLength={4}
            onChange={experienceUtility.onInputChangeExperience}
             value={experienceUtility.Experienceinfo.designationId}
            
          />

        <button  style={{ width: "97%", padding: "10px" }}
         onClick={experienceUtility.onSaveExperience}>Submit</button>
          <br></br>
          <br></br>
          <button style={{ width: "97%", padding: "10px" }} 
          onClick={experienceUtility.handelShowList}>ShowList</button>
      </div>
    </div>
  )
}
