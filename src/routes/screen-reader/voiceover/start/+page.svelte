<script>
	import Start from '$lib/screen-reader/Start.svelte';
</script>

<svelte:head>
	<title>Voiceover Get Started</title>
</svelte:head>
<Start>
	<p>
		Enable Voiceover on Mac by going to System Preferences then Accessibility then Voiceover and
		click the checkbox to enable voiceover.
	</p>
	<p>You can start (or stop) VoiceOver by pressing <kbd>Command</kbd> + <kbd>F5</kbd>.</p>

	<p>
		The VoiceOver Activation keys (called <strong>VO</strong> keys) are <kbd>control</kbd> +
		<kbd>option</kbd>
		or <kbd>CAPS</kbd>and will be referenced simply as <kbd>VO</kbd>. For example, <kbd>VO</kbd> +
		<kbd>H</kbd>
		(or <kbd>control</kbd> + <kbd>option</kbd> + <kbd>H</kbd>) will open the VoiceOver Help menu.
	</p>

	<p>
		Voiceover works best with Safari and also make sure that if you are using safari then enable
		accessibility by going to Advanced then Accessibility and press Tab to highlight each item on
		webpage.
	</p>
</Start>

<style>
	/* your styles go here */
</style>
