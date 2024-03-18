import { useState } from "react";
import PersonalModel from "../Model/PersonalModel";
import UserModel from "../Model/UserModel";

import { userInfo } from "os";

export default function LoginUtilities() {
  const initialValue: UserModel = {
    emailAddress: "",
    password: "",
    userId: 0,
    id: 0,
  };
  const [Userinfo, setUserinfo] = useState<UserModel>(initialValue);

  const handelLogin = async () => {
    alert(JSON.stringify(Userinfo));
    //CreateUserAsync(Userinfo,4);
  };

  const onInputChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    var name = event.currentTarget.name;
    var newValue = event.currentTarget.value;
    setUserinfo((prev) => ({ ...prev, [name]: newValue }));
  };

  return { Userinfo, setUserinfo, handelLogin, onInputChangeLogin };
}
