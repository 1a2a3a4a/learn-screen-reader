<script lang="ts">
  import { Router, Route, Link } from "svelte-navigator";

  import Start from "./steps/Start.svelte";
  import StartScreenReader from "./steps/startScreenReader/StartScreenReader.svelte";
  import Heading from "./steps/heading/Heading.svelte";
  import NotFound from "./NotFound.svelte";
  import Pagination from "./steps/Pagination.svelte";
  import Landmarks from "./steps/landmarks/Landmarks.svelte";
  import Lists from "./steps/lists/Lists.svelte";
  import Tables from "./steps/tables/Tables.svelte";
  import Forms from "./steps/forms/Forms.svelte";

  const paths = [
    { name: "start", component: StartScreenReader },
    { name: "heading", component: Heading },
    { name: "landmarks", component: Landmarks },
    { name: "lists", component: Lists },
    { name: "tables", component: Tables },
    { name: "forms", component: Forms },
  ];
</script>

<main>
  <Router>
    {#each paths as path, index}
      <Route path="{path.name}/*">
        <svelte:component this={path.component} />
        <Pagination
          prevStep={paths[index - 1]?.name}
          nextStep={paths[index + 1]?.name}
        />
      </Route>
    {/each}
    <Route path="/">
      <Start />
    </Route>
    <Route component={NotFound} />
  </Router>
</main>

<style>
  /* your styles go here */
</style>
