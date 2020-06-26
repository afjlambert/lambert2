<script>
  import Tag from "./Tag.svelte";
  import ByLine from "./ByLine.svelte";
  import Date from "./Date.svelte";
  export let slug;

  import blogs from "../_posts";
  let post = blogs.find(b => b.slug === slug);
  const tagsToShow = 5;
  const tags = post.tags.slice(0, tagsToShow);
</script>

<style>
  .title {
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
    <a href="blog/{post.slug}" class="title">{post.title}</a>
  </div>
  <ByLine>
    <Date value={post.date} />
  </ByLine>

  <div>
    {#if post.teaser}{post.teaser}{/if}
    <a href="blog/{post.slug}/">Read more</a>
    &raquo;
  </div>

  <div>
    {#each tags as tag}
      <Tag slug={tag} />
    {/each}
    {#if tags.length === tagsToShow}
      <a rel="prefetch" href="blog/{post.slug}/" class="dots">...</a>
    {/if}
  </div>
</div>
