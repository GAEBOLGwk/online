<template>
    <div>
        <div class="commit">
            <form action="///" method="post">
                <textarea  placeholder="请输入想说的话"  class="text"></textarea>
                <button to="/topics" class="back" @click="toback">返回</button>
                <input type="submit" value="创建" class="create" name="message">

            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Graf",
        methods:{
            toback () {
                console.log('---');
                this.$emit('messTotopic');
            }
        }
    }
</script>

<style scoped>
    .commit{
        border:2px white solid;
        border-radius: 50px;
        margin: 0 auto;
        width:400px;
        height: 300px;
        position: relative;
        top:calc(100vh - 600px);
        /*display: flex;*/
        background-color: #8870e0;
    }
    form{
        margin: 0 auto;
        position: absolute;
        top:50px;
        left: 37px;

    }
    .text{

        width: 300px;
        height: 100px;
        display: block;
        background-color: #8870e0;
        border:2px white solid;
        border-radius: 20px;
        padding: 5px;
        color: white;
    }
    .back{
        background-color: white;
        margin: 10px;
        padding: 5px 10px;
        border-radius: 15px;
        color: blue;
        font-weight: 900;
        font-size: 16px;
        font-family: "Microsoft JhengHei";
        border: 0;
        margin-left: 180px;
    }
    .create{
        background-color: white;
        margin: 10px;
        padding: 5px 10px;
        border-radius: 15px;
        color: blue;
        font-weight: 900;
        font-size: 16px;
        font-family: "Microsoft JhengHei";
        border: 0;
    }
</style>