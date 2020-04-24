export const authFields = {
  confirm_password: "Cormfirmed Password",
  email: "Email",
  first_name: "First Name",
  last_name: "Last Name",
  password: "Password",
  username: "Username"
};

export const isAllValid = errorMessages => {
  const nonEmptyStates = errorMessages.filter(value => value !== "");

  if (nonEmptyStates.length > 0) {
    return false;
  }

  return true;
};

export const isAllFilled = inputValues => {
  const nonEmptyStates = Object.values(inputValues).filter(
    value => value === ""
  );

  if (nonEmptyStates.length > 0) {
    return false;
  }

  return true;
};

export const validateEmail = email => {
  const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const errorMessages = re.test(email) ? "" : "Please provide a valid email";

  return errorMessages;
};

export const validateText = (value, name) => {
  const re = /\W/;
  const errorMessage = re.test(value)
    ? `Please provide a valid ${authFields[name]}`
    : "";

  return errorMessage;
};
