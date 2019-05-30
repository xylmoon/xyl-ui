<template>
  <div class="xyl-button" @click="handleClick">{{msg}}</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "XylButton"
})
export default class XylButton extends Vue {
  @Prop() private msg!: string;
  handleClick(evt: Event) {
    this.$emit("click", evt);
  }
}
</script>

