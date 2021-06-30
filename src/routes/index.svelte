<script>
  import TodoItem from "../components/todo-item.svelte";
  import Button from "../components/button.svelte";
  import { items } from "../state";

  items.set([]);

  let isNew = false;

  function newTodo() {
    isNew = true;
  }

  function onKeydown(event) {
    if (event.code.toLowerCase() === "enter") {
      const value = event.srcElement.value;
      $items = [{ id: $items.length, content: value }, ...$items];
      isNew = false;
    }
  }
</script>

<h1>My Todo List</h1>

<div class="button-container">
  <Button on:click={newTodo}>new todo item</Button>
</div>

{#if isNew}
  <TodoItem content="" id="0" isNew={true} on:keydown={onKeydown} />
{/if}

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
