<script lang="ts">
  import { Router, Route, Link } from "svelte-navigator";
  import Voiceover from "./VoiceOver.svelte";
  import NVDA from "./NVDA.svelte";
</script>

<style>
  /* your styles go here */
</style>

<div>
  <h1>Forms</h1>
  <Router primary={false}>
    <Route path="Voiceover" component={Voiceover} />
    <Route path="NVDA" component={NVDA} />
  </Router>

  <form id="form1" method="post" action="">
    <p>
      <label for="textfield2">First Name:</label>
      <input type="text" name="textfield2" id="textfield2" />
    </p>
    <p>
      <label for="label">Last Name:</label>
      <input type="text" name="textfield2" id="label" />
    </p>

    <fieldset>
      <legend>Choose a car:</legend>
      <br />
      <input id="pt" type="radio" name="radio" value="ptcruiser" />
      <label for="pt">Chrysler PT Cruiser</label>
      <br />
      <input id="stratus" type="radio" name="radio" value="stratus" />
      <label for="stratus">Dodge Stratus</label>
      <br />
      <input id="pinto" type="radio" name="radio" value="pinto" />
      <label for="pinto">Ford Pinto</label>
    </fieldset>
    <p>
      <label for="favcity">Which is your favorite city?</label>
      <select id="favcity" name="select">
        <option value="1">Amsterdam</option>
        <option value="3">Interlaken</option>
        <option value="4">Moscow</option>
        <option value="5">Dresden</option>
        <option value="2">New York</option>
      </select>
    </p>
    <p>
      <input type="submit" value="Submit" />
    </p>
  </form>
</div>
