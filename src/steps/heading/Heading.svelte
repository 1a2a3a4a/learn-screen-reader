<script lang="ts">
  import { Router, Route, Link } from "svelte-navigator";
  import Voiceover from "./VoiceOver.svelte";
  import NVDA from "./NVDA.svelte";
</script>

<div>
  <h1>Navigate headings</h1>
  <Router primary={false}>
    <Route path="Voiceover" component={Voiceover} />
    <Route path="NVDA" component={NVDA} />
  </Router>
  <h2>Mercury</h2>
  <h3>Venus</h3>
  <h4>Mars</h4>
  <h5>Tellus</h5>
</div>

<style>
</style>
