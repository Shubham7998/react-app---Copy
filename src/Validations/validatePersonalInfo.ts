import PersonalModel from "../Model/PersonalModel";
import UserModel from "../Model/PersonalModel";

export const validatePersonalInfo = (userData: PersonalModel): string[] => {
    
    const errors: string[] = [];
    const phoneNumberPattern = /^\d{10}$/;
  
 
    if (!userData.firstName.trim()) {
      errors.push("First name is required.");
      
    }
    else if(userData.firstName.length<50){
        errors.push("First name should be less than 50 charcter.");

    }
  
   
    if (!userData.lastName.trim()) {
      errors.push("Last name is required.");
    }
    else if(userData.lastName.length<50){
        errors.push("last name should be less than 50 charcter.");

    }
    
    if (!userData.mobileNumber.trim() || !phoneNumberPattern.test(userData.mobileNumber)) {
      errors.push("Mobile number must be 10 digits.");
    }
  
    
    if (!userData.phoneNumber.trim() || !phoneNumberPattern.test(userData.phoneNumber)) {
      errors.push("Phone number must be 10 digits.");
    }
  
    
    if (!userData.description.trim()) {
      errors.push("Description is required.");
    } else if (userData.description.length > 250) {
      errors.push("Description must be less than 250 characters.");
    }
  
    
    return errors;
  };
  