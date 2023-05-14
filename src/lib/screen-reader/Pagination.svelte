<script lang="ts">
	export let prevLink: string;
	export let prevStepName: string;
	export let nextLink: string;
	export let nextStepName: string;
</script>

<ul>
	<a href={prevLink}>previous step {prevStepName}</a>
	<a href={nextLink}>next step {nextStepName}</a>
</ul>
