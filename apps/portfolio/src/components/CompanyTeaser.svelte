<script>
  import companies from "../_companies";
  export let slug;
  let company = companies.find((c) => c.slug === slug);
</script>

<h2>
  <a href="company/{company.slug}">
    <span>{company.name}</span>
  </a>
</h2>
{company.teaser}
