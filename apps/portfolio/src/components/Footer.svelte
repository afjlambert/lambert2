<script>
  import Tag from "./Tag.svelte";
</script>

<style>
  footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    padding: 1rem;
    color: #888;
  }
</style>

<footer>
  Crafted by André Lambert using
  <Tag slug="svelte">Svelte</Tag>
  and
  <Tag slug="sapper">Sapper</Tag>
</footer>
