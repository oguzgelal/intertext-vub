<script>
  import { onMount } from 'svelte';
  import createEngine from '../engine/engine.wasm';

  let engine;

  onMount(() => {
    createEngine({}).then(({ instance }) => {
      engine = instance.exports;
      console.log('Sum: ', engine.Sum(2, 3))
    })
  });
</script>
