<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`blog/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let post;

  import Tag from "../../components/Tag.svelte";
  import ByLine from "../../components/ByLine.svelte";
  import Date from "../../components/Date.svelte";
  import Category from "../../components/Category.svelte";
  
</script>

<style>
  .content {
    margin: 2em 0;
  }
  .content :global(h2) {
    font-size: 1.4em;
    font-weight: 500;
  }

  .content :global(pre) {
    background-color: #f9f9f9;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 0.5em;
    border-radius: 2px;
    overflow-x: auto;
  }

  .content :global(pre) :global(code) {
    background-color: transparent;
    padding: 0;
  }

  .content :global(ul) {
    line-height: 1.5;
  }

  .content :global(li) {
    margin: 0 0 0.5em 0;
  }
</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<p>
  &laquo;
  <a href="blog/">All blogs</a>
</p>

<h1>{post.title}</h1>

<ByLine>
  Published
  <Date value={post.date} />
  by André Lambert
  {#if post.categories.length}in{/if}
  {#each post.categories as category}
    <Category slug={category} />
    {', '}
  {/each}
</ByLine>

<div class="content">
  {@html post.html}
</div>

<p>
  {#each post.tags as tag}
    <Tag slug={tag} />
  {/each}
</p>
