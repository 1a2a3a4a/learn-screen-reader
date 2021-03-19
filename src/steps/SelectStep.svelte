<script>
  import { Router, Link } from "svelte-navigator";
  import { getContext } from "svelte";
  import { useLocation } from "svelte-navigator";

  const location = useLocation();
  const currentPath = $location.pathname;
  const screenReader = currentPath.substring(currentPath.lastIndexOf("/"));
  const step = currentPath.substring(currentPath.indexOf("/") + 1, currentPath.lastIndexOf("/"));
  var paths = getContext("paths");
  let isExpanded = false;
  function handleClick() {
    isExpanded = !isExpanded;
  }
</script>

<div>
  <button on:click={handleClick} aria-haspopup="true" aria-expanded={isExpanded}
    >Select step</button
  >
  {#if isExpanded}
    <ul>
      {#each paths as path}
        <li>
          <Link
            to="/{path.name}/{screenReader}"
            aria-current={step === path.name ? "page" : ""}>{path.name}</Link
          >
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  /* your styles go here */
</style>
