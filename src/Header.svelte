<script>
  import { Router, Link } from "svelte-navigator";
</script>

<header class=" w-full pt-4 mb-4 bg-dark  h-14 self-start">
  <Router>
      <Link class="p-2 focus:ring-white p-1 text-white hover:text-primary ml-12" to="/" aria-current={window.location.pathname === "/" ? "page" : ""}>Home</Link>
  </Router> 
</header>

<style>
  /* your styles go here */
</style>
