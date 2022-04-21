<template>
  
      <div class="progress-boder">
        <div class="proress-content">

        </div>
      </div>
</template>

<script>
export default {
  name: 'StepForm',
  data() {
    return {
      formData :{

      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.progress-boder{
   
    margin:0 auto;
    width: 940px;
    height: 20px;
    background-color: white;
    border-radius: 12px;
    overflow: hidden;
}
.proress-content{
    height: 100%;
    width: 37%;
    background-color: #437fe8;
    border-radius: 12px;
    transition: width .5s ease;
}
</style>
