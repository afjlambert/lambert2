<script>
  export let segment;

  export const links = [
    {
      label: "Home",
      title: "André Lambert",
      segments: [undefined],
      icon: "home"
    },
    {
      label: "Portfolio",
      segments: ["portfolio", "companies"]
    },
    {
      label: "Projects",
      segments: ["projects"]
    },
    // {
    //   label: "Blog",
    //   segments: ["blog"]
    // },
    {
      label: "Resume",
      segments: ["resume"]
    },
    {
      label: "Contact",
      segments: ["contact"],
      icon: "phone"
    }
  ];
</script>

<style>
  a {
    text-decoration: none;
  }
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    padding: 0 1em;
    justify-content: center;
    display: flex;
  }
  .selected {
    border-bottom: 2px solid orange;
  }

  a {
    padding: 1rem 0.5rem;
  }

  .has-icon .label {
    display: none;
  }
  @media (min-width: 550px) {
    a {
      padding: 1rem 1rem;
    }
    .has-icon .label {
      display: block;
    }
    img {
      display: none;
    }
  }
</style>

<nav>
  {#each links as link}
    <a
      title={link.title ? link.title : link.label}
      href={link.segments[0] === undefined ? '.' : link.segments[0] + '/'}
      class="{link.icon ? 'has-icon' : ''}
      {link.segments.includes(segment) ? 'selected' : ''}"
      rel="prefetch">
      <span class="label">{link.label}</span>
      {#if link.icon}
        <img src="icons/{link.icon}.svg" alt="{link.icon} icon" />
      {/if}
    </a>
  {/each}
</nav>
