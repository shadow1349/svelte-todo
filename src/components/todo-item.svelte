<script>
  import Checkbox from "./checkbox.svelte";
  import Button from "./button.svelte";
  import { items } from "../state";

  export let content;
  export let id;
  export let isNew = false;

  let checked = false;

  function deleteSelf() {
    $items = $items.filter((x) => x.id !== id);
  }
</script>

<div class="container">
  <div class="todo-item">
    {#if isNew}
      <input
        type="text"
        placeholder="type your todo here!"
        on:keydown
      />
    {:else}
      <Checkbox bind:checked />
      <p class={checked ? "completed" : ""}>{content}</p>
    {/if}
  </div>

  <Button img={true} on:click={deleteSelf}>
    <img src="/delete.svg" alt="delete button" width="20" />
  </Button>
</div>

<style>
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 2px solid #000000;
    padding: 1rem 2rem;
    border-radius: 10px;
    position: relative;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: 5px 0;
  }
  .todo-item {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
  }

  .todo-item p {
    margin-left: 50px;
    font-size: 20px;
  }
  .completed {
    text-decoration: line-through;
  }
</style>
