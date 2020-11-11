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
  import BlogTeaser from "../../components/BlogTeaser.svelte";
  import Tag from "../../components/Tag.svelte";
  import allProjects from "../../_projects";
  import allPosts from "../../_posts";
  export let company;
  export let projects = allProjects.filter(p => p.company === company.slug);

  const posts = allPosts.filter(({ company: companySlug }) =>
    companySlug === company.slug
  );

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

{#if projects.length}
  <h2>Projects</h2>
  <StarList>
    {#each projects as project}
      <li>
        <ProjectTeaser slug={project.slug} />
      </li>
    {/each}
  </StarList>
{/if}


{#if posts.length}
  <h2>Blog posts</h2>
  <StarList>
    {#each posts as post}
    <li>
      <BlogTeaser slug={post.slug} />
      </li>
    {/each}
  </StarList>
{/if}
