<template>
  <div class="">
    <!-- <StepForm /> -->
    <div class="progress-boder">
      <div class="proress-content" :style="'width:' + steper"></div>
    </div>
    <!-- <FormStepWrap /> -->
    <div class="form-step-wrap">
      <div class="form-step-title">
        <div class="title" :class="{ active: step }">
          <span class="number">1</span>
          <span class="text">About you</span>
        </div>
        <div class="title" :class="{ active: step === 2 || step === 3 }">
          <span class="number">2</span>
          <span class="text">About your Company</span>
        </div>
        <div class="title" :class="{ active: step === 3 }">
          <span class="number">3</span>
          <span class="text">Finishing Up</span>
        </div>
      </div>
    </div>

    <!-- <FormStepWrap /> -->

    <div class="form-group">
      <div class="form-step-group">
        <form>
          <div class="form-control" v-if="step === 1">
            <label> Full name </label>
            <input
              type="text"
              v-model="firstname"
              :class="{ 'is-invalid': $v.firstname.$error }"
            />
            <div class="eror">
              <span style="color: red" v-if="$v.firstname.$error"
                >Please fill the name</span
              >
            </div>
          </div>
          <div class="form-control" v-if="step === 1">
            <label> Your Email </label>
            <input
              type="email"
              v-model="email"
              :class="{ 'is-invalid': $v.email.$error }"
            />
            <div class="eror">
              <span style="color: red" v-if="!$v.email.email"
                >Should be in email format</span
              >
              <span style="color: red" v-if="$v.email.$error">
                Email is required
              </span>
              <!-- <span style="color: red" v-if="$v.email.email.$error">Email is required</span> -->
            </div>
          </div>

          <div class="form-control" v-if="step === 2">
            <label> Your Company Name </label>
            <input
              type="text"
              v-model="company"
              :class="{
                'is-invalid': $v.company.$error,
                'is-valid': $v.company.$invalid,
              }"
            />

            <div class="eror">
              <span style="color: red" v-if="$v.company.$error"
                >Company is required</span
              >
            </div>
          </div>

          <div class="form-control" v-if="step === 2">
            <label> Number of Employees </label>
            <input
              type="text"
              v-model="phone"
              :class="{
                'is-invalid': $v.phone.$error,
                'is-valid': $v.phone.$invalid,
              }"
            />

            <div class="eror">
              <span style="color: red" v-if="$v.phone.$error"
                >Phone is required</span
              >
            </div>
          </div>

          <div class="form-control" v-if="step === 3">
            <label> From Where did you hear about us </label>

            <select
              class="select_wrap"
              v-model="from"
              :class="{
                'is-invalid': $v.from.$error,
              }"
            >
              <option class="select-title" value="Friend">Friend</option>
              <option class="select-title" value="Facebook">FaceBook</option>
              <option class="select-title" value="Website">Website</option>
            </select>
            <div class="eror">
              <span style="color: red" v-if="$v.from.$error"
                >From is required</span
              >
            </div>
          </div>

          <div class="check-term" v-if="step === 3">
            <input
              type="checkbox"
              class="checkbox"
              v-model="accept"
              :class="{
                'is-invalid': !$v.accept.$error,
                'is-valid': $v.accept.$invalid,
              }"
            />
            <label> Checked of Employees </label>

            <div class="eror">
              <span style="color: red; display: flex" v-if="$v.accept.$error"
                >The field is required!</span
              >
            </div>
          </div>
        </form>
      </div>
    </div>

    <div class="form-step-btn">
      <button :disabled="step === 1" @click="prevStep" class="btn prev">
        Prev Step
      </button>
      <button v-if="step !== totalSteps" @click="nextStep" class="btn next">
        Next Step
      </button>
      <button v-if="step === 3" @click="sendRequired" class="btn next">
        Send
      </button>
    </div>
    <!-- <FormStepBtn nextStep /> -->
  </div>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  between,
  email,
} from "vuelidate/lib/validators";
// import FormStepBtn from "./FormStepBtn.vue"
// import StepForm from "./StepForm.vue"
// import FormStepWrap from "./FormStepWrap.vue"
export default {
  name: "FormStepGroup",
  components: {
    // FormStepBtn,
    // StepForm,
    // FormStepWrap,
  },
  data() {
    return {
      firstname: "",
      email: null,
      company: null,
      phone: null,
      from: null,
      accept: null,
      step: 1,
      totalSteps: 3,
      isActive: "active",
    };
  },
  validations: {
    firstname: { required, minLength: minLength(3), maxLength: maxLength(13) },
    email: { required, email },
    company: { required, minLength: minLength(3), maxLength: maxLength(13) },
    phone: { required, between: between(1, 10000000000000) },
    from: { required, minLength: minLength(3), maxLength: maxLength(13) },
    accept: { required, minLength: minLength(3), maxLength: maxLength(13) },
  },
  computed: {
    steper() {
      return (100 / 3) * this.step + "%";
    },
  },
  methods: {
    nextStep() {
      this.isActive = "active";
      this.$v.$touch();
      if (this.step === 1 && this.$v.firstname.$error) return false;
      if (this.step === 1 && this.$v.email.$error) return false;
      this.$v.$touch();
      if (this.step === 2 && this.$v.company.$error) return false;
      if (this.step === 2 && this.$v.phone.$error) return false;

      this.step++;
    },
    prevStep() {
      this.step--;
    },
    sendRequired() {
      this.$v.$touch();
      if (this.step === 3 && this.$v.from.$error) return false;
      if (this.step === 3 && this.$v.accept.$error) {
        return false;
      } else {
        console.log([
          { name: this.firstname },
          { email: this.email },
          { company: this.company },
          { phone: this.phone },
          { from: this.from },
          { accept: this.accept },
        ]);
      }
    },
  },
};
</script>

<style scoped>
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
}
.is-invalid {
  border: 1px solid #32683c;
}
</style>
