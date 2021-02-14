<script lang="ts">
  import { next } from '../stores/stepStore';
  import { setNVDA, setVoiceover } from '../stores/screenReaderStore';

  function onVoiceover(): void {
    setVoiceover();
    next();
  }

  function onNVDA(): void {
    setNVDA();
    next();
  }

</script>

<style>
  /* your styles go here */
</style>

<div>
  <h1>Pick a screen reader</h1>
  <ul>
    <li><button on:click={onVoiceover}>Voiceover</button></li>
    <li><button on:click={onNVDA}>NVDA Windows</button></li>
  </ul>
</div>
