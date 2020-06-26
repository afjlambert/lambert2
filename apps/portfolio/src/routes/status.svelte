<script>
  import tags from "../_tags";
  import projects from "../_projects";
  import companies from "../_companies";
  import Tag from "../components/Tag.svelte";
</script>

<h1>Status</h1>

<h2>Tags</h2>

{#each tags as tag}
  <div>
    <Tag slug={tag.slug} />
    - ( {projects.filter(p => p.tags.includes(tag.slug)).length} projects, {companies.filter(
      p => p.tags.includes(tag.slug)
    ).length} companies, {tag.description ? 'with' : 'no'} description, {tag.logo ? 'with' : 'no'}
    logo )
  </div>
{/each}
