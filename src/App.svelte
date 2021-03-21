<script lang="ts">
	import Tailwind from './Tailwind.svelte';
	import Header from './Header.svelte';
	import Main from './Main.svelte';
	import Footer from './Footer.svelte';
</script>
<div class="flex flex-col justify-between bg-green-100 h-screen">
	<Tailwind/>
	<div class="flex flex-col content-center items-center">
		<Header/>
		<Main/>
	</div>
	<Footer/>
</div>
