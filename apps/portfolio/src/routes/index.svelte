<script>
  import StarList from "../components/StarList.svelte";
  import Category from "../components/Category.svelte";
  import LogoList from "../components/LogoList.svelte";
  import Company from "../components/Company.svelte";
  import Tag from "../components/Tag.svelte";
  import categories from "../_categories";
</script>

<style>
  h1 {
    display: inline;
    font-size: 1.1rem;
  }
  .h1 {
    display: block;
    font-size: 2rem;
    font-weight: 500;
  }
  li {
    margin: 3rem 0;
  }
  figure {
    float: right;
  }
</style>

<svelte:head>
  <title>About</title>
</svelte:head>
<figure>
  <img
    alt="André Lambert going to work by public transport"
    src="images/andre-lambert.resized.png"
    width="150"
    height="200" />
  <figcaption>André Lambert</figcaption>
</figure>

<p class="h1">Welcome</p>

<div class="welcome">
  My name is
  <h1>André Lambert.</h1>
  I am a freelance full stack developer and solution engineer living in Alkmaar
  in the Netherlands with my girlfriend and our daughter.
</div>

<p>
  I like spending quality time with my family, we often sail our sloop over the
  beautiful canals of Alkmaar. We have a house in the city center where we often
  go out. Occasionally I need to get my hands dirty while gardening, but I like
  to work on my online garden community
  <Company slug="tuintuin" />
  even more 😉
</p>

<p>
  In my professional carreer I’ve been building websites for
  <Tag slug="enterprise" text="enterprises" />
  and
  <Tag slug="startup" text="startups, " />
  mostly
  <b>business to consumer.</b>
  My passion is to create websites where people love to come back to, and make
  them feel involved. Making the site
  <b>fast, good looking</b>
  with
  <b>friendly user interaction</b>
  is what drives me. I love to dive into code and make it better, especially
  Javascript and Python. If you like, you can
  <a href="resume/">download my full resume.</a>
</p>

<StarList>
  {#each categories as category}
    <li>
      <h3>
        <Category slug={category.slug} />
      </h3>
      {#each category.tags as tag}
        <Tag slug={tag} />
      {/each}
    </li>
  {/each}
</StarList>

<LogoList>
  <a href="/categories/nodejs/">
    <img src="svg/nodejs.svg" alt="node.js logo" />
  </a>
  <a href="/categories/python/">
    <img src="svg/python.svg" alt="python logo" />
  </a>
  <a href="/react/">
    <img src="svg/react.svg" alt="react logo" />
  </a>
  <a href="/graphql/">
    <img src="svg/graphql.svg" alt="graphql logo" />
  </a>
  <a href="/django/">
    <img src="svg/django.svg" alt="django logo" />
  </a>
</LogoList>
