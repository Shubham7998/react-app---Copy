import axios from "axios";
import ResponseModel from "../Model/ResponseModel";

import AddressModel from "../Model/AddressModel";
import { API_URL } from "../APICONFIG";




export const CreateAddressInfo = async (Addressinfo: AddressModel): Promise<ResponseModel> => {
  
  alert("service");
  console.log("services");
  let result: ResponseModel = { error: "", data: null, message: "", errorCode: "" };

   await axios
    .post(`http://localhost:5203/api/addressinfo`, Addressinfo)
    
    .then(function (response) {
      console.log(response);
       alert(JSON.stringify(response));
       result.data = response.data;
       result.errorCode = response.status + "";
    })
    .catch(function (error) {
      alert(JSON.stringify(error));
      console.log(error);
   
      if (error.response) {
        console.log("1");

        
        alert(JSON.stringify(error.response.data.errors));
        result.error = error.response.data.error;
        result.errorCode = error.response.status;
        result.message = error.message;

      } else if (error.request) {
        console.log("2");
       
        result.data= error.message.data
        alert(result.data);
        console.log(result.data);
;        result.error =error.message;
        result.errorCode = error.request.code;

        result.message = error.message;

      } else {
        console.log("3");
       
        result.error ="No response received from server";
        result.errorCode = error.response.status;
      }
      
    });

    return result;
};

export async function GetAddressInfoAsync(
  id: number
): Promise<{ data: AddressModel[] }> {
  try {
    // const token = localStorage.getItem("Token"); // Replace 'YOUR_BEARER_TOKEN' with your actual bearer token

    const response = await axios.get<AddressModel[]>(
      `http://localhost:5203/api/addressinfo/ByUserId/` + id
    );
    //console.log(response);
    return response;
  } catch (error) {
    throw new Error("Failed to update leave data: " + (error as Error).message);
  }
}


export const getAddressInfoById = async (id: number): Promise<ResponseModel> => {
  let result: ResponseModel = {
    error: "",
    data: null,
    message: "",
    errorCode: "",
  };

  await axios
  .get(API_URL + "addressinfo/" + id)
  
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


export const UpdateAddressnfoAsync = async (data: AddressModel, id: number) => {
  try {
    const res = await axios.put(`http://localhost:5203/api/addressinfo/${id}`, data);
    console.table(res);
    return res.data;
  } catch (error) {
    throw new Error("Failed to update leave data: " + (error as Error).message);
  }
};





export const DeleteAddressInfoAsync = async (id: number) => {
  try {
    const res = await axios.delete(
      `http://localhost:5203/api/addressInfo/${id}`
    );
    console.table(res);
    console.log("Deleted sucessfully");

    return res.data;
  } catch (error) {
    throw new Error("Failed to update leave data: " + (error as Error).message);
  }
};