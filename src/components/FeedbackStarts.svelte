<script>
  import { FeedbackStore } from "../stores";

  export let count;
  export let average;

  $: count = $FeedbackStore.length;
  $: average =
    $FeedbackStore.reduce((acc, { rating }) => acc + rating, 0) / count || 0;
</script>

<div class="feedback-starts">
  <h4>{count} {count == 0 || count == 1 ? "review" : "reviews"}</h4>

  {#if average != 0}
    <h4>Ratings average: {average}</h4>
  {/if}
</div>

<style>
  .feedback-starts {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
