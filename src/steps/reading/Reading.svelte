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
    
    <p class="my-4 text-lg">It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way — in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only.</p>
  </div>