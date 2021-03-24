<script lang="ts">
  import { Router, Route, Link } from "svelte-navigator";
  import Voiceover from "./VoiceOver.svelte";
  import NVDA from "./NVDA.svelte";
  import { useFocus } from "svelte-navigator";
  const registerFocus = useFocus();
</script>

<style>
  /* your styles go here */
</style>

<div>
  <h1 use:registerFocus>Forms</h1>
  <Router primary={false}>
    <Route path="Voiceover" component={Voiceover} />
    <Route path="NVDA" component={NVDA} />
  </Router>

  <form class="mt-4" id="form1" method="post" action="">
    <p class="my-2">
      <label for="textfield2">First Name:</label>
      <input autocomplete="name" type="text" name="textfield2" id="textfield2" />
    </p>
    <p class="my-2">
      <label for="label">Last Name:</label>
      <input autocomplete="family-name" type="text" name="textfield2" id="label" />
    </p>

    <fieldset class="my-4 p-2 border-dashed border-black border-2">
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
    <fieldset class="my-4 p-2 border-dashed border-black border-2">
      <legend>Check one or multiple colors you like</legend>
      <br />
      <input id="Blue" type="checkbox" name="checkbox" value="Blue" />
      <label for="Blue">Blue</label>
      <br />
      <input id="Purple" type="checkbox" name="checkbox" value="Purple" />
      <label for="Purple">Purple</label>
      <br />
      <input id="Indigo" type="checkbox" name="checkbox" value="Indigo" />
      <label for="Indigo">Indigo</label>
    </fieldset>
    <p class="my-4 flex flex-col">
      <label class="my-2" for="favcity">Which is your favorite city?</label>
      <select class="w-32" id="favcity" name="select">
        <option value="1">Amsterdam</option>
        <option value="3">Interlaken</option>
        <option value="4">Moscow</option>
        <option value="5">Dresden</option>
        <option value="2">New York</option>
      </select>
    </p>
    <p>
      <input class="p-2 mt-2" type="submit" value="Submit" />
    </p>
  </form>
</div>
