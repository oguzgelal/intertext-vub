<script context="module" lang="ts">
  export type DispatcherEvent = {
    packages: [IPackage]
  }
</script>

<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Button from '../core_components/Button.svelte';
  import { CommandTypes, ComponentTypes } from '@intertext/engine';
  import type { IPackage } from '@intertext/engine';

  const dispatch = createEventDispatcher();

  //let packages: IPackage[];
  let packages: [any];
  let pid: number = 0;
  let jsonText: string;
  let invalid: boolean;
  let textarea: HTMLTextAreaElement;

  // evaluate json input
  $: if (!jsonText) { invalid = false; }
  $: if(!!jsonText) {
    try {
      // use eval instead of json.parse for
      // flexible js object-style syntax
      eval(`packages = [${jsonText}];`);
      invalid = false;
      pid = packages.length;
    }
    catch(e) {
      invalid = true;
    }
  }

  // dispatch custom event
  const handleDispatch = (): void => {
    const eventObj: DispatcherEvent = { packages };
    dispatch('dispatch', eventObj);
    jsonText = ""
  }

  // insert string at cursor location
  const insertAtCursor = (str: string) => (e: MouseEvent): void => {
    e.preventDefault();

    if (!jsonText) {
      jsonText = `${str}`;
      return;
    }
  
    if (textarea.selectionStart || textarea.selectionStart == 0) {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const left = jsonText.substring(0, start);
      const right = jsonText.substring(end, jsonText.length);
      let leftPrefix = left ? ',\n' : '';
      if (left && left.trim().substr(-1) === ',') leftPrefix = '';
      jsonText = `${left}${leftPrefix}${str}${right}`;
    } else {
      jsonText += str;
    }
  }

  $: insertCTA = () => (
    insertAtCursor(
      '{ ' +
      'isComponent: true, ' +
      `id: "test_${pid}", ` +
      `type: "${ComponentTypes.CTA}", ` +
      `text: "CTA${pid} "` +
      '}'
    )
  )

  $: insertAlert = () => (
    insertAtCursor(
      '{ ' +
      'isCommand: true, ' +
      `id: "test_${pid}", ` +
      `type: "${CommandTypes.ALERT}", ` +
      `message: "Alert${pid} "` +
      '}'
    )
  )

  $: insertRelation = () => (
    insertAtCursor(
      '{ ' +
      'isLink: true, ' +
      `from: "", ` +
      `to: "", ` +
      `link: "", ` +
      `value: "" ` +
      '}'
    )
  )

</script>

<style>
  .test-dispatcher--wrapper {
    display: flex;
    height: 100%;
  }

  .test-dispatcher--textarea-container {
    flex-grow: 1;
  }

  textarea {
    width: 100%;
    height: 100%;
    padding: 22px;
    font-family: monospace;
  }

  .test-dispatcher--textarea-invalid {
    background-color: lightpink;
  }

  .test-dispatcher--button-container {
    margin-left: 12px;
    display: flex;
    flex-flow: column;
  }
</style>

<div class="test-dispatcher--wrapper">
  <div class="test-dispatcher--textarea-container">
    <textarea
     on:keydown|stopPropagation
     bind:this={textarea}
     bind:value={jsonText}
     placeholder="Enter Packages ..."
     class:test-dispatcher--textarea-invalid={invalid}
    />
  </div>
  <div class="test-dispatcher--button-container">    
    <Button
      type="submit"
      style="margin-bottom: 22px"
      disabled={!jsonText || invalid}
      on:click={handleDispatch}
    >
      Dispatch
    </Button>
  
    <Button on:click={insertCTA()}>+ CTA</Button>
    <Button on:click={insertAlert()}>+ Alert</Button>
    <Button on:click={insertRelation()}>+ Link</Button>
  </div>
</div>
