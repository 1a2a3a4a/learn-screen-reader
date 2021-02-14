<script>
  import HeadingStep from './HeadingStep.svelte'
</script>

<style>
  /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->
<div>
<ul>
  <li>
  Use the <code>H</code> key to navigate to next heading and <code>Shift + H</code> for previous heading.
  </li>
  <li>
  You can also use numbers 1 to 5 to navigate through heading levels 1 to 5. 
  </li>
  <li>
  You can list headings with <code>Shift + F6</code> and use the radio buttons to go the headings
  </li>
</ul>
  <HeadingStep/>
</div>