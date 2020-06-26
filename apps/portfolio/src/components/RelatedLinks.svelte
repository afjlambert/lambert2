<script>
  export let prev;
  export let next;
</script>

<style>
  .next {
    float: right;
  }
  .prev {
    float: left;
  }
  .related {
    margin: 2rem 0;
  }
</style>

<div class="related">
  {#if prev || next}
    <div>
      {#if next}
        <div class="next">
          <a href={next.link}>{next.text}</a>
          ➡
        </div>
      {/if}
      {#if prev}
        <div class="prev">
          ⬅
          <a href={prev.link}>{prev.text}</a>
        </div>
      {/if}
    </div>
  {/if}
</div>
