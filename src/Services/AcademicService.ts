import axios from "axios";
import { API_URL } from "../APICONFIG";
import ResponseModel from "../Model/ResponseModel";


import AcademicModel from "../Model/AcademicModel";

export const CreateAcademicalInfo = async (
  AcademicalInfo: AcademicModel
): Promise<ResponseModel> => {
  let result: ResponseModel = {
    error: "",
    data: null,
    message: "",
    errorCode: "",
  };
  alert("CreateAcademicalInfo");
  await axios
    .post(`http://localhost:5203/api/academicInfo`, AcademicalInfo)
    .then(function (response) {
      alert("ss");
      alert("response" + JSON.stringify(response));
      result.data = response.data;
      result.errorCode = response.status + "";
      alert("ss");
    })
    .catch(function (error) {
      alert("fff");
      alert("axios error catch" + JSON.stringify(error));

      if (error.response) {
        try {
          const errorResponse = error.response.data.errors;
          alert("errorResponse" + JSON.stringify(errorResponse));
          let errorMessage = "";
          if (errorResponse.InstitutionName) {
            const InstitutionNameError = errorResponse.InstitutionName[0];
            alert("InstitutionNameError" + InstitutionNameError);
            errorMessage += `First Name Error: ${InstitutionNameError}\n`;
          }
          if (errorResponse.StartYear) {
            const StartYearError = errorResponse.lastName[0];
            alert("StartYearError" + StartYearError);
            errorMessage += `Last Name Error: ${StartYearError}\n`;
          }
          if (errorResponse.EndYear) {
            const EndYearError = errorResponse.emailAddress[0];
            alert("EndYearError" + EndYearError);
            errorMessage += `Email Address Error: ${EndYearError}\n`;
          }
          if (errorResponse.mobileNumber) {
            const mobileNumberError = errorResponse.mobileNumber[0];
            alert("mobileNumberError" + mobileNumberError);
            errorMessage += `Mobile Number Error: ${mobileNumberError}\n`;
          }
          if (errorResponse.Percentage) {
            const PercentageError = errorResponse.Percentage[0];
            alert("PercentageError" + PercentageError);
            errorMessage += `Phone Number Error: ${PercentageError}\n`;
          }
          if (errorResponse.Degree) {
            const DegreeError = errorResponse.Degree[0];
            alert("DegreeError" + DegreeError);
            errorMessage += `Degree Error: ${DegreeError}\n`;
          }
          result.error = errorMessage;
          result.errorCode = error.response.status;
          result.message = error.message;
        } catch (error) {
          console.error("Error parsing error response:", error);
        }
      } else if (error.request) {
        alert("error request axios catch");
        result.error = error.message;
        result.errorCode = error.request.code;
        result.message = error.message;
      } else {
        result.error = "No response received from server";
        result.errorCode = error.response.status;
      }
    });

  return result;
};

export async function GetAcademicInfoAsync(
  id: number
): Promise<{ data: AcademicModel[] }> {
  try {
    // const token = localStorage.getItem("Token"); // Replace 'YOUR_BEARER_TOKEN' with your actual bearer token

    const response = await axios.get<AcademicModel[]>(
      `http://localhost:5203/api/academicInfo/ByUserId/` + id
    );
    //console.log(response);
    return response;
  } catch (error) {
    throw new Error("Failed to update leave data: " + (error as Error).message);
  }
}

export const getAcademicalInfo = async (
  id:number
): Promise<ResponseModel> => {
  let result: ResponseModel = {
    error: "",
    data: null,
    message: "",
    errorCode: "",
  };
  alert("getAcademicalInfo");
  await axios
    .post(`http://localhost:5203/api/academicInfo/ByUserId/`+id)
    .then(function (response) {
      alert("ss");
      alert("response" + JSON.stringify(response));
      result.data = response.data;
      result.errorCode = response.status + "";
      alert("ss");
    })
    .catch(function (error) {
      alert("fff");
      alert("axios error catch" + JSON.stringify(error));

      if (error.response) {
        try {
          const errorResponse = error.response.data.errors;
          alert("errorResponse" + JSON.stringify(errorResponse));
          let errorMessage = "";
          if (errorResponse.InstitutionName) {
            const InstitutionNameError = errorResponse.InstitutionName[0];
            alert("InstitutionNameError" + InstitutionNameError);
            errorMessage += `First Name Error: ${InstitutionNameError}\n`;
          }
          if (errorResponse.StartYear) {
            const StartYearError = errorResponse.lastName[0];
            alert("StartYearError" + StartYearError);
            errorMessage += `Last Name Error: ${StartYearError}\n`;
          }
          if (errorResponse.EndYear) {
            const EndYearError = errorResponse.emailAddress[0];
            alert("EndYearError" + EndYearError);
            errorMessage += `Email Address Error: ${EndYearError}\n`;
          }
          if (errorResponse.mobileNumber) {
            const mobileNumberError = errorResponse.mobileNumber[0];
            alert("mobileNumberError" + mobileNumberError);
            errorMessage += `Mobile Number Error: ${mobileNumberError}\n`;
          }
          if (errorResponse.Percentage) {
            const PercentageError = errorResponse.Percentage[0];
            alert("PercentageError" + PercentageError);
            errorMessage += `Phone Number Error: ${PercentageError}\n`;
          }
          if (errorResponse.Degree) {
            const DegreeError = errorResponse.Degree[0];
            alert("DegreeError" + DegreeError);
            errorMessage += `Degree Error: ${DegreeError}\n`;
          }
          result.error = errorMessage;
          result.errorCode = error.response.status;
          result.message = error.message;
        } catch (error) {
          console.error("Error parsing error response:", error);
        }
      } else if (error.request) {
        alert("error request axios catch");
        result.error = error.message;
        result.errorCode = error.request.code;
        result.message = error.message;
      } else {
        result.error = "No response received from server";
        result.errorCode = error.response.status;
      }
    });

  return result;
};

export const UpdateAcademicalInfo = async (
  id:number,
  AcademicalInfo: AcademicModel
): Promise<ResponseModel> => {
  let result: ResponseModel = {
    error: "",
    data: null,
    message: "",
    errorCode: "",
  };
  alert("UpdateAcademicalInfo");
  await axios
    .put(`http://localhost:5203/api/academicInfo/${id}`, AcademicalInfo)
    .then(function (response) {
      alert("ss");
      alert("response" + JSON.stringify(response));
      result.data = response.data;
      result.errorCode = response.status + "";
      alert("ss");
    })
    .catch(function (error) {
      alert("fff");
      alert("axios error catch" + JSON.stringify(error));

      if (error.response) {
        try {
          const errorResponse = error.response.data.errors;
          alert("errorResponse" + JSON.stringify(errorResponse));
          let errorMessage = "";
          if (errorResponse.InstitutionName) {
            const InstitutionNameError = errorResponse.InstitutionName[0];
            alert("InstitutionNameError" + InstitutionNameError);
            errorMessage += `First Name Error: ${InstitutionNameError}\n`;
          }
          if (errorResponse.StartYear) {
            const StartYearError = errorResponse.lastName[0];
            alert("StartYearError" + StartYearError);
            errorMessage += `Last Name Error: ${StartYearError}\n`;
          }
          if (errorResponse.EndYear) {
            const EndYearError = errorResponse.emailAddress[0];
            alert("EndYearError" + EndYearError);
            errorMessage += `Email Address Error: ${EndYearError}\n`;
          }
          if (errorResponse.mobileNumber) {
            const mobileNumberError = errorResponse.mobileNumber[0];
            alert("mobileNumberError" + mobileNumberError);
            errorMessage += `Mobile Number Error: ${mobileNumberError}\n`;
          }
          if (errorResponse.Percentage) {
            const PercentageError = errorResponse.Percentage[0];
            alert("PercentageError" + PercentageError);
            errorMessage += `Phone Number Error: ${PercentageError}\n`;
          }
          if (errorResponse.Degree) {
            const DegreeError = errorResponse.Degree[0];
            alert("DegreeError" + DegreeError);
            errorMessage += `Degree Error: ${DegreeError}\n`;
          }
          result.error = errorMessage;
          result.errorCode = error.response.status;
          result.message = error.message;
        } catch (error) {
          console.error("Error parsing error response:", error);
        }
      } else if (error.request) {
        alert("error request axios catch");
        result.error = error.message;
        result.errorCode = error.request.code;
        result.message = error.message;
      } else {
        result.error = "No response received from server";
        result.errorCode = error.response.status;
      }
    });

  return result;
};

export const getacdemicInfoById = async (id: number): Promise<ResponseModel> => {
  let result: ResponseModel = {
    error: "",
    data: null,
    message: "",
    errorCode: "",
  };

  await axios
  .get(API_URL + "academicInfo/" + id)
    
    .then(function (response) {
      //alert(JSON.stringify(response));
      //return { error: "", data: response.data, message  : "", errorCode: "" };
      result.data = response.data;
      result.errorCode = response.status + "";
    })
    .catch(function (error) {
      console.log(error);
      // alert(JSON.stringify(error));
      if (error.response) {
        //console.log("1");

        result.error = error.response.data;
        result.errorCode = error.response.status;
      } else if (error.request) {
        //console.log("2");

        result.error = error.message;
        result.errorCode = error.request.code;
        result.message = error.message;
      } else {
        result.error = "No response received from server";
        result.errorCode = error.response.status;
      }
    });

  return result;
};

export const DeleteAcademicInfoAsync = async (id: number) => {
  try {
    const res = await axios.delete(
      `http://localhost:5203/api/academicInfo/${id}`
    );
    console.table(res);
    console.log("Deleted sucessfully");

    return res.data;
  } catch (error) {
    throw new Error("Failed to update leave data: " + (error as Error).message);
  }
};