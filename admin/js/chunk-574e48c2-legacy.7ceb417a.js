(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-574e48c2"],{"6b10":function(e,r,t){},9181:function(e,r,t){},a029:function(e,r,t){"use strict";var a=t("9181"),s=t.n(a);s.a},dc3f:function(e,r,t){"use strict";t.r(r);var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"login-wrapper"},[t("el-form",{ref:"form",staticClass:"login-form",attrs:{rules:e.rules,model:e.form}},[t("h3",[e._v("vue-admin")]),t("el-form-item",{attrs:{prop:"username"}},[t("el-input",{staticClass:"form-input",attrs:{placeholder:"username"},model:{value:e.form.username,callback:function(r){e.$set(e.form,"username",r)},expression:"form.username"}})],1),t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{staticClass:"form-input",attrs:{type:"password",placeholder:"password"},model:{value:e.form.password,callback:function(r){e.$set(e.form,"password",r)},expression:"form.password"}})],1),t("el-form-item",[t("el-button",{staticClass:"form-submit",attrs:{loading:e.loading,type:"primary"},on:{click:e.onSubmit}},[e._v("登录")])],1)],1)],1)},s=[],o=(t("cadf"),t("551c"),t("097d"),t("fa7d")),n={data:function(){return{loading:!1,form:{username:"admin",password:"admin"},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},methods:{onSubmit:function(){var e=this;this.$refs["form"].validate(function(r){r?(e.loading=!0,e.$api.login(e.form).then(function(r){var t=r.data;t.data.token&&(o["a"].setItem("token",t.data.token),e.$router.push("/"))})):e.$message({message:"用户名或密码不正确，请重新输入",type:"warning"})})}}},i=n,u=(t("e330"),t("a029"),t("2877")),l=Object(u["a"])(i,a,s,!1,null,"ec9eded0",null);l.options.__file="login.vue";r["default"]=l.exports},e330:function(e,r,t){"use strict";var a=t("6b10"),s=t.n(a);s.a}}]);