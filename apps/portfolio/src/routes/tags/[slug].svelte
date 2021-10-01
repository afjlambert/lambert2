<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`tags/${params.slug}.json`);
    const data = await res.json();
  
    if (res.status === 200) {
      return { slug: params.slug, tag: data.tag };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import StarList from "../../components/StarList.svelte";
  import Company from "../../components/Company.svelte";
  import CompanyTeaser from "../../components/CompanyTeaser.svelte";
  import PageLogo from "../../components/PageLogo.svelte";
  import ProjectTeaser from "../../components/ProjectTeaser.svelte";
  import BlogTeaser from "../../components/BlogTeaser.svelte";
  import allCompanies from "../../_companies.js";
  import allPosts from "../../_posts.js";
  import allProjects from "../../_projects.js";

  export let slug;
  export let tag;
  const companies = allCompanies.filter(({ tags }) =>
    tags ? tags.includes(slug) : false
  );
  const posts = allPosts.filter(({ tags }) =>
    tags ? tags.includes(slug) : false
  );
  const projects = allProjects.filter(({ tags }) =>
    tags ? tags.includes(slug) : false
  );
  const x = tag ? tag : { name: slug, description: null, logo: null };
  const { description, name, logo } = x;
</script>

<svelte:head>
  <title>{name}</title>
</svelte:head>

{#if logo}
  <PageLogo src={logo} alt="{name} logo" />
{/if}

<h1># {name}</h1>

{#if description}
  <p>{description}</p>
{/if}

<div class="content">
  {#if posts.length === 0 && projects.length === 0 && companies.length === 0}
    No posts, companies or projects found :(
  {/if}

  {#if companies.length > 0}
    <h2>Companies</h2>
  {/if}
  {#each companies as company}
    <CompanyTeaser slug={company.slug} />
    <hr />
  {/each}

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

  {#if posts.length > 0}
    <h2>Blog posts</h2>
    <StarList>
      {#each posts as post}
        <li>
          <BlogTeaser slug={post.slug} />
        </li>
      {/each}
    </StarList>
  {/if}

</div>
