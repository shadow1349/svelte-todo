<script>
  import Button from "../components/button.svelte";

  import { items } from "../state";

  let todo_items;

  const unsubscribe = items.subscribe((values) => {
    todo_items = values;
  });
</script>

<h1>My Todo List</h1>

<div class="button-container">
  <Button>new todo item</Button>
</div>

<style>
  h1 {
    text-align: center;
  }
  .button-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 50px 50px 50px;
  }
</style>
