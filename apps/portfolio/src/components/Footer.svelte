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
    z-index: 100;
    background: white;
  }
</style>

<footer>
  Crafted by André Lambert using
  <Tag slug="svelte">Svelte</Tag>
  . Edit on
  <a
    href="https://github.com/afjlambert/lambert2"
    title="afj lambert on github.com">
    <img src="icons/github.svg" width="40" alt="Github logo" />
  </a>

</footer>
