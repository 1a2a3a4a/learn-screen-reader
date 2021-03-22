<script>
  import { Router, Link } from "svelte-navigator";
  import { useLocation } from "svelte-navigator";

  export let prevStep;
  export let nextStep;
  const location = useLocation();
  const path = $location.pathname;
  const screenReader = path.substring(path.lastIndexOf("/"));
</script>

<Router primary={false}>
  <ul class="my-4 flex list-none">
    {#if prevStep != undefined}
      <li class="mr-4">
        <Link to={"/" + prevStep + screenReader}>Previous</Link>
      </li>
    {/if}
    {#if nextStep != undefined}
      <li>
        <Link to={"/" + nextStep + screenReader}>Next</Link>
      </li>
    {/if}
  </ul>
</Router>

<style lang="postcss">
</style>
