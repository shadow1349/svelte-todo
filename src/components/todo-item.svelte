<script>
  import Checkbox from "./checkbox.svelte";
  import Button from "./button.svelte";

  export let content;

  let checked = false;
</script>

<div class="container">
  <div class="todo-item">
    <Checkbox bind:checked />
    <p class={checked ? "completed" : ""}>{content}</p>
  </div>

  <Button img={true}>
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
