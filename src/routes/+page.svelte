<script lang="ts">
	import { ScreenReader } from '$lib/types/screenReader';
</script>

<svelte:head>
	<title>Practice Accessibility</title>
</svelte:head>

<div>
	<h1>Which screen reader are you using?</h1>
	<ul>
		<li><a class="text-2xl" href="screen-reader/{ScreenReader.Voiceover}/start">Voiceover</a></li>
		<li><a class="text-2xl" href="screen-reader/{ScreenReader.NVDA}/start">NVDA</a></li>
	</ul>
</div>

<style>
	/* your styles go here */
</style>
