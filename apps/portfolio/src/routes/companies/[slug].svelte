<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`companies/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { company: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import StarList from "../../components/StarList.svelte";
  import OutboundLink from "../../components/OutboundLink.svelte";
  import ProjectTeaser from "../../components/ProjectTeaser.svelte";
  import Tag from "../../components/Tag.svelte";
  import allProjects from "../../_projects";
  export let company;
  export let projects = allProjects.filter(p => p.company === company.slug);
</script>

<style>
  img {
    float: right;
    max-width: 200px;
    max-height: 150px;
  }
</style>

<svelte:head>
  <title>{company.name}</title>
</svelte:head>

<p>
  &laquo;
  <a href="portfolio/">More companies</a>
</p>

{#if company.logo}
  <img src={company.logo} alt="{company.name} logo" />
{/if}

<h1>{company.name}</h1>
<div>
  {@html company.html || ''}
</div>

{#if company.website}
  <p>
    Website:
    <OutboundLink href={company.website}>{company.website}</OutboundLink>
  </p>
{/if}

<p>
  {#each company.tags as tag}
    <Tag slug={tag} />
  {/each}
</p>

{#if projects.length > 0}
  <h2>Projects</h2>
  <StarList>
    {#each projects as project}
      <li>
        <ProjectTeaser slug={project.slug} />
      </li>
    {/each}
  </StarList>
{/if}
