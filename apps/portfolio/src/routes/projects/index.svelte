<script context="module">
  import ProjectTeaser from "../../components/ProjectTeaser.svelte";
  import StarList from "../../components/StarList.svelte";
  import projects from "../../_projects";
  import companies from "../../_companies";
</script>

<style>
  li {
    margin: 2rem 0;
  }
</style>

<svelte:head>
  <title>Projects</title>
</svelte:head>

<h1>Projects</h1>
<p>Ordered by relevance.</p>

<StarList>
  {#each projects as project}
    <li>
      <ProjectTeaser slug={project.slug} />
    </li>
  {/each}
</StarList>
