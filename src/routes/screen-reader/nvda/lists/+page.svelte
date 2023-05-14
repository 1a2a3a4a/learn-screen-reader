<script>
	import Lists from '$lib/screen-reader/Lists.svelte';
</script>

<svelte:head>
	<title>NVDA Lists</title>
</svelte:head>
<!-- markup (zero or more items) goes here -->
<Lists>
	<ul>
		<li>
			Use <kbd>L</kbd> to go to next list and <kbd>SHIFT + L</kbd> to go to previous items.
		</li>
		<li>
			Use <kbd>I</kbd> and <kbd>SHIFT</kbd> + <kbd>I</kbd> To navigate the list
		</li>
	</ul>
</Lists>

<style>
	/* your styles go here */
</style>
