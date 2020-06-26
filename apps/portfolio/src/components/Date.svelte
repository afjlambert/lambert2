<script>
  export let value;
  const english = new Intl.DateTimeFormat("en");
</script>

{#if value}
  <date>{english.format(value)}</date>
{/if}
