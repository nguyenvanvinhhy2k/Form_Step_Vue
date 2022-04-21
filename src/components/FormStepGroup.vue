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
            <div class="eror" >
            
              <span style="color: red" v-if="$v.email.$error">
                Email is required
              </span>
                <span  style="color: red" v-if="!$v.email.email"
                > format</span
              >
              <!-- <span style="color: red" v-if="$v.email.email.$error">Email is required</span> -->
            </div>
          </div>

          <div class="form-control" v-if="step === 2">
            <label> Your Company Name </label>
            <input
              type="text"
              v-model="company"
              :class="{ 'is-invalid': $v.company.$error }"
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
              <span style="color: red" v-if="!$v.phone.numeric"
                > number</span
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
              }" style="font-size:18px"
            >
              <option class="select-title" value="Friend" style="font-size:18px">Friend</option>
              <option class="select-title" value="Facebook">FaceBook</option>
              <option class="select-title" value="Website">Website</option>
            </select>
            <div class="eror">
              <span style="color: red;font-size:12px" v-if="$v.from.$error"
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
      <button :disabled="step === 1 " v-if="step !== 3" @click="prevStep" class="btn prev">
        Prev Step
      </button>
      <button v-if="step !== totalSteps" @click="nextStep" class="btn next">
        Next Step
      </button>
      <button style="margin-right:20px" v-if="step === 3" @click.prevent="reset()" class="btn next">
        Reset
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
  numeric,
  email,
} from "vuelidate/lib/validators";

export default {
  name: "FormStepGroup",
  components: {

  },
  data() {
    return {
      step: 1,
      totalSteps: 3,
      isActive: "is-invalid",
    };
  },
  validations: {
    firstname: { required, minLength: minLength(3), maxLength: maxLength(13) },
    email: { required, email },
    company: { required, minLength: minLength(3), maxLength: maxLength(13) },
    phone: { required, numeric },
    from: { required, minLength: minLength(3), maxLength: maxLength(13) },
    accept: { required, minLength: minLength(3), maxLength: maxLength(13) },
  },
  computed: {
    // resett () {
    //   return this.$store.getters.reset
    // },
    steper() {
      return (100 / 3) * this.step + "%";
    },
    formData() {
      return this.$store.state.formData
    },
    firstname: {
                get() {
                    return this.$store.state.formData.firstname
                },
                set(value) {
                    this.$store.commit('setName', value)
                }
            },
        email: {
                get() {
                    return this.$store.state.formData.email
                },
                set(value) {
                    this.$store.commit('setEmail', value)
                }
            },
            company: {
                get() {
                    return this.$store.state.formData.company
                },
                set(value) {
                    this.$store.commit('setCompany', value)
                }
            },
            phone: {
                get() {
                    return this.$store.state.formData.phone
                },
                set(value) {
                    this.$store.commit('setPhone', value)
                }
            },
            from: {
                get() {
                    return this.$store.state.formData.from
                },
                set(value) {
                    this.$store.commit('setFrom', value)
                }
            },
            accept: {
                get() {
                    return this.$store.state.formData.accept
                },
                set(value) {
                    this.$store.commit('setAccept', value)
                }
            },
  },
  methods: {
    nextStep() {
      this.isActive = "active";
      !this.$v.$touch();
      if (this.step === 1 && this.$v.firstname.$error) return false;
      if (this.step === 1 && this.$v.email.$error) return false;
      // this.$v.$touch();
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
        console.log(this.formData);
      }
    },  
    reset () {
      this.step = 1
      this.$v.$reset()
      this.$store.state.formData.firstname = null
      this.$store.state.formData.email =  null
      this.$store.state.formData.company = null
      this.$store.state.formData.phone = null
      this.$store.state.formData.from = null
      this.$store.state.formData.accept = null
    
    }
  },
};
</script>

<style scoped>

</style>
