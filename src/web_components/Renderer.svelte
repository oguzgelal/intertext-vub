<script lang="ts">
  import { onMount } from 'svelte';
  import { fly } from "svelte/transition";
  import type { IComponent } from '../engine';
  import { RegistryManager, ComponentTypes } from '../engine'
  
  import type { DispatcherEvent } from "./PackageDispatcher.svelte";
  import PackageDispatcher from "./PackageDispatcher.svelte";
  import Button from './../core_components/Button.svelte';
  
  let registry: RegistryManager;
  let stage: IComponent[] = [];
  let showingPackageDispatcher: boolean;

  // initialize registry on mount
  onMount(() => {
    registry = new RegistryManager({
      debug: true,
      onStageUpdate: newStage => {
        console.log(`Stage Updated`, newStage)
        stage = newStage
      }
    });
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
    registry.insert(packages);
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

<!-- dispatcher -->
{#if showingPackageDispatcher}
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
  <div class="renderer--dispatcher-notice">
    Press `d` for Dispatcher
  </div>
{/if}

<!-- TODO: refactor -->
<!-- TODO: fix type issue -->
<!-- render staged items -->
{#each stage as component (component.id)}

  <!-- cta -->
  {#if component.type === ComponentTypes.CTA}
    <Button>{component.text}</Button>
  {/if}

{/each}