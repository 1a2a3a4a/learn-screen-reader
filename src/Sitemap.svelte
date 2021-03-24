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
<div class="flex flex-col">
    <h1 use:registerFocus>Sitemap</h1>
    <Link to="/">Home</Link>
    <Link to="/sitemap" aria-current="page">Sitemap</Link>
</div>

{#each screenReaders as screenReader}
   <h2>{screenReader}</h2>
   <ul class="pl-8">
    {#each paths as path}
    
        <li>
            <Link to="/{path.name}/{screenReader}">{path.name}</Link>
        </li>    
        {/each}
    </ul>
        
{/each}