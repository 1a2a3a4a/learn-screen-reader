<script>
  import { next, prev } from '../stores/stepStore';

  function onPrev() {
    prev();
  }

  function onNext() {
    next();
  }
</script>

<nav aria-label="Pagination: next and previous">
  <ol>
    <li>
      <button on:click={onPrev}>Previous</button>
    </li>
    <li>
      <button on:click={onNext}>Next</button>
    </li>
  </ol>
</nav>