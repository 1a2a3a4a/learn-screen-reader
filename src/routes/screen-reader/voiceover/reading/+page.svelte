<script>
	import Reading from '$lib/screen-reader/Reading.svelte';
</script>

<svelte:head>
	<title>Voiceover Reading</title>
</svelte:head>
<Reading>
	<ul>
		<li><kbd>VO</kbd> + <kbd>A</kbd>: Start reading</li>
		<li><kbd>control</kbd>: Stop Reading</li>
		<li><kbd>VO</kbd> + <kbd>→</kbd>: Read next item</li>
		<li><kbd>VO</kbd> + <kbd>←</kbd>: Read previous item</li>
		<li><kbd>VO</kbd> + <kbd>P</kbd>: Read paragraph</li>
		<li><kbd>VO</kbd> + <kbd>S</kbd>: Read sentence</li>
		<li>
			<kbd>VO</kbd> + <kbd>W</kbd>: Read word (press W multiple times to spell words alphabetically
			and phonetically)
		</li>
		<li><kbd>VO</kbd> + <kbd>B</kbd>: Read from top to current location</li>
		<li>
			<kbd>VO</kbd> + <kbd>Home</kbd>: Jump to top of page (on laptop keyboards, <kbd>fn</kbd> +
			<kbd>←</kbd> is Home)
		</li>
		<li>
			<kbd>VO</kbd> + <kbd>End</kbd>: Jump to bottom of page (on laptop keyboards, <kbd>fn</kbd> +
			<kbd>→</kbd> is End)
		</li>
	</ul>
</Reading>
