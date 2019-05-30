<template>
  <div class="xyl-tag" @click="handleClick">{{msg}}</div>
</template>

<script>
export default {
  name: "xyl-tag",
  props: ["msg"],
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    }
  }
};
</script>

