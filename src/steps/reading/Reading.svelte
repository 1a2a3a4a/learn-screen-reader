<script lang="ts">
    import { Router, Route, Link } from "svelte-navigator";
    import Voiceover from "./VoiceOver.svelte";
    import NVDA from "./NVDA.svelte";
  </script>
  <div>
    <h1>Reading</h1>
    <Router primary={false}>
      <Route path="Voiceover" component={Voiceover} />
      <Route path="NVDA" component={NVDA} />
    </Router>
    
    <p>The quick brown fox jumps over the lazy dog</p>
  </div>