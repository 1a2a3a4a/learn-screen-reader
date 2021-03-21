<script>
    import { Link, Router } from "svelte-navigator";
</script>
<footer class=" bg-green-300 w-full flex justify-center h-40 w-full">
  <ul class="flex list-none">
    <li>
      <a href="github.com/1a2a3a4a/learn-screen-reader">Source code on github</a>
    </li>
    <li>
      Want to join the project? <a href="mail:to">Mail me</a>
    </li>
    <Router primary={false}>
        <Link to="/sitemap">Sitemap</Link>
    </Router>
  </ul>
</footer>
<style lang="postcss">
  li {
    @apply
    mx-4;
  }
</style>