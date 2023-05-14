<script>
	import Forms from '$lib/screen-reader/Forms.svelte';
</script>

<svelte:head>
	<title>NVDA forms</title>
</svelte:head>

<!-- markup (zero or more items) goes here -->
<Forms>
	<ul>
		<li><kbd>Tab</kbd> and <kbd>Shift</kbd> + <kbd>Tab</kbd>: Navigate through form controls.</li>
		<li><kbd>Space</kbd> to select and deselect checkboxes.</li>
		<li><kbd>↑</kbd>/<kbd>↓</kbd> to Select from a group of radio buttons.</li>
		<li>
			<kbd>↑</kbd>/<kbd>↓</kbd> or the first letter of an option: Select an option in a combo box
		</li>
		<li><kbd>Enter</kbd> to submit the form.</li>
	</ul>
</Forms>

<style>
	/* your styles go here */
</style>
