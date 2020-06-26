<style>
  .marquee {
    overflow: hidden;
  }
  .inner {
    white-space: nowrap;
    display: inline-block;
    animation: marquee 25s linear infinite;
  }
  @keyframes marquee {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-100%, 0);
    }
  }
</style>

<div class="marquee">
  <div class="inner">
    <slot />
  </div>
</div>
