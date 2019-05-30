<template>
  <div class="about">
    <Xyl-button msg="我是按钮" @click="$toast('我是提示框')"/>
    <Xyl-tag msg="我是标签"  />
    <div @click="$toast('我是提示框')">
      123123123213
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  
})
export default class index extends Vue {
   created(){

   }

}
</script>
