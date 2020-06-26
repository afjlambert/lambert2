<style>
  .LogoList {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 2rem 0;
  }
  :global(.LogoList > *) {
    margin: 2rem 1rem;
    width: 200px;
    height: 100px;
    display: flex;
    align-items: center;
  }
  :global(.LogoList img) {
    max-width: 100%;
  }
</style>

<div class="LogoList">
  <slot />
</div>
