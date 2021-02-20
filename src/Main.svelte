<script lang="ts">
  import { screenReaderStore } from "./stores/screenReaderStore";
  import { stepStore } from "./stores/stepStore";
  import { ScreenReader } from "./types/screenReader";
  import Start from "./steps/Start.svelte";
  import Pagination from "./steps/Pagination.svelte";
  import Voiceover from "./screenreaders/Voiceover.svelte";
  import NVDA from "./screenreaders/NVDA.svelte";
  import StartScreenReader from './steps/startScreenReader/StartScreenReader.svelte'
  import Heading from './steps/heading/Heading.svelte';
  import NotFound from './NotFound.svelte';
  import { Router, Route, Link } from "svelte-navigator";
  let step;
  stepStore.subscribe((value: Number) => {
    step = value;
  });

  let component;
  screenReaderStore.subscribe((screenReader) => {
    switch (screenReader) {
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

<main>
  <Router> 
    <Route path="start/*">
      <StartScreenReader/>
    </Route>
    <Route path="heading/*">
      <Heading/>
    </Route>
    <Route path="/">
      <Start/>
    </Route>
    
    <Route component="{NotFound}" />
  </Router>

</main>

<style>
  /* your styles go here */
</style>
