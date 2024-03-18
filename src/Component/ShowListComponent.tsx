import React, { useState } from "react";
import ShowListUtility from "../Utilities/ShowListUtility";
import PersonalModel from "../Model/PersonalModel";
import AcademicModel from "../Model/AcademicModel";
import "../Style/showlist.css"

export default function ShowListComponent() {
  
  const showListUtility = ShowListUtility();
  console.log("Personal Info:", showListUtility.personalInfo);
  console.log("Academic Info:", showListUtility.Academicinfo);
  return (
    <div className="show-container">
      <h1>Personal Data</h1>
      <table className="contact-list">
        <thead>
          <tr>
            <th>Sr. no</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Mobile Number</th>
            <th>Description</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {showListUtility.personalInfo.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.phoneNumber}</td>
              <td>{data.mobileNumber}</td>
              <td>{data.description}</td>
              <td>
                <button type="button" onClick={() => showListUtility.handleUpdateDataPersonal(data.id)}>
                  Edit
                </button>
              </td>
              <td>
                <button type="button" onClick={() => showListUtility.handleDeletePersonal(data.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1>Address Details</h1>
      <table className="contact-list">
        <thead>
          <tr>
            <th>Sr. no</th>
            <th>Country</th>
            <th>State</th>
            <th>city</th>
            <th>Address</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {showListUtility.Addressinfo.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.countryId}</td>
              <td>{data.stateId}</td>
              <td>{data.city}</td>
              <td>{data.address}</td>
              <td>
                <button type="button" onClick={() => showListUtility.handleUpdateDataAddress(data.id)}>
                  Edit
                </button>
              </td>
              <td>
                <button type="button" onClick={() => showListUtility.handleDeleteAddress(data.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>


      <h1>Academic Details</h1>
      <table className="contact-list">
        <thead>
          <tr>
            <th>Sr. no</th>
            <th>InstitutionName</th>
            <th>Degree</th>
            <th>Percentage</th>
            <th>StartYear</th>
            <th>EndYear</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {showListUtility.Academicinfo.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.institutionName}</td>
              <td>{data.degree}</td>
              <td>{data.percentage}</td>
              <td>{data.startYear}</td>
              <td>{data.endYear}</td>
              <td>
                <button type="button" onClick={() => showListUtility.handleUpdateDataAcademic(data.id)}>
                  Edit
                </button>
              </td>
              <td>
                <button type="button" onClick={() => showListUtility.handleDeleteAcademic(data.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1>Employee Details</h1>
      <table className="contact-list">
        <thead>
          <tr>
            <th>Sr. no</th>
           
            <th>CurrentCTC</th>
            <th>ExpectedCTC</th>
            <th>NoticePeriod</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {showListUtility.Employeeinfo.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
            
              <td>{data.currentCTC}</td>
              <td>{data.expectedCTC}</td>
              <td>{data.noticePeriod}</td>
              <td>
                <button type="button" onClick={() => showListUtility.handleUpdateDataEmployee(data.id)}>
                  Edit
                </button>
              </td>
              <td>
                <button type="button" onClick={() => showListUtility.handleDeleteEmployee(data.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>


      <h1>Experience Details</h1>
      <table className="contact-list">
        <thead>
          <tr>
            <th>Sr. no</th>
            <th>Company Name</th>
            <th>designation</th>
            <th>StartYear</th>
            <th>EndYear</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {showListUtility.Experienceinfo.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.companyName}</td>
              <td>{data.designationId}</td>
              <td>{data.startYear}</td>
              <td>{data.endYear}</td>
             
              <td>
                <button type="button" onClick={() => showListUtility.handleUpdateDataExperience(data.id)}>
                  Edit
                </button>
              </td>
              <td>
                <button type="button" onClick={() => showListUtility.handleDeleteExperience(data.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      
      

    </div>
  );
}
