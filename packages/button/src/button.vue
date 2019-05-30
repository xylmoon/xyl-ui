<template>
  <div class="xyl-button" @click="handleClick">{{msg}}</div>
</template>

<script>
export default {
  name: "xyl-button",
  props: ["msg"],
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    }
  }
};
</script>