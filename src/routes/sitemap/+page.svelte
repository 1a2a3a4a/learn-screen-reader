<script>
	import { getContext } from 'svelte';
	import { ScreenReader } from '$lib/types/screenReader';
	var paths = getContext('paths');
	var screenReaders = Object.values(ScreenReader);
</script>

<svelte:head>
	<title>Sitemap</title>
</svelte:head>
<div class="flex flex-col">
	<h1>Sitemap</h1>
	<a href="/">Home</a>
	<a href="/sitemap" aria-current="page">Sitemap</a>
</div>

{#each screenReaders as screenReader}
	<h2>{screenReader}</h2>
	<ul class="pl-8">
		{#each paths as path}
			<li>
				<a href="/screen-reader/{screenReader}/{path}">{path}</a>
			</li>
		{/each}
	</ul>
{/each}

<div>
	<a href="/screen-reader/completed">completed</a>
</div>

<style>
	/* your styles go here */
</style>
