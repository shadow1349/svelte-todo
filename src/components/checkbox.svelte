<script>
  export let checked;
</script>

<label class="container">
  <slot />
  <!-- If we want the checkbox to have a lavel -->
  <input type="checkbox" bind:checked on:change />
  <span class="checkmark" />
</label>

<style>
  .container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin: 0 0 12px 0; /* This will keep a 12px bottom but also make sure it's not expanding outwards */
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 0; /* a 0 width will make it so you can't basically click ANYWHERE and check the checkbox */
  }

  .container input {
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    border: 1px solid black;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
  }

  .container input ~ .checkmark {
    border: 2px solid #000000;
    background: #ffffff;
  }

  .container:hover input ~ .checkmark {
    background-color: #ccc;
  }

  .container input:checked ~ .checkmark {
    background-color: #000000;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .container input:checked ~ .checkmark:after {
    display: block;
  }

  .container .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
</style>
