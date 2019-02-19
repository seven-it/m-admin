<template>
  <quill-editor 
    v-model="content"
    ref="myQuillEditor"
    :options="editorOption"
    >
  </quill-editor>
</template>
<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import { quillEditor } from "vue-quill-editor";

export default {
  components: {
    quillEditor
  },
  data() {
    return {
      content: "hello world",
      editorOption: {}
    };
  }
};
</script>

<style>
.quill-editor {
  background-color: #fff;
}
.ql-container {
  height: 200px;
}
</style>
