<script>
  import categories from "../_categories";
  export let slug;
  let { title } = categories.find(c => c.slug === slug);
</script>

<a href="categories/{slug}">{title}</a>
