<script lang="ts">
  import { fly } from "svelte/transition";
  import TestDispatcher from "./TestDispatcher.svelte";
  import type { DispatcherEvent } from "./TestDispatcher.svelte";
  
  let showingTestDispatcher: boolean;

  const toggleDispatcher = (): void => {
    showingTestDispatcher = !showingTestDispatcher
  };

  const hotkeyHandler = (e: KeyboardEvent): void => {
    if (e.key === 'd') {
      toggleDispatcher()
    }
  }

  const receiveDispatch = (e: CustomEvent) => {
    const args: DispatcherEvent = e.detail;
    const { json } = args;
  }
</script>

<style>
  .renderer--dispatcher-wrapper {
    width: 820px;
    height: 100%;
    position: absolute;
    top: 0;
    padding: 22px;
  }

  .renderer--dispatcher-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, .2);
  }

  .renderer--dispatcher-notice {
    font-size: 14px;
    color: gray;
    position: fixed;
    left: 4px;
    bottom: 4px;
    user-select: none;
  }
</style>

<!-- dispatcher warning -->
<div class="renderer--dispatcher-notice">
  Press `d` for Dispatcher
</div>

<!-- register hotkey -->
<svelte:window on:keydown={hotkeyHandler} />

<!-- display dispatcher -->
{#if showingTestDispatcher}
  <div
    role="button"
    class="renderer--dispatcher-backdrop"
    on:click={toggleDispatcher}
  />
  <div class="renderer--dispatcher-wrapper" transition:fly={{ y: -200 }}>
    <TestDispatcher on:dispatch={receiveDispatch} />    
  </div>
{/if}
