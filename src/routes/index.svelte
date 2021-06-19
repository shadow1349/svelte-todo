<script>
  import TodoItem from "../components/todo-item.svelte";
  import Button from "../components/button.svelte";
  import { items } from "../state";

  items.set([]);

  function addTodo() {
    const length = $items.length;
    console.log(length);
    $items = [
      ...$items,
      { id: $items.length, content: `new content here ${$items.length}` },
    ];
  }
</script>

<h1>My Todo List</h1>

<div class="button-container">
  <Button on:click={addTodo}>new todo item</Button>
</div>

{#each $items as todo (todo.id)}
  <TodoItem content={todo.content} id={todo.id} />
{/each}

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
