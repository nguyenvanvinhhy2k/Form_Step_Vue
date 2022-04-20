<template>
  <div id="app">
    <div class="form-step">
      <FormStepGroup />
      <!-- <TestVuelidate /> -->
      <!-- <FormStepBtn /> -->
    </div>
  </div>
</template>
<script>
import FormStepGroup from "./components/FormStepGroup.vue";
// import TestVuelidate from "./components/TestVuelidate.vue";

// import FormStepBtn from './components/FormStepBtn.vue'

export default {
  name: "App",
  components: {
    // TestVuelidate,
    FormStepGroup,
    // FormStepBtn
  },
};
</script>

<style>
#app {
  font-family: Poppins, sans-serif;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.step-form {
  width: 900px;
  margin: 0 auto;
}
</style>
