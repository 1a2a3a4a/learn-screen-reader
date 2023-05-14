<script>
	import Reading from '$lib/screen-reader/Reading.svelte';
</script>

<svelte:head>
	<title>NVDA Reading</title>
</svelte:head>
<Reading>
	<ul>
		<li><kbd>NVDA</kbd> + <kbd>↓</kbd>: Start reading at the current position</li>
		<li><kbd>Ctrl</kbd>: Stop reading</li>
		<li><kbd>NVDA</kbd> + <kbd>↑</kbd>: Reread current line</li>
		<li><kbd>Ctrl</kbd> + <kbd>←</kbd>/<kbd>→</kbd>: Previous/next word</li>
		<li><kbd>↑</kbd>/<kbd>↓</kbd>:Previous/Next line</li>
		<li><kbd>←</kbd>/<kbd>→</kbd>: Previous/Next character</li>
	</ul>
</Reading>
