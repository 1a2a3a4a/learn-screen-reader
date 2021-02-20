<script lang="ts">
  import { Router, Link } from "svelte-navigator";
</script>

<style>
  /* your styles go here */
</style>

<div>
  <h1>Pick a screen reader</h1>
  <ul>
    <li><Link to="start/Voiceover">Voiceover</Link></li>
    <li><Link  to="start/NVDA">NVDA</Link></li>
  </ul>
</div>
