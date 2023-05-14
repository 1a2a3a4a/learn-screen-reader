<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { setContext } from 'svelte';
	import { page } from '$app/stores';
	const paths = ['start', 'reading', 'heading', 'landmarks', 'lists', 'tables', 'forms'];

	setContext('paths', paths);
	console.log($page);
</script>

<svelte:head>
	<title>{$page.data.title}</title>
</svelte:head>

<div class="flex flex-col justify-between bg-primary min-h-full">
	<div class="flex flex-col content-center items-center">
		<Header />
		<main class="max-w-5xl">
			<slot />
		</main>
	</div>
	<Footer />
</div>
