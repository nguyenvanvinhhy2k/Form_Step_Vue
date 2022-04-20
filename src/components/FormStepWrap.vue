<template>
    <div class="form-step-wrap">
        <div class="form-step-title">
            <div class="title active">
                <span class="number">1</span>
                <span class="text">About you</span>
            </div>
            <div class="title active">
                <span class="number">2</span>
                <span class="text">About your Company</span>
            </div>
            <div class="title active">
                <span class="number">3  </span>
                <span class="text">Finishing Up</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'FormStepWrap'
    
}
</script>

<style scoped>
.form-step-wrap {
    width: 900px;

    margin: 0 auto;
        border-radius: 12px;
    background-color: #fff;
    box-shadow: 0 4px 10px rgb(0 0 0 / 20%), 6px 12px 20px rgb(0 0 0 / 10%);
    margin-top: 15px;
    padding: 20px;
}
.form-group{
    display: flex;
}
.form-step-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.title{
    padding: 8px 20px;
    border-radius: 12px;
    background-color: #f3f3f3;
}
.number{
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
.active{
    border:2px solid #32683c;
}
</style>