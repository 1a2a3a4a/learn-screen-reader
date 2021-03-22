<script lang="ts">
  import { Router, Route, Link } from "svelte-navigator";
  import Voiceover from "./VoiceOver.svelte";
  import NVDA from "./NVDA.svelte";
</script>

<div>
  <h1>Tables</h1>
  <Router primary={false}>
    <Route path="Voiceover" component={Voiceover} />
    <Route path="NVDA" component={NVDA} />
  </Router>
  <table class="mt-4">
    <caption>Teddy bear enthusiasts:</caption>
    <tr>
      <th scope="col">Last Name</th>
      <th scope="col">First Name</th>
      <th scope="col">City</th>
    </tr>
    <tr>
      <td>Phoenix</td>
      <td>Imari</td>
      <td>Henry</td>
    </tr>
    <tr>
      <td>Zeki</td>
      <td>Rheyna</td>
      <td>Sova</td>
    </tr>
    <tr>
      <td>Apirka</td>
      <td>Kelly</td>
      <td>Brynn</td>
    </tr>
  </table>
</div>

<style>
  /* your styles go here */
</style>
