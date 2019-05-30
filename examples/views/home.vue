<template>
  <div class="home">
    <xyl-button msg="那妞" @click="$toast('哈哈呢')"/>
    <xyl-tag msg="标签" @click="$toast('呀呀呀')"/>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  created(){

  }
};
</script>
