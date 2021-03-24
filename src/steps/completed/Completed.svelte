<script> 
    import { useFocus } from "svelte-navigator";
    const registerFocus = useFocus();
</script>

<style>
    /* your styles go here */
</style>

<h1 use:registerFocus>All steps completed</h1>
<h2>NVDA references</h2>
<ul>
    <li>
        <a href="https://webaim.org/articles/nvda/">Webaim</a>
    </li>
    <li>
        <a href="https://dequeuniversity.com/screenreaders/nvda-keyboard-shortcuts">Deque University</a>
    </li>
</ul>
<h2>Voiceover references</h2>
<ul>
  
    <li>
        <a href="https://webaim.org/articles/voiceover/">Webaim</a>
    </li>
</ul>
<div class="mt-10 flex flex-col">
    <a href="https://github.com/1a2a3a4a/learn-screen-reader">Source code on github</a>
    <a href="mail:to">Mail feedback or contact me</a>
</div>