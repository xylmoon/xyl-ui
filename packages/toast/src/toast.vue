<template>
  <div class="xyl-toast" v-show="visible">{{msg}}</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "XylToast"
})
export default class XylToast extends Vue {
  msg: string = "";
  visible: boolean = false;

  mounted() {
    setTimeout(() => {
      this.visible = false;
      this.$destroy();
      if (this.$el.parentNode) this.$el.parentNode.removeChild(this.$el);
    }, 3000);
  }
}
</script>

