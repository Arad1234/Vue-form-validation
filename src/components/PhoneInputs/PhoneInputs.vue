<template>
  <label>Phone number:</label>

  <div class="phone-inputs-container">
    <div>
      <select
        v-model="selectedPrefix"
        @change="handlePrefixChange()"
      >
        <option
          v-for="prefix in prefixes"
          :key="prefix"
          :value="prefix"
        >
          {{ prefix }}
        </option>
      </select>
    </div>
    <div>
      <input
        type="text"
        name="phoneNumber"
        @input="handleInputChange($event.target)"
      />
    </div>
  </div>
  <p v-if="!phoneValidationStatus">{{ phoneErrorMessage }}</p>
</template>

<script>
export default {
  props: {
    // Props from the "FormComponent"
    handleInputChange: {
      type: Function,
      required: true,
    },
    // Passing the validation status and the error message as props.
    phoneValidationStatus: { type: Boolean, required: true },
    phoneErrorMessage: { type: String, required: true },
  },

  data() {
    // Initial state.
    return {
      prefixes: ["050", "052", "054"],
      selectedPrefix: null,
    };
  },

  methods: {
    handlePrefixChange() {
      console.log(this.phoneValidationStatus);
      // Passing the argument as object with "name" and "value" field of the prefix.
      this.handleInputChange({
        name: "phoneNumberPrefix",
        value: this.selectedPrefix,
      });
    },
  },
};
</script>

<!-- Setting the style to be scoped to that specific component -->
<style scoped>
div.phone-inputs-container {
  display: flex;
  gap: 10px;
}
</style>
