<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import { getContext } from 'svelte';

	export let currentScreenReader: string | undefined;

	const currentPath = $page.url.pathname;
	const screenReader = currentPath.substring(currentPath.lastIndexOf('/'));
	const step = currentPath.substring(currentPath.indexOf('/') + 1, currentPath.lastIndexOf('/'));
	const paths: string[] = getContext('paths');

	let isExpanded = false;
	let selectStepButtonElement: HTMLElement;

	function handleClick() {
		isExpanded = !isExpanded;
	}

	function clickOutside(node: Node, onEventFunction: any) {
		const handleClick = (event: any) => {
			var path = event.composedPath();
			if (!path.includes(node) && !path.includes(selectStepButtonElement)) {
				onEventFunction();
			}
		};

		document.addEventListener('click', handleClick);

		return {
			destroy() {
				document.removeEventListener('click', handleClick);
			}
		};
	}
	function handleKeydown(event: any) {
		if (event.key === 'Escape') {
			isExpanded = false;
		}
	}

	afterNavigate(() => {
		isExpanded = false;
	});
</script>

<svelte:window on:keydown={handleKeydown} />
<div class="relative w-full box-border mt-6">
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
					<a
						class=" 
              px-2
              py-1
              w-full
              focus:bg-gray-100
              "
						href="/screen-reader/{currentScreenReader}/{path}"
						aria-current={step === path ? 'page' : 'false'}>{path}</a
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
