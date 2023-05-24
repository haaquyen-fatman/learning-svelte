<script>
  import { scale, fade } from "svelte/transition";
  import FeedbackItem from "./FeedbackItem.svelte";
  import { FeedbackStore } from "../stores.js";
</script>

{#each $FeedbackStore as fb (fb.id)}
  <div in:scale out:fade={{ duration: 400 }}>
    <FeedbackItem item={fb} />
  </div>
{/each}
