<script lang="ts">
  export let type: string;
  export let disabled: boolean;
</script>

<style>
  button {
    margin: 0;
  }
</style>

<button
  on:click
  type={type}
  disabled={disabled}
>
  <slot></slot>
</button>