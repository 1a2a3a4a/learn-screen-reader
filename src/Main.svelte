<script lang="ts">
  import { Router, Route, Link } from "svelte-navigator";
  import { setContext } from "svelte";
  import SelectStep from "./steps/SelectStep.svelte";
  import Start from "./steps/Start.svelte";
  import StartScreenReader from "./steps/startScreenReader/StartScreenReader.svelte";
  import Reading from "./steps/Reading/Reading.svelte";
  import Heading from "./steps/heading/Heading.svelte";
  import NotFound from "./NotFound.svelte";
  import Sitemap from "./Sitemap.svelte";
  import Pagination from "./steps/Pagination.svelte";
  import Landmarks from "./steps/landmarks/Landmarks.svelte";
  import Lists from "./steps/lists/Lists.svelte";
  import Tables from "./steps/tables/Tables.svelte";
  import Forms from "./steps/forms/Forms.svelte";
  import Completed from "./steps/completed/Completed.svelte";

  const paths = [
    { name: "start", component: StartScreenReader },
    { name: "reading", component: Reading },
    { name: "heading", component: Heading },
    { name: "landmarks", component: Landmarks },
    { name: "lists", component: Lists },
    { name: "tables", component: Tables },
    { name: "forms", component: Forms },
    { name: "completed", component: Completed },
  ];
  setContext("paths", paths);
</script>

<main class="px-28 w-full">
  <Router>
    {#each paths as path, index}
      <Route path="{path.name}/*">
        <svelte:component this={path.component} />
        <Pagination
          prevStep={paths[index - 1]?.name}
          nextStep={paths[index + 1]?.name}
        />
        {#if index === paths.length - 1}
          <Link to={"/"}>Go to start</Link>
        {/if}
        <SelectStep />
      </Route>
    {/each}
    <Route path="/">
      <Start />
    </Route>
    <Route component={NotFound} />
    <Route component={Sitemap} />
  </Router>
</main>

<style>
  /* your styles go here */
</style>
