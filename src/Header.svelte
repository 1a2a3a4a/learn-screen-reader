<script>
  import { Router, Link } from "svelte-navigator";
  import { useLocation } from "svelte-navigator";

</script>

<header class=" w-full pt-4 bg-blue-200 h-14 self-start">
  <Router primary={false}>
      <Link class="ml-12" to="/" aria-current={window.location.pathname === "/" ? "page" : ""}>Home</Link>
  </Router> 
</header>

<style>
  /* your styles go here */
</style>
