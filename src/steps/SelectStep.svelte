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

<div class="relative w-full box-border">
  <button class=" bg-white
  hover:bg-secondary
  focus:bg-secondary
  p-2
  border-4
  border-gray-900
  border-solid" 
    on:click={handleClick} aria-haspopup="true" aria-expanded={isExpanded}>
    Select step
  </button>
  {#if isExpanded}
    <ul>
      {#each paths as path}
        <li class="flex">
          <Link
            class=" 
            px-2 
            py-1 
            w-full
            focus:bg-gray-100
            "
            to="/{path.name}/{screenReader}"
            aria-current={step === path.name ? "page" : ""}>{path.name}</Link
          >
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style lang="postcss">
  ul {
    @apply 
    mt-0.5
    list-none
    absolute
    w-32
    bg-white
    box-border;
  }
</style>
