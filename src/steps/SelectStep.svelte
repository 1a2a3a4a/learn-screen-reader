<script>
  import { Router, Link } from "svelte-navigator";
  import { getContext } from "svelte";
  import { useLocation } from "svelte-navigator";

  const location = useLocation();
  const currentPath = $location.pathname;
  const screenReader = currentPath.substring(currentPath.lastIndexOf("/"));
  const step = currentPath.substring(
    currentPath.indexOf("/") + 1,
    currentPath.lastIndexOf("/")
  );
  var paths = getContext("paths");
  let isExpanded = false;
  let selectStepButtonElement;

  function handleClick() {
    isExpanded = !isExpanded;
  }
  
  function clickOutside(node, onEventFunction) {
    const handleClick = (event) => {
      var path = event.composedPath();
      if (!path.includes(node) && !path.includes(selectStepButtonElement)) {
        onEventFunction();
      }
    };

    document.addEventListener("click", handleClick);

    return {
      destroy() {
        document.removeEventListener("click", handleClick);
      },
    };
  }
  function handleKeydown(event) {
    if (event.key === "Escape") {
      isExpanded = false;
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />
<div class="relative w-full box-border">
  <button
    bind:this={selectStepButtonElement}
    class=" bg-white
  hover:bg-secondary
  focus:bg-secondary
  p-2
  border-4
  border-gray-900
  border-solid"
    on:click={handleClick}
    aria-haspopup="true"
    aria-expanded={isExpanded}
  >
    Select step
  </button>
  {#if isExpanded}
    <ul use:clickOutside={handleClick} class="p-1">
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
    @apply mt-0.5
    list-none
    absolute
    w-32
    bg-white
    box-border
    bottom-0
    left-24
    border-4
    border-gray-900
    border-solid
    md:inset-auto;
  }
</style>
