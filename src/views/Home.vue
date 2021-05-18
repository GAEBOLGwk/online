<template>
  <div class="home">
    <div class="mask"></div>
    <div class="nav-right"></div>
    <div class="nav-left">
      <h1 class="logo">POWEHI</h1>
      <div class="nav">
        <router-link to="/match">开始匹配</router-link>
        <router-link to="/topics">话题小馆</router-link>
        <router-link to="/center">个人中心</router-link>
        <router-link to="/about">关于我们</router-link>
      </div>
    </div>
    <div class="customer">
      <p class="num">2,365,140</p>
      <p >在线用户</p>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="less" scoped>
.home{
   height: calc(100vh);
   background: url('../../static/img/2.jpg'),linear-gradient(to right,#8580FE 20%,#DFA4FF 80%) fixed;
   background-size:100% 100%;
}
.mask{
  height: calc(100vh);
  width: 100%;
  position: absolute;
  background:linear-gradient(to right,#8580FE  20%,#DFA4FF 100%) ;
  opacity: .5;
}
.nav-left{
  width: 200px;
  height: 100%;
  position: relative;
  background: linear-gradient(to right, #8580FE 60%,#464280);
  opacity: .8;
  background-blend-mode: darken;
}
.nav-right{
  width: 150px;
  height: 100%;
  position: relative;
  float: right;
  background: linear-gradient(to left, #CB91DB, #BF88CB 60%,#815C82);
  opacity: .8;
  filter: blur(40px);
}
.logo{ 
    font-size: 40px;
    color: #FBFBFC;
    padding: 30px;
    margin-bottom: 60px;
    z-index: 10;
}
.nav a{
    color: #FBFBFC;
    text-decoration: none;
    margin: 40px 40px;
    font-size: 20px;
    padding: 5px;
    display: block;
    border: dashed 2px white;
    border-radius: 10%;
    z-index: 10;
}
.nav a:hover{
  color: #8580FE;
  background: #FBFBFC;
  border: dashed 2px white;
}
.customer{
  position: absolute;
  bottom: 60px;
  right: 50px;
  color: white;
}
.num{
  font-size: 23px;
}

</style>