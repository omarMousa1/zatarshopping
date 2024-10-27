import { useState } from "react";

export interface ValidationErrors {
  [key: string]: string;
}

const ValidateField = (name: string, value: string): string => {
  const emailReg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;

  switch (name) {
    case "email":
      return emailReg.test(value) ? "" : "Invalid email format";
    case "password":
      return value.length >= 8 ? "" : "Password must be at least 8 characters";
    case "confirmPassword":
      return value ? "" : "Please confirm your password";
    case "phoneNumber":
      return /^\+?[1-9]\d{1,14}$/.test(value)
        ? ""
        : "Invalid phone number format";

    case "firstName":
    case "lastName":
    case "country":
    case "city":
    case "streetAddress":
    case "area":
      return value ? "" : "This field is required";
    default:
      return "";
  }
};

export const useValidation = (initialValues: { [key: string]: string }) => {
  const [errors, setErrors] = useState<ValidationErrors>({});

  const validate = (name: string, value: string, compareValue?: string) => {
    let errorMessage = ValidateField(name, value);

    if (name === "confirmPassword" && compareValue !== value) {
      errorMessage = " Password do not match";
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMessage }));
    return errorMessage;
  };

  const validateAll = (values: { [key: string]: string }) => {
    const newErrors: ValidationErrors = {};
    Object.entries(values).forEach(([key, value]) => {
      newErrors[key] = ValidateField(key, value);
    });
    setErrors(newErrors);
    return newErrors;
  };

  return { errors, validate, validateAll };
};
