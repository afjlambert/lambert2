<style>
.tag {
	text-decoration: none;
	white-space: nowrap;
	font-size: 0.9em;
	/* font-weight: 500; */
	font-family: Roboto Medium, sans-serif;
	padding: 0.2em 0.3em 0.2em 0.1em;
	margin: -0.2em -0.1em -0.2em -0.1em;
}
.tag:before {
	content: "#";
	margin-right: 0.1em;
	opacity: 0.2;
}
a.tag:hover {
	background: #f3f3f3;
}

</style>

<script>
  import tags from "../_tags.js";
  export let slug;
  export let text = null;
  let tag = tags.find(tag => tag.slug === slug);
  let label = text ? text : tag ? tag.name : slug.toUpperCase();
</script>


{#if tag}
  <a href="tags/{slug}" class="tag">{label}</a>
{:else}
  <span class="tag">{label}</span>
{/if}
