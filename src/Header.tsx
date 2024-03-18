import React from "react";
import { useNavigate } from "react-router-dom";
import "./Style/Header.css"

export default function Header() {
  const navigate = useNavigate();
  const handleClick = (path: string) => {
    navigate(path);
  };
  return (
    <div className="container">
      <form className="layout-container">
      <nav className="navbar">
          <ul>
          <li onClick={() => handleClick("/")}>Home</li>
          <li onClick={() => handleClick("/login")}>Login</li>
              <li onClick={() => handleClick("/register")}>Register</li>
              <li onClick={() => handleClick("/PersonalDetails")}>PersonalDetail</li>
              <li onClick={() => handleClick("/AddressDetails")}>AddressDetail</li>
              <li onClick={() => handleClick("/AcademicDetails")}>AcademicDetail</li>
              <li onClick={() => handleClick("/EmploymentDetails")}>EmploymentDetailss</li>
              <li onClick={() => handleClick("/ExperienceDetails")}>ExperienceDetails</li>
              <li onClick={() => handleClick("/showList")}>ShowList</li>
              <li onClick={() => handleClick("/logout")}>LogOut</li>
          </ul>
        </nav>
      </form>
    </div>
  );
}
