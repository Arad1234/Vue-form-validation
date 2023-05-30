<template>
  <form @submit="submitForm($event)">
    <NameInputs
      :handleInputChange="handleInputChange"
      :firstNameValidationStatus="validationStatus.isFirstNameValid"
      :lastNameValidationStatus="validationStatus.isLastNameValid"
      :firstNameErrorMessage="errorMessages.firstNameErrorMessage"
      :lastNameErrorMessage="errorMessages.lastNameErrorMessage"
    />
    <div class="input-div">
      <label>Email:</label>
      <input
        @input="handleInputChange($event.target)"
        name="email"
        type="text"
      />
      <p v-if="!validationStatus.isEmailValid">
        {{ errorMessages.emailErrorMessage }}
      </p>
    </div>
    <PhoneInputs
      :handleInputChange="handleInputChange"
      :phoneValidationStatus="validationStatus.isPhoneValid"
      :phoneErrorMessage="errorMessages.phoneErrorMessage"
    />
    <div class="input-div">
      <label>Password:</label>
      <input
        type="password"
        name="password"
        @input="handleInputChange($event.target)"
      />
      <p v-if="!validationStatus.isPasswordValid">
        {{ errorMessages.passwordErrorMessage }}
      </p>
    </div>

    <button>Submit</button>
  </form>
</template>

<script>
import NameInputs from "./NameInputs/NameInputs.vue";
import PhoneInputs from "./PhoneInputs/PhoneInputs.vue";
import { FormValidation } from "../helpers/FormValidation";
export default {
  components: { NameInputs, PhoneInputs },
  data() {
    // Initial state.
    return {
      formData: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumberPrefix: "",
        phoneNumber: "",
        password: "",
      },
      // Validation status for each field.
      validationStatus: {
        isFirstNameValid: true,
        isLastNameValid: true,
        isEmailValid: true,
        isPhoneValid: true,
        isPasswordValid: true,
      },

      // Error messages for each invalid input field.
      errorMessages: {
        firstNameErrorMessage: "",
        lastNameErrorMessage: "",
        emailErrorMessage: "",
        phoneErrorMessage: "",
        passwordErrorMessage: "",
      },
    };
  },

  methods: {
    // A function to change values of the fields in the "formData" object.
    handleInputChange(eventTarget) {
      const { name, value } = eventTarget;
      this.formData[name] = value;
    },
    submitForm(event) {
      event.preventDefault();
      // Created a function that handles validation for all input fields.
      const message = FormValidation(
        this.formData,
        this.validationStatus,
        this.errorMessages
      );
      // If the "FormValidation" function returns a "An error occured", there was an error in one of the validation stages.
      if (!message) {
        console.log(this.formData);
      } else {
        console.log(message);
      }
    },
  },
};
</script>

<style>
div.input-div {
  display: flex;
  flex-direction: column;
}

input {
  width: 20vw;
  border-radius: 5px;
  border: 1px solid gray;
}

p {
  color: red;
}
</style>
