<template>
  <el-container class="login-container">
    <el-form :model="ruleForm2" :rules="rules2"
             status-icon
             ref="ruleForm2"
             label-position="left"
             label-width="0px"
             class="demo-ruleForm login-page">
      <h3 class="title">经分系统登录</h3>
      <el-form-item prop="username">
        <el-input type="text"
                  v-model="ruleForm2.username"
                  auto-complete="off"
                  placeholder="用户名"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password"
                  v-model="ruleForm2.password"
                  auto-complete="off"
                  placeholder="密码"
        ></el-input>
      </el-form-item>
      <el-checkbox
        v-model="checked"
        class="rememberme"
      >记住密码</el-checkbox>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click="submitForm()" :loading="logining">登录</el-button>
      </el-form-item>
    </el-form>
  </el-container>

</template>

<script>
  export default {
    name:"login",
    data(){
      return {
        logining: false,
        ruleForm2: {
          username: '',
          password: '',
        },
        rules2: {
          username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
          password: [{required: true, message: '请输入密码', trigger: 'blur'}]
        },
        checked: false
      }
    },
    methods: {
      handleSubmit(event){
        this.$refs.ruleForm2.validate((valid) => {
          if(valid){
            this.logining = true;
            if(this.ruleForm2.username === 'admin' &&
              this.ruleForm2.password === '123456'){
              this.logining = false;
              sessionStorage.setItem('user', this.ruleForm2.username);
              this.$router.push({path: '/home'});
            }else{
              this.logining = false;
              this.$alert('用户名或密码错误!', '提示', {
                confirmButtonText: 'ok'
              })
            }

          }else{
            console.log('error submit!');
            return false;
          }
        })
      },
      submitForm: ()=> {
        // 获取远端图片
        axios.get({
          method:'get',
          url:'http://bit.ly/2mTM3nY',
          responseType:'stream'
        })
          .then(function(response) {
            response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
          });
      }
    }
  }
</script>

<style scoped less>
  .login-container {
    width: 100%;
    height: 100%;
  }
  .login-page {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
  label.el-checkbox.rememberme {
    margin: 0px 0px 15px;
    text-align: left;
  }
</style>
