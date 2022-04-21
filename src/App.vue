<template>
  <div id="app">
    <div class="form-step">
      <FormStepGroup />
    
    </div>
  </div>
</template>
<script>
import FormStepGroup from "./components/FormStepGroup.vue";

export default {
  name: "App",
  components: {
 
    FormStepGroup,

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
.form-group {
  width: 900px;
  margin: 0 auto;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 4px 10px rgb(0 0 0 / 20%), 6px 12px 20px rgb(0 0 0 / 10%);
  margin-top: 15px;
  padding: 20px;
}
.form-step-group label {
  display: block;
  color: #000;
  font-size: 16px;
  display: block;
  margin-bottom: 6px;
}
input {
  width: 96%;
  color: #586068;
  font-size: 16px;

  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  outline: 3px solid transparent;
  transition: all 0.2s ease;
}
.form-control {
  margin-bottom: 20px;
  margin-top: 10px;
  text-align: left;
}
.message {
  color: #aa4651;
  font-size: 12px;
  margin-top: 8px;
}
.select_wrap {
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 6px;
  position: relative;
  cursor: pointer;
  background-color: white;
}
.select-title {
  display: block;
  width: 100%;
  height: 100%;
  padding: 10px 12px;
  font-size: 18px;
}

.checkbox {
  width: 20px;
  float: left;
}
.check-term label {
  text-align: left;
  margin-top: 25px;
}
/* FormStepBtn */

.form-step-btn {
  margin-top: 50px;
}
.btn {
  display: inline-block;
  border: unset;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  color: #fff;
  padding: 8px 24px;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 1px 1px 10px rgb(0 0 0 / 40%);
  transition: box-shadow 0.35s ease-out;
}
.prev {
  background-color: #72e6b1;
  margin: 0 20px;
}
.next {
  background-color: #1e68cf;
}
.active {
  border-radius: 1px solid red;
}

/* Step form*/

.progress-boder {
  margin: 0 auto;
  width: 940px;
  height: 20px;
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
}
.proress-content {
  height: 100%;
  width: 37%;
  background-color: #437fe8;
  border-radius: 12px;
  transition: width 0.5s ease;
}

/* FormStepWrap */

.form-step-wrap {
  width: 900px;

  margin: 0 auto;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 4px 10px rgb(0 0 0 / 20%), 6px 12px 20px rgb(0 0 0 / 10%);
  margin-top: 15px;
  padding: 20px;
}

.form-step-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.title {
  padding: 8px 20px;
  border-radius: 12px;
  background-color: #f3f3f3;
}
.number {
  display: inline-block;
  font-size: 16px;
  width: 24px;
  height: 24px;
  line-height: 24px;
  border-radius: 50%;
  color: #f7f7f7;
  background-color: #969899;
  margin-right: 8px;
}
.text {
  color: #8f9294;
  font-size: 16px;
  font-weight: 550;
}
.active {
  border: 2px solid #32683c;
}
.eror {
  margin-top: 10px;
  font-size:12px
}
.valid{
    border: 1px solid #32683c;
}
.is-invalid {
  border: 1px solid red;
}
</style>
