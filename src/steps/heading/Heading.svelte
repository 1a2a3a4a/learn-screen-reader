<script lang="ts">
  import { Router, Route, Link } from "svelte-navigator";
  import Voiceover from './VoiceOver.svelte';
  import NVDA from './NVDA.svelte';
</script>

<style>

</style>

<div>
<Route path="Voiceover" component="{Voiceover}"/>
<Route path="NVDA" component="{NVDA}"/>
<h1>Mercury</h1>
<h2>Venus</h2>
<h3>Mars</h3>
<h4>Tellus</h4>
</div>