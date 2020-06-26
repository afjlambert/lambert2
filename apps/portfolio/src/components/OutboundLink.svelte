<script>
  export let href;
  export let title = null;
</script>

<style>
  img {
    font-size: 0.8em;
    width: 16px;
  }
</style>

<a {href} {title} target="_blank" rel="noopener noreferrer">
  <slot />
</a>
<img src="icons/open_in_new.svg" alt="Open in new tab" />
