<script>
  import OutboundLink from "../components/OutboundLink.svelte";
</script>

<style>
  table {
    margin: 3rem 0;
  }
  td {
    padding: 0.1rem 1rem 0.1rem 0;
  }
  img {
    width: 100%;
  }
</style>

<svelte:head>
  <title>Contact - André Lambert</title>
</svelte:head>

<h1>Contact</h1>
<p>
  Would you like to get into contact? The best way to reach me is by sending a
  text.
</p>

<table>
  <tr>
    <td>E-mail</td>
    <td>
      <a
        href="mailto:afj.lambert@gmail.com?subject=Question from portfolio site">
        afj.lambert@gmail.com
      </a>
    </td>
  </tr>
  <tr>
    <td>Phone</td>
    <td>
      <a href="tel:+31624371220">+31 624371220</a>
    </td>
  </tr>
  <tr>
    <td>LinkedIn</td>
    <td>
      <OutboundLink href="https://linkedin.com/in/afjlambert">
        afjlambert
      </OutboundLink>
    </td>
  </tr>
  <tr>
    <td>Website</td>
    <td>
      <a href="https://digitaalcv.nl/">digitaalcv.nl</a>
    </td>
  </tr>
  <tr>
    <td>Language</td>
    <td>Dutch and English</td>
  </tr>
</table>

<p>Laptops says a great deal about their owner don't they? Here is mine.</p>
<figure>
  <img
    src="images/laptop.resized.jpg"
    alt="My laptop with stickers showing my passion" />
  <figcaption>My laptop</figcaption>
</figure>
