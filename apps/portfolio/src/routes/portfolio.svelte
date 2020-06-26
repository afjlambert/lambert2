<script>
  import LogoList from "../components/LogoList.svelte";
  import allCompanies from "../_companies";
  export let companies = allCompanies.filter(c => c.featured);
</script>

<style>
  .teaser {
    clear: both;
  }
  .teaser img {
    width: 300px;
    float: right;
    margin: 0 0 2rem 2rem;
  }
  .more {
    margin-top: 3rem;
  }
</style>

<svelte:head>
  <title>Portfolio</title>
</svelte:head>

<h1>Portfolio</h1>

{#each companies.filter(c => !!c.teaser) as company}
  <div class="teaser">
    <a href="/companies/{company.slug}">
      <img src={company.logo} alt="{company.name} logo" />
      <h2>{company.name}</h2>
    </a>

    <p>
      {company.teaser}
      <a href="/companies/{company.slug}">Find projects...</a>
    </p>

  </div>
{/each}

<div class="more">
  <h2>Click the logo's for more information</h2>
  <LogoList>
    {#each companies.filter(c => !c.teaser) as company}
      <a href="/companies/{company.slug}">
        <img src={company.logo} alt="{company.name} logo" />
      </a>
    {/each}
  </LogoList>
</div>
