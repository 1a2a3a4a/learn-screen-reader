<script> 
    import { useFocus } from "svelte-navigator";
    const registerFocus = useFocus();
</script>

<style>
    /* your styles go here */
</style>

<h1 use:registerFocus>All steps completed</h1>
<div class="flex flex-col">
    <a href="github.com/1a2a3a4a/learn-screen-reader">Source code on github</a>
    <a href="mail:to">Mail feedback or contact me</a>
</div>