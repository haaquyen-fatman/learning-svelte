<script>
  import { createEventDispatcher } from "svelte";

  let selected = 2;

  const dispatch = createEventDispatcher();

  const onChange = (e) => {
    selected = e.currentTarget.value;
    dispatch("rating-select", selected);
  };
</script>

<ul class="rating">
  <li>
    <input
      type="radio"
      name="rating"
      id="num1"
      value="1"
      checked={selected === 1}
      on:change={onChange}
    />
    <label for="num1">1</label>
  </li>
  <li>
    <input
      type="radio"
      name="rating"
      id="num2"
      value="2"
      checked={selected === 2}
      on:change={onChange}
    />
    <label for="num2">2</label>
  </li>
</ul>
