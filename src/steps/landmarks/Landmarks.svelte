<script lang="ts">
  import { Router, Route, Link } from "svelte-navigator";
  import Voiceover from "./VoiceOver.svelte";
  import NVDA from "./NVDA.svelte";
</script>

<div>
  <h1>Landmarks</h1>

  <p>There are some landmarks on this page.</p>
  <Router primary={false}>
    <Route path="Voiceover" component={Voiceover} />
    <Route path="NVDA" component={NVDA} />
  </Router>
  <div>
    <section aria-label="First section">This is a section</section>
    <section aria-label="Second section">This is a section</section>
    <section aria-label="Third section">This is a section</section>
    <aside aria-label="aside landmark">This is an aside</aside>
  </div>
</div>

<style>
  /* your styles go here */
</style>
