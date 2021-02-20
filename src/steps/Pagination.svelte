<script>
  import { Router, Link } from "svelte-navigator";
  import { useLocation } from "svelte-navigator";

  export let prevStep;
  export let nextStep;
  const location = useLocation()
  const path = $location.pathname;
  const screenReader = path.substring(path.lastIndexOf('/'));
</script>

<Router primary={false}>
  <nav aria-label="Pagination: next and previous">
    <ol>
      {#if prevStep != undefined}
        <li>
          <Link to={"/" + prevStep + screenReader}>Previous</Link>
        </li>
      {/if}
      {#if nextStep != undefined}
        <li>
          <Link to={"/" + nextStep + screenReader}>Next</Link>
        </li>
      {/if}
    </ol>
  </nav>
</Router>