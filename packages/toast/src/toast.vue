<template>
  <div class="xyl-toast" v-show="visible">{{msg}}</div>
</template>

<script >
export default {
  name: "xyl-toast",
  data() {
    return {
      visible: false,
      msg: ""
    };
  },
  mounted() {
    setTimeout(() => {
      this.visible = false;
      this.$destroy();
      if (this.$el.parentNode) this.$el.parentNode.removeChild(this.$el);
    }, 3000);
  }
};
</script>

