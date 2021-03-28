<script>
  import { Link, Router } from "svelte-navigator";
</script>

<footer
  class="min-h-footer bg-third w-full flex justify-center items-center h-40 w-full"
>
  <ul class="md:flex-row flex-col flex list-none">
    <li>
      <a target="_blank" href="http://github.com/1a2a3a4a/learn-screen-reader"
        >Source code on github <span class="sr-only">, Opens in new tab</span
        ></a
      >
    </li>
    <li>
      <a href="mail:to">Send a mail to me</a>
    </li>
    <li>
      <Router>
        <Link class="hover:text-blue-100 text-white" to="/sitemap">Sitemap</Link>
      </Router>
    </li>
  </ul>
</footer>

<style lang="postcss">
  li {
    @apply 
    mx-4
    md:my-0 
    my-2;
  }

  a {
    @apply hover:text-blue-100
    text-white;
  }
</style>
