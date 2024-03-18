import axios from "axios";
import ResponseModel from "../Model/ResponseModel";
import UserModel from "../Model/UserModel";



export const CreateUser = async (
    userInfo: UserModel
  ): Promise<ResponseModel> => {
    let result: ResponseModel = {
      error: "",
      data: null,
      message: "",
      errorCode: "",
    };
    alert("CreatePersonalInfo");
    await axios
      .post(`http://localhost:5203/api/user`, userInfo)
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