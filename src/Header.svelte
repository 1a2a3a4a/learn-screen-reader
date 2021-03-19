<script>
  import { Router, Link } from "svelte-navigator";
  import { useLocation } from "svelte-navigator";

</script>

<header>
  <Router primary={false}>
      <Link to="/" aria-current={window.location.pathname === "/" ? "page" : ""}>Home</Link>
  </Router> 
</header>

<style>
  /* your styles go here */
</style>
