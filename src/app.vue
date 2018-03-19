<template>
<div class="hello">欢迎创建 ‘{{ msg }}’ - {{ version }}</div>
</template>

<script>
export default {
    data(){
        return {
            version:"1.0",
            msg:"vue-env-webpack"
        }
    }
}

</script>

<style scoped>
.hello{
    display: inline-block;
    color:#666;
    text-shadow:1px 2px #ccc;
    height: 40px;
    line-height: 40px;
    padding:0 15px;
    text-align: center;
    border:1px solid #d5d5d5;
    background: #fff;
    border-radius: 8px;
    margin:15px 20px;
}

</style>