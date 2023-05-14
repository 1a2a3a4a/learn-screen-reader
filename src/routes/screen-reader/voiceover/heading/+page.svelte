<script>
	import Heading from '$lib/screen-reader/Heading.svelte';
</script>

<svelte:head>
	<title>Voiceover Heading</title>
</svelte:head>

<!-- markup (zero or more items) goes here -->
<Heading>
	<ul>
		<li>
			Use <kbd>VO</kbd> + <kbd>command</kbd> + <kbd>H</kbd> to go to next heading and <kbd>VO</kbd>
			+ <kbd>SHIFT</kbd> + <kbd>command</kbd> + <kbd>H</kbd> to go to previous heading.
		</li>
		<li>
			Open the rotor by pressing <kbd>VO</kbd> + <kbd>U</kbd>, then use the <kbd>←</kbd> and
			<kbd>→</kbd> key to select headings
		</li>
	</ul>
</Heading>

<style>
	/* your styles go here */
</style>
