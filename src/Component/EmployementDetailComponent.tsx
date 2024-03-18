import React from "react";
import EmployeeUtility from "../Utilities/EmployeeUtility";
import { useParams } from "react-router-dom";
import '../Style/EmployementDetailsComponent.css';
export default function EmployementDetailComponent() {
  const {id=0} =useParams(); 
  const employeeUtility = EmployeeUtility(+id);
  
  return (
    <div>
      <div className="employee-container">
        <div>
          <h1>Employee Details</h1>
        

          <label htmlFor="noticePeriod">Notice Period</label>
          <input
            type="number"
            name="noticePeriod"
            id="noticePeriod"
            autoComplete="off"
            maxLength={2}
            onChange={employeeUtility.handelChangeNumber}
            value={employeeUtility.Employeeinfo.noticePeriod}
          />


      <label htmlFor="currentCTC">Current CTC</label>
          <input
            type="number"
            name="currentCTC"
            id="currentCTC"
            autoComplete="off"
            maxLength={10}
            onChange={employeeUtility.handelChangeNumber}
            value={employeeUtility.Employeeinfo.currentCTC}
          />

          <label htmlFor="expectedCTC">Expected CTC</label>
          <input
            type="number"
            name="expectedCTC"
            id="expectedCTC"
            autoComplete="off"
            maxLength={10}
            onChange={employeeUtility.handelChangeNumber}
            value={employeeUtility.Employeeinfo.expectedCTC}
          />

          <button onClick={employeeUtility.onSaveEmployee}>Submit</button>
          <br></br>
          <button onClick={employeeUtility.handelShowList}>ShowList</button>
        </div>
      </div>
    </div>
  );
}
