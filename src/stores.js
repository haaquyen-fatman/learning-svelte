import { writable } from "svelte/store";

export const FeedbackStore = writable([
  { id: 1, rating: 10, text: "asdf" },
  { id: 2, rating: 5, text: "asdf" },
]);
