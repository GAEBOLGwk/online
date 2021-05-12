<template>
    <div>
        <div class="nav">
            <h1 class="logo">POWEHI</h1>
            <div class="nav-right">
                <router-link to="/">首页</router-link> 
                <router-link to="/match">开始匹配</router-link> 
                <router-link to="/topics">话题小馆</router-link> 
                <router-link to="/center">个人中心</router-link> 
                <router-link to="/about">关于我们</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
.nav{
    height: 60px;
    width: 100%;
    // background: #8580FE;
    background: linear-gradient(to right,#8580FE,#DFA4FF);
}
.logo{
    position: relative;
    font-size: 40px;
    color: #FBFBFC;
    float: left;
    line-height: 60px;
    margin-left: 50px;
}
.nav-right{
    line-height: 60px;
    float: left;
    margin-left: 30px;
}
.nav-right a{
    color: #FBFBFC;
    text-decoration: none;
    margin: 0 15px;
    font-size: 20px;
    padding: 10px;

}
.nav-right a:hover{
    color: #8580FE;
    background: #FBFBFC;
    border-radius: 30px;
    line-height: 60px;

}
</style>