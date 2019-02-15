<template>
  <div class="login-wrapper">
    <el-form ref="form" :rules="rules" class="login-form" :model="form">
      <h3>vue-admin</h3>
      <el-form-item prop="username">
        <el-input class="form-input" v-model="form.username" placeholder="username"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" class="form-input" v-model="form.password" placeholder="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="form-submit" :loading="loading" type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { sessionStorage } from "@/utils/utils";

export default {
  data() {
    return {
      loading: false,
      form: {
        username: "admin",
        password: "admin"
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    onSubmit() {
      this.$refs["form"].validate(valid => {
        if (!valid) {
          this.$message({
            message: "用户名或密码不正确，请重新输入",
            type: "warning"
          });
        } else {
          this.loading = true;

          // 请求登录接口，成功后保存token, 用于其它请求使用
          this.$api.login(this.form).then(res => {
            let _res = res.data;
            if (_res.data.token) {
              sessionStorage.setItem("token", _res.data.token);
              this.$router.push("/");
            }
          });
        }
      });
    }
  }
};
</script>

<style lang="scss">
.login-form {
  .form-input input {
    height: 44px;
    color: #fff;
    border: 0;
    box-shadow: 0px 0px 1px rgba(255, 255, 255, 0.1);
    background-color: rgba(0, 0, 0, 0.1);
  }
}
</style>

<style lang="scss" scoped>
%bg-color {
  background-color: #2d3a4b;
}
.login-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  @extend %bg-color;
}
.login-form {
  width: 400px;
  margin: 120px auto;
  h3 {
    text-align: center;
    color: #fff;
    margin: 0;
    padding: 40px 0;
    font-size: 28px;
  }
}
.form-submit {
  width: 100%;
}
</style>
