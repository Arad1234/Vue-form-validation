// In this function I set the validation status and error messages of each input field and render erros accordingly in a <p> element below each input.
export const FormValidation = (formData, validationStatus, errorMessages) => {
  if (/\d/.test(formData.firstName) || /\d/.test(formData.lastName)) {
    errorMessages.firstNameErrorMessage = "First and last name must not contain numbers!";
    validationStatus.isFirstNameValid = false;

    return "An error occured!";
  }
  if (formData.firstName.trim().length < 2) {
    errorMessages.firstNameErrorMessage = "First name length is too short!";
    validationStatus.isFirstNameValid = false;

    return "An error occured!";
  }
  if (formData.lastName.trim().length < 2) {
    errorMessages.lastNameErrorMessage = "Last name length is too short!";
    validationStatus.isLastNameValid = false;
    return "An error occured!";
  }
  if (formData.firstName.trim().length > 12) {
    errorMessages.firstNameErrorMessage = "First name length is too long!";
    validationStatus.isFirstNameValid = false;
    return "An error occured!";
  }
  if (formData.lastName.trim().length > 12) {
    errorMessages.lastNameErrorMessage = "Last name length is too long!";
    validationStatus.isLastNameValid = false;

    return "An error occured!";
  }
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
    errorMessages.emailErrorMessage = "Invalid email!";
    validationStatus.isEmailValid = false;
    return "Invalid email!";
  }

  if (!/^\d+$/.test(formData.phoneNumber)) {
    errorMessages.phoneErrorMessage = "Phone number contain only numbers!";
    validationStatus.isPhoneValid = false;

    return "An error occured!";
  }

  if (formData.phoneNumber.length !== 7) {
    errorMessages.phoneErrorMessage =
      "Phone number needs to contain exactly 7 digits!";
    validationStatus.isPhoneValid = false;
    return "An error occured!";
  }

  if (
    !/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(
      formData.password
    )
  ) {
    errorMessages.passwordErrorMessage =
      "The password must contain letters, numbers and special characters!";
    validationStatus.isPasswordValid = false;
    return "An error occured!";
  }
};

// validationStatus: {
//   isFirstNameValid: true,
//   isLastNameValid: true,
//   isEmailValid: true,
//   isPhoneValid: true,
//   isPasswordValid: true,
// },
// errorMessages: {
//   firstNameErrorMessage: "",
//   lastNameErrorMessage: "",
//   emailErrorMessage: "",
//   phoneErrorMessage: "",
//   passwordErrorMessage: "",
// },
