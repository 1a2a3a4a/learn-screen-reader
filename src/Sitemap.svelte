<script>
  import { Router, Link } from "svelte-navigator";
  import { getContext } from "svelte";
  import { useLocation } from "svelte-navigator";

  import { ScreenReader} from "./types/screenReader";
  var paths = getContext("paths");
  var screenReaders = Object.values(ScreenReader)
</script>

<style>
    /* your styles go here */
</style>
<h1>Sitemap</h1>
<Link to="/">Home</Link>
<Link to="/sitemap" aria-current="page">Sitemap</Link>

{#each screenReaders as screenReader}
   {screenReader}
    {#each paths as path}
    <ul>
        <li>
            <Link to="/{path.name}/{screenReader}">{path.name}</Link>
        </li>    
    </ul>
    {/each}
    
{/each}