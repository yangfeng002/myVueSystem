<template>
  <!--挂载在app元素内-->
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped lang="less">
#app {
  font-family:"Microsoft YaHei","微软雅黑",Arial,sans-serif,"Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
