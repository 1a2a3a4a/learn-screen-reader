<script>
	import Tables from '$lib/screen-reader/Tables.svelte';
</script>

<svelte:head>
	<title>Voiceover Tables</title>
</svelte:head>
<!-- markup (zero or more items) goes here -->

<Tables>
	<p>
		Open the rotor by pressing <kbd>VO</kbd> + <kbd>U</kbd>, then use the
		<kbd>←</kbd>
		or <kbd>→</kbd> key to select tables.
	</p>
	<ul>
		<li>
			Read row from VO cursor location to end of row<kbd>VO</kbd> + <kbd>R</kbd>
		</li>
		<li>
			Move up or down in a column <kbd>VO</kbd> + <kbd>↑</kbd> or <kbd>VO</kbd> + <kbd>↓</kbd>
		</li>
		<li>Move across a row <kbd>VO</kbd> + <kbd>←</kbd> or <kbd>VO</kbd> + <kbd>→</kbd></li>
	</ul>
</Tables>

<style>
	/* your styles go here */
</style>
