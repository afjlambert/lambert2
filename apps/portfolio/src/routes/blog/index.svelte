<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  import StarList from "../../components/StarList.svelte";
  import BlogTeaser from "../../components/BlogTeaser.svelte";
  export let posts;
</script>

<svelte:head>
  <title>Blogs</title>
</svelte:head>

<h1>Blogs</h1>

{#if posts}
  <StarList>
    {#each posts as post}
      <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
      <li>
        <BlogTeaser slug={post.slug} />
      </li>
    {/each}
  </StarList>
{:else}no posts{/if}
