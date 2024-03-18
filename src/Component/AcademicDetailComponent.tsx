import React, { useState } from "react";
import AcademicUtility from "../Utilities/AcademicUtility";
import { useNavigate, useParams } from "react-router-dom";
import "../Style/AcademicDetail.css"; // Import CSS file for styling

export default function AcademicDetailComponent() {
  const { id = "0" } = useParams<{ id: string }>();
  const academicUtility = AcademicUtility(+id);
  
  return (
    <div className="academic-container">
      <div>
        <h1>Academic Details</h1>
        <div className="form-group">
          <label htmlFor="institutionName">Institution Name</label>
          <input
            type="text"
            name="institutionName"
            id="institutionName"
            placeholder="Institution Name"
            autoComplete="off"
            maxLength={40}
            onChange={academicUtility.onInputChangeAcademic}
            value={academicUtility.Academicinfo.institutionName}
          />
          {academicUtility.errors.institutionName && <p className="error-message">{academicUtility.errors.institutionName}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="startYear">Start Year</label>
          <input
            type="number"
            name="startYear"
            id="startYear"
            placeholder="Start Year"
            autoComplete="off"
            maxLength={4}
            onChange={academicUtility.handelChangeNumberAcademic}
            value={academicUtility.Academicinfo.startYear}
          />
          {academicUtility.errors.startYear && <p className="error-message">{academicUtility.errors.startYear}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="endYear">End Year</label>
          <input
            type="number"
            name="endYear"
            id="endYear"
            placeholder="End Year"
            autoComplete="off"
            maxLength={4}
            onChange={academicUtility.handelChangeNumberAcademic}
            value={academicUtility.Academicinfo.endYear}
          />
          {academicUtility.errors.endYear && <p className="error-message">{academicUtility.errors.endYear}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="percentage">Percentage</label>
          <input
            type="number"
            name="percentage"
            id="percentage"
            placeholder="Percentage "
            autoComplete="off"
            maxLength={4}
            onChange={academicUtility.handelChangeNumberAcademic}
            value={academicUtility.Academicinfo.percentage}
          />
          {academicUtility.errors.percentage && <p className="error-message">{academicUtility.errors.percentage}</p>}
        </div>

        <div className="buttons-container">
          <button onClick={academicUtility.onSaveAcademic}>Save</button>
          <button onClick={academicUtility.handelShowList}>ShowList</button>
        </div>
      </div>
    </div>
  );
}
