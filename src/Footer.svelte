<script>
    import { Link, Router } from "svelte-navigator";
</script>
<footer>
  <ul>
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
