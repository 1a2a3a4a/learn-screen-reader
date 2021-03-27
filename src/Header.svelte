<script>
  import { Router, Link } from "svelte-navigator";
</script>

<header class=" w-full pt-4 mb-4 bg-dark  h-14 self-start">
  <Router>
      <Link class="text-light hover:text-blue-300 ml-12" to="/" aria-current={window.location.pathname === "/" ? "page" : ""}>Home</Link>
  </Router> 
</header>

<style>
  /* your styles go here */
</style>
