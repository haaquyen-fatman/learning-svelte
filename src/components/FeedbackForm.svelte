<script>
  import { v4 as uuidv4 } from "uuid";
  import Button from "./Button.svelte";
  import Card from "./Card.svelte";
  import RatingSelect from "./RatingSelect.svelte";
  import { createEventDispatcher } from "svelte";

  let text = "";
  let rating = 2;
  let btnDisabled = true;
  let message;
  let min = 10;

  const dispatch = createEventDispatcher();

  const handleInput = () => {
    if (text.trim().length <= min) {
      message = `Must be more than ${min} characters`;
      btnDisabled = true;
    } else {
      message = null;
      btnDisabled = false;
    }
  };

  const handleSelect = (e) => (rating = e.detail);

  const handleSubmit = (e) => {
    if (text.trim().length > min) {
      const newFeedback = {
        id: uuidv4(),
        text,
        rating: +rating,
      };
      dispatch("add-feedback", newFeedback);

      text = "";
    }
  };
</script>

<Card>
  <form on:submit|preventDefault={handleSubmit}>
    <RatingSelect on:rating-select={handleSelect} />
    <div class="input-group">
      <input
        type="text"
        on:input={handleInput}
        bind:value={text}
        placeholder="Review"
      />
      <Button type="submit" disabled={btnDisabled}>Send</Button>
    </div>
    {#if message}
      <div class="message">
        {message}
      </div>
    {/if}
  </form>
</Card>
