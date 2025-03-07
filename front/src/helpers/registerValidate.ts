import { FormData } from "../interfaces/interfaces";

export const ValidateRegistrationForm = (formData: FormData) => {
  const errors: Record<keyof FormData, string> = {
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  };

  if (!formData.name) {
    errors.name = "Name is required.";
  } else if (formData.name.length < 3) {
    errors.name = "Name must be at least 3 characters.";
  }

  if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = "Invalid email address.";
  }

  if (!formData.password || formData.password.length < 8) {
    errors.password = "Password must be at least 8 characters.";
  } else if (!/[A-Z]/.test(formData.password)) {
    errors.password = "Password must contain at least one uppercase letter.";
  } else if (!/[a-z]/.test(formData.password)) {
    errors.password = "Password must contain at least one lowercase letter.";
  } else if (!/\d/.test(formData.password)) {
    errors.password = "Password must contain at least one number.";
  } else if (!/[!@#$%^&*]/.test(formData.password)) {
    errors.password = "Password must contain at least one special character.";
  }

  if (!formData.address) {
    errors.address = "Address is required.";
  }

  if (!formData.phone || !/^\d{10}$/.test(formData.phone)) {
    errors.phone = "Invalid phone number. Must be 10 digits.";
  }

  const valid = Object.values(errors).every((error) => error === "");

  return { valid, errors };
};
