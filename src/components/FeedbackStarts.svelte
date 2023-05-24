<script>
  export let count;
  export let average;
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
