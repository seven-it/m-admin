<template>
<div>
	<my-upload field="img"
    @crop-success="cropSuccess"
    v-model="show"
		:width="300"
		:height="300"
    :noRotate="false"
		url=""
		img-format="png">
  </my-upload>
	<img class="picture" :src="imgDataUrl">
  <el-button type="primary" @click="toggleShow">设置头像</el-button>
</div>
  
    
</template>
<script>
import myUpload from "vue-image-crop-upload";
export default {
  components: {
    myUpload
  },
  data() {
    return {
      show: false,
      params: {
        token: "123456798",
        name: "avatar"
      },
      headers: {
        smail: "*_~"
      },
      imgDataUrl:
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547616696602&di=099dc3aa76c177248f0f8f1df1b48bca&imgtype=0&src=http%3A%2F%2Fhiphotos.baidu.com%2Ffeed%2Fpic%2Fitem%2F83025aafa40f4bfb445d83ff084f78f0f636188f.jpg"
    };
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    },
    cropSuccess(imgDataUrl) {
      this.imgDataUrl = imgDataUrl;
    }
    // cropUploadSuccess(jsonData, field) {},
    // cropUploadFail(status, field) {}
  }
};
</script>
<style lang="scss" scoped>
.picture {
  width: 100px;
  height: 100px;
  border-radius: 50px;
  display: block;
  margin-bottom: 20px;
}
</style>
