<template>
  <div class="xyl-tag" @click="handleClick">{{msg}}</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "XylTag"
})
export default class XylTag extends Vue {
  @Prop() private msg!: string;
  handleClick(evt: Event) {
    this.$emit("click", evt);
  }
}
</script>

