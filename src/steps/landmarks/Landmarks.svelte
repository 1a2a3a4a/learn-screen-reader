<script lang="ts">
  import { Router, Route, Link } from "svelte-navigator";
  import Voiceover from "./VoiceOver.svelte";
  import NVDA from "./NVDA.svelte";
  import { useFocus } from "svelte-navigator";
  const registerFocus = useFocus();
</script>

<div>
  <h1 use:registerFocus>Landmarks</h1>

  <Router primary={false}>
    <Route path="Voiceover" component={Voiceover} />
    <Route path="NVDA" component={NVDA} />
  </Router>

  <div class="mt-4">
    <section aria-label="First section"><div>First section</div></section>
    <section aria-label="Second section"><div>Second section</div></section>
    <section aria-label="Third section"><div>Third section</div></section>
    <aside aria-label="Aside">Aside element</aside>
  </div>
</div>

<style>
  /* your styles go here */
</style>
