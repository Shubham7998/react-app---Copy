import axios from "axios";
import ExperienceModel from "../Model/ExperienceModel";
import ResponseModel from "../Model/ResponseModel";
import { API_URL } from "../APICONFIG";

export async function GetExperienceInfoAsync(
  id: number
): Promise<{ data: ExperienceModel[] }> {
  try {
    // const token = localStorage.getItem("Token"); // Replace 'YOUR_BEARER_TOKEN' with your actual bearer token

    const response = await axios.get<ExperienceModel[]>(
      `http://localhost:5203/api/Experienceinfo/ByUserId/` + id
    );
    //console.log(response);
    return response;
  } catch (error) {
    throw new Error("Failed to update leave data: " + (error as Error).message);
  }
}

export const CreateExperienceInfo = async (
  experienceinfo: ExperienceModel
): Promise<ResponseModel> => {
  let result: ResponseModel = {
    error: "",
    data: null,
    message: "",
    errorCode: "",
  };
  alert("Createxperienceinfo");
  await axios
    .post(`http://localhost:5203/api/Experienceinfo`, experienceinfo)
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
          if (errorResponse.firstName) {
            const firstNameError = errorResponse.firstName[0];
            alert("firstNameError" + firstNameError);
            errorMessage += `First Name Error: ${firstNameError}\n`;
          }
          if (errorResponse.lastName) {
            const lastNameError = errorResponse.lastName[0];
            alert("lastNameError" + lastNameError);
            errorMessage += `Last Name Error: ${lastNameError}\n`;
          }
          if (errorResponse.emailAddress) {
            const emailAddressError = errorResponse.emailAddress[0];
            alert("emailAddressError" + emailAddressError);
            errorMessage += `Email Address Error: ${emailAddressError}\n`;
          }
          if (errorResponse.mobileNumber) {
            const mobileNumberError = errorResponse.mobileNumber[0];
            alert("mobileNumberError" + mobileNumberError);
            errorMessage += `Mobile Number Error: ${mobileNumberError}\n`;
          }
          if (errorResponse.phoneNumber) {
            const phoneNumberError = errorResponse.phoneNumber[0];
            alert("phoneNumberError" + phoneNumberError);
            errorMessage += `Phone Number Error: ${phoneNumberError}\n`;
          }
          if (errorResponse.description) {
            const descriptionError = errorResponse.description[0];
            alert("descriptionError" + descriptionError);
            errorMessage += `Description Error: ${descriptionError}\n`;
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

export const getExperienceInfoById = async (
  id: number
): Promise<ResponseModel> => {
  let result: ResponseModel = {
    error: "",
    data: null,
    message: "",
    errorCode: "",
  };

  await axios
    .get(API_URL + "Experienceinfo/" + id)
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

export const UpdateExperienceInfo = async (
  id: number,
  experienceinfo: ExperienceModel
): Promise<ResponseModel> => {
  let result: ResponseModel = {
    error: "",
    data: null,
    message: "",
    errorCode: "",
  };

  await axios
    .put(`http://localhost:5203/api/Experienceinfo/` + id, experienceinfo)
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

        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        //return { error: error.response.data, message  : "", errorCode: error.response.status };
        result.error = error.response.data;
        result.errorCode = error.response.status;
      } else if (error.request) {
        //console.log("2");
        // The request was made but no response was received
        //return { error: "No response received from server", message  : "", errorCode: error.response.status  };
        result.error = error.message;
        result.errorCode = error.request.code;
        result.message = error.message;
      } else {
        //console.log("3");
        // Something happened in setting up the request that triggered an Error
        result.error = "No response received from server";
        result.errorCode = error.response.status;
      }
    });

  return result;
};

export const DeleteExperienceInfoById = async (
  id: number
): Promise<ResponseModel> => {
  let result: ResponseModel = {
    error: "",
    data: null,
    message: "",
    errorCode: "",
  };

  await axios
    .delete(API_URL + "Experienceinfo/" + id)
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
