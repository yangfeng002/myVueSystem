<template>
  <el-container class="login-container">
    <el-form :model="ruleFrom" :rules="rules"
             status-icon
             ref="ruleFrom"
             label-position="left"
             label-width="0px"
             class="login-page">
      <h3 class="title">中国移动咪咕互娱经营分析系统</h3>
      <el-form-item prop="username">
        <el-input type="text"
                  v-model="ruleFrom.username"
                  auto-complete="off"
                  placeholder="请输入用户名"
                  clearable
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password"
                  v-model="ruleFrom.password"
                  auto-complete="off"
                  placeholder="请输入密码"
                  clearable
        ></el-input>
      </el-form-item>
      <el-checkbox v-model="checked" class="rememberme">记住密码</el-checkbox>
      <router-link to="/register" class="el-user-register">用户注册</router-link>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%"  @click="handleSubmit()" :loading="logining">登录</el-button>
      </el-form-item>
    </el-form>
  </el-container>

</template>

<script>
export default {
  name: 'login',
  data: function () {
    return {
      logining: false,
      ruleFrom: {
        username: '',
        password: ''
      },
      rules: {
        username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
        password: [{required: true, message: '请输入密码', trigger: 'blur'}]
      },
      checked: false
    }
  },
  methods: {
    handleSubmit (event) {
      console.log(this.$refs);
      this.$refs.ruleFrom.validate((valid) => {
        if (valid) {
          this.logining = true
          if (this.ruleFrom.username === 'admin' &&
              this.ruleFrom.password === '123456') {
              this.logining = false
            sessionStorage.setItem('user', this.ruleFrom.username)
            //去后台请求
           /* this.$ajax({
               method:'post',
               url:''

            })*/
            this.$router.push({path: '/home'})
          }else {
            this.$alert('用户名或密码错误!', '提示', {
              confirmButtonText: 'ok'
            })
            this.logining = false;

          }
        } else {
          console.log('error submit!')
          return false
        }
      })
    }

  }
}
</script>

<style scoped lang="less">
  .login-container{
    width: 100%;
    height: 100%;
    background-image: -moz-linear-gradient(top, #CBEE9F, #D2EFAD); /* Firefox */
    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0,#CBEE9F), color-stop(1, #D2EFAD)); /* Saf4+, Chrome */
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#CBEE9F', endColorstr='#D2EFAD', GradientType='0'); /* IE*/;
    background-size: 100% 100%;
    position: fixed;
    left: 0;
    top:0;
    .login-page {
      -webkit-border-radius: 5px;
      border-radius: 5px;
      margin: 180px auto;
      width: 350px;
      height: 300px;
      padding: 35px 35px 15px;
      background: #fff;
      border: 1px solid #eaeaea;
      box-shadow: 0 0 25px #cac6c6;
      label.el-checkbox.rememberme {
        margin: 0px 0px 15px;
        text-align: left;
      }
      .el-user-register{
        text-decoration: none;
        text-align: right;
        font-size: 14px;
        color: #606266;
        padding: 0 15px;
        cursor: pointer;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 80px;
      }
    }

  }


</style>
