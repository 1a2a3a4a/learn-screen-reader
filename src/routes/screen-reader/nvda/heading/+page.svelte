<script>
	import Heading from '$lib/screen-reader/Forms.svelte';
</script>

<svelte:head>
	<title>NVDA Headings</title>
</svelte:head>
<!-- markup (zero or more items) goes here -->
<Heading>
	<ul>
		<li>
			Use the <kbd>H</kbd> key to navigate to next heading and <kbd>Shift</kbd> + <kbd>H</kbd> for previous
			heading.
		</li>
		<li>You can also use numbers 1 to 5 to navigate through heading levels 1 to 5.</li>
		<li>
			Open the elements list with <kbd>NVDA</kbd> + <kbd>F7</kbd> and use the radio buttons to go the
			headings.
		</li>
	</ul>
</Heading>

<style>
	/* your styles go here */
</style>
