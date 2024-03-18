import { useState } from "react";
import UserModel from "../Model/UserModel";
import { CreateUser } from "../Services/RegisterService";



export default function RegisterUtilities() {
  const initialValue: UserModel = {
    emailAddress: "",
    password: "",
    userId: 0,
    id: 0,
  };

  const [Registerinfo, setRegisterInfo] = useState<UserModel>(initialValue);

  const handelRegister = async () => {
    try {
      alert(JSON.stringify(Registerinfo));
       await CreateUser(Registerinfo);
      console.log("Register Successful");
      alert("Success");
      
    } catch (error) {
      console.error("An error occurred during registration:", error);
      alert("An error occurred during registration. Please try again later.");
    }
    setRegisterInfo(initialValue);
  };

  const onInputChangeRegister = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    var name = event.currentTarget.name;
    var newValue = event.currentTarget.value;
    setRegisterInfo((prev) => ({ ...prev, [name]: newValue }));
  };

  return {
    setRegisterInfo,
    Registerinfo,
    handelRegister,
    onInputChangeRegister,
  };
}
