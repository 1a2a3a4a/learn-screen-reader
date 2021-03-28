<script>
  import { Link } from "svelte-navigator";
  import { useFocus } from "svelte-navigator";
  const registerFocus = useFocus();
</script>

<!-- markup (zero or more items) goes here -->
<h1 use:registerFocus>404 page</h1>
<p>This is the 404 page</p>
<Link to="/">Go home</Link>

<style>
  /* your styles go here */
</style>
