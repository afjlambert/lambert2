import Model from "./_model";

class Company extends Model {
  constructor(data) {
    super(data, ["slug", "name"]);
    this.slug = data.slug;
    this.name = data.name;
    this.tags = data.tags || [];
    this.logo = data.logo;
    this.website = data.website;
    this.featured = data.featured || false; // promoted on clients page or not
    this.teaser = data.teaser;
    this.html = data.html;
    this.location = data.location;
  }
}
export default [
  {
    slug: "datapunt-gemeente-amsterdam",
    name: "Datapunt Gemeente Amsterdam",
    location: "Amsterdam",
    featured: true,
    teaser: `Datapunt is a relative new department within the Gemeente
		Amsterdam. Datapunt tries to make all data from Amsterdam public
		and usable. Various API's and services are already available. A lot
		of work is available as open-source projects on Github.`,
    website: "https://data.amsterdam.nl",
    logo: "svg/amsterdam.svg",
    tags: ["data", "government", "open-source"],
  },
  {
    slug: "telegraaf",
    name: "Telegraaf",
    location: "Amsterdam",
    featured: true,
    teaser: `Telegraaf is one of the most read online news resources in the
			Netherlands. With over 1 billion pageviews per month it is truly a high
			traffic service.`,
    website: "https://www.telegraaf.nl/",
    logo: "svg/telegraaf.svg",
    tags: ["publishing", "media"],
  },
  {
    slug: "tellow",
    name: "Tellow",
    location: "Utrecht",
    featured: true,
    logo: "svg/tellow.svg",
    tags: ["freelance", "fintech", "bookkeeping", "startup"],
    website: "https://www.tellow.nl/",
    teaser: `Tellow is a fintech startup backed by Rabobank.
			The company provides an efficient and affordable bookkeeping-tool
			for freelancers.`,
    html: `
			Tellow is a <strong>fintech startup</strong> backed by Rabobank.
			The company provides an efficient and affordable bookkeeping-tool
			for freelancers.
        `,
  },
  {
    slug: "takeaway",
    name: "Takeaway",
    role: "Solution engineer",
    location: "Remote",
    featured: true,
    logo: "svg/takeaway.svg",
    website: "https://thuisbezorgd.nl/",
    freelance: true,
    dateString: "Feb. 2019 – Sept. 2019",
    tags: ["high-performance", "enterprise"],
    html: `
			Takeaway is known as <a href="https://thuisbezorgd.nl">thuisbezorgd.nl</a> in the Netherlands,
			the service makes it easy to order meals from local restaurants. I build a <b>secure and
			high-performant GraphQL service</b> that securely stores your favorite restaurants. The
			focus for this project was to lay a solid foundation which the team used to connect more
			internal REST-services.
		`,
  },
  {
    slug: "mediahuis",
    name: "Mediahuis",
    website: "https://www.mediahuis.be/",
    featured: true,
    logo: "svg/mediahuis.svg",
  },
  {
    slug: "binckbank",
    name: "BinckBank",
    website: "https://www.binck.com/",
    featured: true,
    logo: "svg/binckbank.svg",
  },
  {
    slug: "alex",
    name: "Alex",
    website: "https://www.alex.nl/",
    featured: true,
    logo: "svg/alex.svg",
  },
  {
    slug: "tuintuin",
    name: "TuinTuin",
    location: "Heiloo",
    dateString: "",
    tags: ["startup"],
    featured: true,
    logo: "svg/tuintuin.svg",
    html: `
			TuinTuin is a community where garden professionals and garden owners meet each
			other and share their best photos, ideas and projects.
			`,
  },
  {
    slug: "lambert-consultancy",
    name: "Lambert Consultancy",
    website: "https://digitaalcv.nl/",
    role: "Owner",
    location: "Alkmaar",
    dateString: "...",
    tags: [],
    html: `
			lambert...
        `,
  },
  {
    slug: "foleon",
    name: "Foleon",
    website: "https://www.foleon.com/",
    featured: true,
    logo: "svg/foleon.svg",
    tags: ["startup", "publishing"],
  },
  {
    slug: "hyves",
    name: "Hyves",
    website: "https://www.hyves.nl/",
    featured: true,
    logo: "svg/hyves.png",
  },
  {
    slug: "speurders",
    name: "Speurders",
    website: "https://www.speurders.nl/",
    featured: true,
    logo: "svg/speurders.jpg",
  },
  {
    slug: "speurders-in-de-krant",
    name: "Speurders in de krant",
    website: "https://www.speurdersindekrant.nl/",
    featured: false,
    logo: "svg/speurders.jpg",
  },
].map((c) => new Company(c));
