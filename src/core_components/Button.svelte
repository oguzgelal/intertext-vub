<script lang="ts">
  export let type: string;
  export let disabled: boolean;
  export let style: string;
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
  style={style}
>
  <slot></slot>
</button>