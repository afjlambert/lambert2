<style>
  ul {
    list-style: none;
    padding-left: 2em;
  }

  :global(.StarList li) {
    margin: 2rem 0;
    position: relative;
  }
  :global(.StarList li:before) {
    content: "\2605";
    margin: 0 1em 0 0;
    position: absolute;
    left: -1.5em;
    opacity: 0.8;
  }
</style>

<ul class="StarList">
  <slot />
</ul>
