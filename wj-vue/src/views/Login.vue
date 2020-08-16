<template>
<body id="poster">
  <el-form class="login-container" label-position="left" label-width="0px">
    <h3 class="login_title">系统登录</h3>
    <el-form-item>
      <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item style="width: 100%">
      <el-button
        type="primary"
        style="width: 100%;background: #505458;border: none"
        @click="login"
      >登录</el-button>
    </el-form-item>
  </el-form>
</body>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
      responseResult: [],
    };
  },
  methods: {
    login() {
      this.$axios({
        method: "post",
        url: "api/login",
        data: {
          username: this.loginForm.username,
          password: this.loginForm.password,
        },
      })
        .then((res) => {
          if (res.data.code === 200) {
            this.$message({
              message: "登录成功",
              type: "success",
              duration: 1000
            });
            window.sessionStorage.setItem("userToken", this.loginForm);
            this.$router.push({ path: "/" });
          } else {
            this.$message({
              message: "账号或密码错误",
              type: "error",
              duration: 1000
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
#poster {
  background: url("../assets/bakImg.jpg") no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
}
body {
  margin: 0px;
}
.login-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 90px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.login_title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
</style>

