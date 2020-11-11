<script>
  export let value;
  const english = new Intl.DateTimeFormat("en");
</script>

{#if value}
  {#if typeof value === 'string'}
    <date>{value}</date>
  {:else}
    <date>{english.format(value)}</date>
  {/if}
{/if}
