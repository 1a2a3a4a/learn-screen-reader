<script>
	import Landmarks from '$lib/screen-reader/Landmarks.svelte';
</script>

<svelte:head>
	<title>NVDA Landmarks</title>
</svelte:head>
<!-- markup (zero or more items) goes here -->
<Landmarks>
	<ul>
		<li>
			Use <kbd>D</kbd> to go the next landmark and <kbd>Shift</kbd> + <kbd>D</kbd>
			to go to the previous landmark.
		</li>
		<li>
			Open the elements list with <kbd>NVDA</kbd> + <kbd>F7</kbd> and use the radio buttons to go the
			landmarks.
		</li>
	</ul>
</Landmarks>

<style>
	/* your styles go here */
</style>
