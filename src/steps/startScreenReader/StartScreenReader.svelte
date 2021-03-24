<script lang="ts">
  import { Router, Route, Link } from "svelte-navigator";
  import Voiceover from './VoiceOver.svelte';
  import NVDA from './NVDA.svelte';
  import { useFocus } from "svelte-navigator";
  const registerFocus = useFocus();
</script>

<style>
  /* your styles go here */
</style>

<div>
  <h1 use:registerFocus>Starting and stopping</h1> 
  <Router primary={false}>
    <Route path="Voiceover" component="{Voiceover}"/>
    <Route path="NVDA" component="{NVDA}"/>
  </Router>
</div>