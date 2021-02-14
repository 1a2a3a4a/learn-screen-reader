<script lang="ts">
  import type { SvelteComponent } from 'svelte';
  import { stepStore } from '../stores/stepStore';
  import Heading from '../steps/heading/NVDA.svelte';
  import StartScreenReader from '../steps/startScreenReader/NVDA.svelte';

  let step : typeof SvelteComponent = null;
  stepStore.subscribe((value : Number) => {
    switch(value) {
      case 0:
        step = null;
        break;
      case 1:
        step = StartScreenReader;
        break;
      case 2:
        step = Heading;
        break;
      default: 
        break;
    }
  })
</script>

<style>
  /* your styles go here */
</style>

<div>
  <svelte:component this={step}/>
</div>
