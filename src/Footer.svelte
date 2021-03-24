<script>
  import { Link, Router } from "svelte-navigator";
</script>

<footer
  class="mt-20 bg-green-300 w-full flex justify-center items-center h-40 w-full"
>
  <ul class="flex list-none">
    <li>
      <a target="_blank" href="http://github.com/1a2a3a4a/learn-screen-reader"
        >Source code on github <span class="sr-only">, Opens in new tab</span
        ></a
      >
    </li>
    <li>
      Want to join the project? <a href="mail:to">Send a mail to me</a>
    </li>
    <Router>
      <Link to="/sitemap">Sitemap</Link>
    </Router>
  </ul>
</footer>

<style lang="postcss">
  li {
    @apply mx-4;
  }
</style>
