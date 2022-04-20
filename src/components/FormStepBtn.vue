<template>
    <div class="form-step-btn">
    <button class="btn prev">PREVIOUS</button>
    <button @click="nextStep" class="btn next">NEXT</button>
    </div>
</template>

<script>
export default {
    name:'FormStepBtn',
methods:{

}
   
}
</script>

<style scoped>
.form-step-btn{
    margin-top:50px
}
.btn{
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
    transition: box-shadow .35s ease-out;
}
.prev{
    background-color: #72e6b1;
    margin: 0 20px;
}
.next{
    background-color:#1e68cf;
}
</style>