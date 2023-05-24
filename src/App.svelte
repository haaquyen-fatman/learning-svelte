<script>
  import FeedbackForm from "./components/FeedbackForm.svelte";
  import FeedbackList from "./components/FeedbackList.svelte";
  import FeedbackStarts from "./components/FeedbackStarts.svelte";

  let feedback = [
    { id: 1, rating: 10, text: "asdf" },
    { id: 2, rating: 5, text: "asdf" },
  ];

  $: count = feedback.length;
  $: average =
    feedback.reduce((acc, { rating }) => acc + rating, 0) / count || 0;

  const deleteFeedback = (event) => {
    const itemId = event.detail;
    feedback = feedback.filter((item) => item.id !== itemId);
  };

  const addFeedback = (event) => {
    const newFeedback = event.detail;
    feedback = [newFeedback, ...feedback];
  };
</script>

<main class="container">
  <FeedbackForm on:add-feedback={addFeedback} />
  <FeedbackStarts {count} {average} />
  <FeedbackList {feedback} on:delete-feedback={deleteFeedback} />
</main>

<style>
</style>
