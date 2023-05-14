<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import SelectStep from '$lib/screen-reader/SelectStep.svelte';
	import { ScreenReader } from '$lib/types/screenReader';
	import { getContext } from 'svelte';

	const screenReaders = Object.values(ScreenReader);
	const paths: string[] = getContext('paths');
	let currentScreenreader: ScreenReader,
		prevStep: string,
		nextStep: string,
		currentStepIndex: number,
		path: string,
		isLastStep: boolean;
	function updateNavigation() {
		path = $page.url.pathname;
		const lastindexOfSlash = path.lastIndexOf('/');
		const currentStepName = path.substring(lastindexOfSlash + 1);

		const pathWithoutStep = path.substring(0, lastindexOfSlash);
		currentScreenreader = pathWithoutStep.substring(
			pathWithoutStep.lastIndexOf('/') + 1
		) as ScreenReader;
		currentStepIndex = paths.indexOf(currentStepName);
		prevStep = paths[currentStepIndex - 1] ?? null;
		nextStep = paths[currentStepIndex + 1] ?? null;

		isLastStep = currentStepIndex == paths.length - 1;
	}

	updateNavigation();

	afterNavigate(() => {
		updateNavigation();
	});
</script>

<div>
	<slot />
	<ul class="mt-6">
		{#if currentStepIndex != -1}
			{#if currentStepIndex != 0}
				<a href="/screen-reader/{currentScreenreader}/{prevStep}">Previous step: {prevStep}</a>
			{/if}

			{#if !isLastStep}
				<a href="/screen-reader/{currentScreenreader}/{nextStep}">Next step: {nextStep}</a>
			{:else}
				<a href="/screen-reader/completed">Learn more</a>
			{/if}
		{/if}
	</ul>

	{#if screenReaders.includes(currentScreenreader)}
		<SelectStep currentScreenReader={currentScreenreader} />
	{/if}
</div>

<style>
	/* your styles go here */
</style>
