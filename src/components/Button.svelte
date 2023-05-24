<script>
  export let type = "button";
  export let disabled = false;
</script>

<button {type} {disabled}>
  <slot />
</button>
