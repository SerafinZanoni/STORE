export const ValidateLoginForm = (formData: {
  email: string;
  password: string;
}) => {
  let valid = true;
  const errors = { email: "", password: "" };

  if (!formData.email) {
    errors.email = "Email is required.";
    valid = false;
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Invalid email address.";
    valid = false;
  }

  if (!formData.password) {
    errors.password = "Password is required.";
    valid = false;
  } else if (formData.password.length < 8) {
    errors.password = "Password must be at least 8 characters.";
    valid = false;
  }

  return { valid, errors };
};
