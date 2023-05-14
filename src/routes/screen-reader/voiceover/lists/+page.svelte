<script>
	import Lists from '$lib/screen-reader/Lists.svelte';
</script>

<svelte:head>
	<title>Voiceover Lists</title>
</svelte:head>
<!-- markup (zero or more items) goes here -->
<Lists>
	<ul>
		<li>
			<kbd>VO</kbd> + <kbd>command</kbd> + <kbd>X</kbd> to go to next list and <kbd>VO</kbd> +
			<kbd>SHIFT</kbd>
			+ <kbd>command</kbd> + <kbd>X</kbd> to go to previous list
		</li>
		<li>
			Open the rotor by pressing <kbd>VO</kbd> + <kbd>U</kbd>, then use the
			<kbd>←</kbd>
			or <kbd>→</kbd> key to select lists.
		</li>
	</ul>
</Lists>

<style>
	/* your styles go here */
</style>
