<script>
	import Tables from '$lib/screen-reader/Tables.svelte';
</script>

<svelte:head>
	<title>NVDA Tables</title>
</svelte:head>
<!-- markup (zero or more items) goes here -->

<Tables>
	<ul>
		<li>
			To navigate to the next table in a page, press the <kbd>T</kbd> key.
		</li>
		<li>
			To navigate between cells, hold down <kbd>Ctrl</kbd> + <kbd>Alt</kbd> and use
			<kbd>↑</kbd>/<kbd>↓</kbd>/<kbd>←</kbd>/<kbd>→</kbd>. <br /> Note that the table headings are read
			for each cell.
		</li>
	</ul>
</Tables>

<style>
	/* your styles go here */
</style>
