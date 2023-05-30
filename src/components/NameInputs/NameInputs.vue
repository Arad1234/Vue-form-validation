<template>
  <div class="input-div">
    <label>First Name:</label>
    <input
      type="text"
      name="firstName"
      @input="handleInputChange($event.target)"
    />
    <p v-if="!firstNameValidationStatus">{{ firstNameErrorMessage }}</p>
  </div>

  <div class="input-div">
    <label>Last Name:</label>
    <input
      name="lastName"
      type="text"
      @input="handleInputChange($event.target)"
    />
  </div>
  <p v-if="!lastNameValidationStatus">{{ lastNameErrorMessage }}</p>
</template>

<script>
export default {
  props: {
    handleInputChange: {
      type: Function,
      required: true,
    },
    // Getting the validation status and error messages of the first and last name as props.
    firstNameValidationStatus: { type: Boolean, required: true },
    lastNameValidationStatus: { type: Boolean, required: true },
    firstNameErrorMessage: { type: String, required: true },
    lastNameErrorMessage: { type: String, required: true },
  },
};
</script>
