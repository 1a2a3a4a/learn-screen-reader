<script lang="ts">
  import { Router, Link } from "svelte-navigator";
  import { ScreenReader} from "../types/screenReader";
  import { useFocus } from "svelte-navigator";
  const registerFocus = useFocus();
</script>

<style>
  /* your styles go here */
</style>

<div>
  <h1 use:registerFocus>Which screen reader are you using?</h1>
  <ul>
    <li><Link to="start/{ScreenReader.Voiceover}">Voiceover</Link></li>
    <li><Link to="start/{ScreenReader.NVDA}">NVDA</Link></li>
  </ul>
</div>
