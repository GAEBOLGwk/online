<template>
  <div>
    <div class="nav">
      <router-link to="/match">开始匹配</router-link>
      <router-link to="/topics">话题小馆</router-link>
      <router-link to="/center">个人中心</router-link>
      <router-link to="/about">关于我们</router-link>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="less" scoped>
.nav{
  height: 725px;
  background: url('../../static/img/2.jpg'),100%,70% linear-gradient(to right,#8580FE,#DFA4FF) ;
  // background-repeat: no-repeat fixed;
  background-size:100% 100%;
}
</style>