<script>
  import companies from "../_companies";
  export let slug;
  $: name = companies.find(c => c.slug === slug).name;
</script>

<a href="companies/{slug}">{name}</a>
