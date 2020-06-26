<script>
  import Tag from "./Tag.svelte";
  import Company from "./Company.svelte";
  import ByLine from "./ByLine.svelte";
  export let slug;
  import projects from "../_projects";
  const project = projects.find(p => p.slug === slug);

  let locationString =
    project.location.toLowerCase() === "remote"
      ? "from remote"
      : "in " + project.location;
  const tagsToShow = 5;
  const tags = project.tags.slice(0, tagsToShow);
</script>

<style>
  a.title {
    font-family: Roboto Medium, Roboto, sans-serif;
  }
  .teaser div {
    margin: 0.5rem 0;
  }
  .dots {
    text-decoration: none;
  }
</style>

<div class="teaser">
  <div>
    <a class="title" rel="prefetch" href="projects/{project.slug}/">
      {project.name}
    </a>
  </div>
  <div>
    {project.role}
    <Company slug={project.company} />
  </div>
  <ByLine>
    {project.dateString}, {project.fulltime ? 'full time' : 'part time'}
    {locationString}
  </ByLine>

  <div>
    {#if project.teaser}{project.teaser}{/if}
    <a href="projects/{project.slug}/">Read more</a>
    &raquo;
  </div>

  <div>
    {#each tags as tag}
      <Tag slug={tag} />
    {/each}
    {#if tags.length === tagsToShow}
      <a rel="prefetch" href="projects/{project.slug}/" class="dots">...</a>
    {/if}
  </div>
</div>
