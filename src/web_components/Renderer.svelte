<script lang="ts">
  import { onMount } from 'svelte';
  import { fly } from "svelte/transition";
  import type { DispatcherEvent } from "./PackageDispatcher.svelte";
  import PackageDispatcher from "./PackageDispatcher.svelte";
  import RegistryManager from '../engine/RegistryManager';
  
  let registry: RegistryManager;
  let showingPackageDispatcher: boolean;

  // initialize registry on mount
  onMount(() => {
    registry = new RegistryManager();
  });

  // show / hide dispatcher
  const toggleDispatcher = (): void => {
    showingPackageDispatcher = !showingPackageDispatcher
  };

  // handle keydown event
  const hotkeyHandler = (e: KeyboardEvent): void => {
    if (e.key === 'd') {
      toggleDispatcher()
    }
  }

  // code to receive a package
  const receiveDispatch = (e: CustomEvent) => {
    const args: DispatcherEvent = e.detail;
    const { packages } = args;
    registry.insertPackages(packages);
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

<!-- register hotkey -->
<svelte:window on:keydown={hotkeyHandler} />

{#if showingPackageDispatcher}
  
  <!-- display dispatcher -->
  <div
    role="button"
    class="renderer--dispatcher-backdrop"
    on:click={toggleDispatcher}
  />
  <div class="renderer--dispatcher-wrapper" transition:fly={{ y: -200 }}>
    <PackageDispatcher 
      on:dispatch={receiveDispatch}
    />    
  </div>

{:else}
  
  <!-- dispatcher warning -->
  <div class="renderer--dispatcher-notice">
    Press `d` for Dispatcher
  </div>

{/if}
