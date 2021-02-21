<script lang="ts">
  import { Router, Route, Link } from "svelte-navigator";
  import Voiceover from './VoiceOver.svelte';
  import NVDA from './NVDA.svelte';
</script>

<style>
  /* your styles go here */
</style>

<div>
  <h1>Landmarks</h1>
  
  <p>There are some landmarks on this page.</p>
  <Router primary={false}>
    <Route path="Voiceover" component="{Voiceover}"/>
    <Route path="NVDA" component="{NVDA}"/>
  </Router>
  <section aria-label="Section label">This is a section</section>

</div>