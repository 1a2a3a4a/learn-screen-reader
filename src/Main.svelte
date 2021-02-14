<script lang="ts">
  import { screenReaderStore } from './stores/screenReaderStore';
  import { stepStore } from './stores/stepStore';
  import { ScreenReader } from './types/screenReader';
  import Start from './steps/Start.svelte';
  import Pagination from './steps/Pagination.svelte';
  import Voiceover from './screenreaders/Voiceover.svelte';
  import NVDA from './screenreaders/NVDA.svelte';

  let step;
  stepStore.subscribe((value : Number) => {
    step = value;
  });

  let component;
  screenReaderStore.subscribe(screenReader => {
    switch(screenReader){
      case ScreenReader.Voiceover:
        component = Voiceover;
        break;
      case ScreenReader.NVDA:
        component = NVDA;
        break;
      default:
        break;
    }
   });
</script>

<style>
  /* your styles go here */
</style>

<main>
    {#if step == 0}
       <Start/>
    {:else}
      <svelte:component this={component}/>
      <Pagination/>
    {/if}
</main>
