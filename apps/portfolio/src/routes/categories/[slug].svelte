<script context="module">
  export async function preload({ params: { slug } }) {
    return { slug };
  }
</script>

<script>
  import StarList from "../../components/StarList.svelte";
  import ProjectTeaser from "../../components/ProjectTeaser.svelte";
  import BlogTeaser from "../../components/BlogTeaser.svelte";
  import PageLogo from "../../components/PageLogo.svelte";
  import categories from "../../_categories";
  import allProjects from "../../_projects";
  import allPosts from "../../_posts";
  export let slug;
  let category = categories.find(c => c.slug === slug);
  const projects = allProjects.filter(p => (p.categories || []).includes(slug));
  const posts = allPosts.filter(p => (p.categories || []).includes(slug));
</script>

{#if category.logo}
  <PageLogo src={category.logo} alt="{category.title} logo" />
{/if}

<h1>{category.title}</h1>

{#if projects}
  <h2>Projects</h2>
  <StarList>
    {#each projects as project}
      <li>
        <ProjectTeaser slug={project.slug} />
      </li>
    {/each}
  </StarList>
{/if}

{#if posts}
  <h2>Blogs</h2>
  <StarList>
    {#each posts as post}
      <li>
        <BlogTeaser slug={post.slug} />
      </li>
    {/each}
  </StarList>
{/if}
