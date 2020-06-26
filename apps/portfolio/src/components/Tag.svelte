<script>
  import tags from "../_tags.js";
  export let slug;
  export let text = null;
  let tag = tags.find(tag => tag.slug === slug);
  let label = text ? text : tag ? tag.name : slug.toUpperCase();
</script>

<a href="{slug}/" class="tag">{label}</a>
{' '}
