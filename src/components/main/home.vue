<template>
  <!--默认主页内容-->
  <el-container style="height: 500px; border: 1px solid #eee">
    <el-header>header</el-header>
    <el-aside></el-aside>

  </el-container>

</template>

<script>
    export default {
        name: "home",
        data() {
           return {

           }
        }
    }
</script>

<style scoped lang="less">
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
