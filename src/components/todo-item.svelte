<script>
  import Checkbox from "./checkbox.svelte";

  let checked = false;
</script>

<div class="todo-item">
  <Checkbox bind:checked />
</div>

<style>
  .todo-item {
    border: 2px solid #000000;
    padding: 1rem 2rem;
    border-radius: 10px;
    position: relative;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
</style>
