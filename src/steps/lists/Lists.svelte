<script lang="ts">
  import { Router, Route, Link } from "svelte-navigator";
  import Voiceover from "./VoiceOver.svelte";
  import NVDA from "./NVDA.svelte";
</script>

<div>
  <h1>Lists</h1>
  <Router primary={false}>
    <Route path="Voiceover" component={Voiceover} />
    <Route path="NVDA" component={NVDA} />
  </Router>
  <ul>
    <li>Apple</li>
    <li>Pear</li>
    <li>orange</li>
  </ul>
  <ol>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </ol>
</div>

<style>
  /* your styles go here */
</style>
