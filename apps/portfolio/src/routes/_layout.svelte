<script>
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";

  export let segment;
</script>

<style>
  main {
    position: relative;
    max-width: 40em;
    background-color: white;
    margin: 0 auto;
    box-sizing: border-box;
  }
  .wrap {
    padding: 2rem calc(1vw * 5) 5rem;
  }
</style>

<Nav {segment} />

<div class="wrap">
  <main>
    <slot />
  </main>
</div>

<Footer />
