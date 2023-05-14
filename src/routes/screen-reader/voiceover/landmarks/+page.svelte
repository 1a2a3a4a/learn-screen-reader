<script>
	import Landmarks from '$lib/screen-reader/Landmarks.svelte';
</script>

<svelte:head>
	<title>Voiceover Landmarks</title>
</svelte:head>
<!-- markup (zero or more items) goes here -->
<Landmarks>
	<p>
		Open the rotor by pressing <kbd>VO</kbd> + <kbd>U</kbd>, then use the
		<kbd>←</kbd>
		and <kbd>→</kbd> key to select landmarks.
	</p>
</Landmarks>

<style>
	/* your styles go here */
</style>
