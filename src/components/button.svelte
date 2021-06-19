<script>
  /**
   * This will default to false but if true will remove most of the styling
   * and display plainly whatever is in the button
   */
  export let img = false;
</script>

<!-- Blank method for on:click will pass that event to whatever component uses this one  -->
<button on:click class={img ? "img-button" : "text-button"}>
  <!-- slot will cause button text to just be injected here -->
  <slot />
</button>

<style>
  .img-button {
    display: inline-block;
    border: none;
    padding: 1rem 2rem;
    margin: 0;
    text-decoration: none;
    background: #ffffff;
    font-family: sans-serif;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
  }
  .text-button {
    display: inline-block;
    border: none;
    padding: 1rem 2rem;
    margin: 0;
    text-decoration: none;
    background: #ffffff;
    color: #000000;
    font-family: sans-serif;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, transform 150ms ease;
    border: 2px solid black;
    border-radius: 5px;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  .text-button:hover,
  .text-button:focus {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .img-button:focus,
  .text-button:focus {
    outline: none;
  }
  .text-button:active {
    transform: scale(0.99);
  }
</style>
