<script lang="ts">
  import { Router, Route, Link } from "svelte-navigator";
  import Voiceover from "./VoiceOver.svelte";
  import NVDA from "./NVDA.svelte";
  import { useFocus } from "svelte-navigator";
  const registerFocus = useFocus();
</script>

<div>
  <h1 use:registerFocus>Lists</h1>
  <Router primary={false}>
    <Route path="Voiceover" component={Voiceover} />
    <Route path="NVDA" component={NVDA} />
  </Router>
  
  <ul class="mt-4">
    <li>Apple</li>
    <li>Pear</li>
    <li>Orange</li>
  </ul>
  <ol class="list-roman">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </ol>
</div>

<style>
  /* your styles go here */
</style>
