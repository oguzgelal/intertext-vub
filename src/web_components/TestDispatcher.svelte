<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Button from './../core_components/Button.svelte'
  const dispatch = createEventDispatcher();

  let json: object;
  let jsonText: string;
  let invalid: boolean;

  $: if (!jsonText) { invalid = false; }
  $: if(!!jsonText) {
    try {
      // use eval instead of json.parsing for
      // flexible js object-style syntax
      eval(`json = ${jsonText};`)
      invalid = false;
    }
    catch(e) {
      invalid = true;
    }
  }

  const handleDispatch = (): void => {
    dispatch('dispatch', { json });
  }
</script>

<style>
  .test-dispatcher--wrapper {
    display: flex;
    flex-flow: column;
    height: 100%;
  }

  .test-dispatcher--textarea-container {
    flex-grow: 1;
  }

  textarea {
    width: 100%;
    height: 100%;
  }

  .test-dispatcher--textarea-invalid {
    background-color: lightpink;
  }

  .test-dispatcher--button-container {
    margin-top: 12px;
  }
</style>

<form
  class="test-dispatcher--wrapper"
  on:submit={handleDispatch}
>
  <div class="test-dispatcher--textarea-container">
    <textarea
     on:keydown|stopPropagation
     bind:value={jsonText}
     placeholder="Enter JSON ..."
     class:test-dispatcher--textarea-invalid={invalid}
    />
  </div>
  <div class="test-dispatcher--button-container">    
    <Button
      type="submit"
      disabled={!jsonText || invalid}
    >
      Dispatch
    </Button>
  </div>
</form>
