<template>
  <div class="xyl-button">
      {{msg}}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: "XylButton",
})
export default class XylButton extends Vue {
  @Prop() private msg!: string;
}
</script>

