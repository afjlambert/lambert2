<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`projects/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return data;
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import OutboundLink from "../../components/OutboundLink.svelte";
  import RelatedLinks from "../../components/RelatedLinks.svelte";
  import Company from "../../components/Company.svelte";
  import ByLine from "../../components/ByLine.svelte";
  import Tag from "../../components/Tag.svelte";
  import Date from "../../components/Date.svelte";
  import allCompanies from "../../_companies";

  export let project;
  export let next;
  export let prev;
  let locationString =
    project.location.toLowerCase() === "remote"
      ? "from remote"
      : "in " + project.location;
</script>

<style>
  .content {
    font-size: 1.1em;
    margin: 3rem 0;
  }

  .byline {
    margin-bottom: 1rem;
  }
  .tags {
    margin: 2rem 0;
  }
  blockquote {
    float: right;
    width: 40%;
    margin: 1rem;
    padding: 1rem 2rem;
    font-size: 0.9em;
  }
</style>

<svelte:head>
  <title>{project.name}</title>
</svelte:head>

<p>
  &laquo;
  <a href="projects/">All projects</a>
</p>

<h1>{project.name}</h1>

<h3>
  {project.role}
  <Company slug={project.company} />
</h3>

<div class="byline">
  <ByLine>
    {project.dateString}, {project.fulltime ? 'full time' : 'part time'}
    {locationString}
  </ByLine>
</div>

<div class="content">
  {#each project.endorsements as endorsement}
    <blockquote>
      "{endorsement.body}"
      <cite>—{endorsement.person}, {endorsement.role}</cite>
      {#if endorsement.source}
        <OutboundLink href={endorsement.source}>source</OutboundLink>
      {/if}
    </blockquote>
  {/each}

  {@html project.html}

</div>

<div class="tags">
  {#each project.tags as tag}
    <Tag slug={tag} />{' '}
  {/each}
</div>

<RelatedLinks
  next={next && { text: next.name, link: `projects/${next.slug}` }}
  prev={prev && { text: prev.name, link: `projects/${prev.slug}` }} />
