<template>
<div>
    <div class="commit">
        <form action="" method="post">
            <textarea  placeholder="请输入小馆名称..."  class="text"></textarea>
            <button  class="back" @click="back">返回</button>
            <input type="submit" value="创建" class="create" name="item" @click="add">
        </form>
    </div>
</div>
</template>

<script>
    export default {
        name: "ItemCreate",
        methods:{
            back () {
                this.$emit('back');
                console.log('要回小馆了');
            },
            add () {
                this.$router.replace('topics')
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
        padding: 10px;
        color: white;
    }
    .back{
        background-color: white;
        margin: 10px;
        padding: 5px 10px;
        border-radius: 15px;
        color: #8870e0;
        font-weight: 900;
        font-size: 16px;
        border: 0;
        margin-left: 180px;

    }
    .create{
        background-color: white;
        margin: 10px;
        padding: 5px 10px;
        border-radius: 15px;
        color: #8870e0;
        font-weight: 900;
        font-size: 16px;

        border: 0;
    }
</style>