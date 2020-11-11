import Model from "./_model";

function tag(slug, text) {
  return `<a href="${slug}/" class="tag">${text}</a>`;
}

// Freddy Spierenburg
// Freddy Spierenburg
// System Engineer at bol.com
// April 21, 2014, Freddy worked with André in different groups
// Andre is een vriendelijke en leergierige ontwikkelaar, waar het heel prettig mee samenwerken is. Hij krijgt dingen voor elkaar en staat open voor suggesties van anderen.

// Marco van de Weg
// Marco van de Weg
// Director of Engineering
// December 27, 2010, Marco managed André directly
// During his time here, Andre has consistently demonstrated a strong work ethic and a dedication to success.
//  I often relied on Andre to put together technical high traffic solutions. Let me say that I have no doubt he can adeptly meet the challenges. He has shown me repeatedly that he is profoundly dedicated and responsible. See less

//  Evert Littooy
// Evert Littooy
// Marketing Director at DutchChannels
// April 22, 2008, André worked with Evert in the same group
// André is a bright and entrepreneurial young professional. Very ambitious and always willing and eager to learn. He is social, creative, reliable and has an enormous drive to make big steps in business. April 22, 2008

class Project extends Model {
  // Project template:
  // {
  // 	slug: '',
  // 	name: '',
  // 	role: '',
  // 	company: '',
  // 	location: '',
  // 	dateString: '',
  // 	fulltime: ?,
  // 	categories: [],
  // 	teaser: `

  // 	`,
  // 	html: `
  // 	`,
  // 	tags: [],
  // 	endorsements: [],
  // },
  constructor(data) {
    super(data, [
      "slug",
      "name",
      "company",
      "location",
      "categories",
      "fulltime",
      "role",
      "teaser",
      "html",
    ]);
    this.slug = data.slug;
    this.name = data.name;
    this.tags = data.tags || [];
    this.company = data.company;
    this.categories = data.categories;
    this.dateString = data.dateString;
    this.teaser = data.teaser;
    this.endorsements = data.endorsements || [];
    this.html = data.html;
    this.role = data.role;
    this.fulltime = data.fulltime;
    this.location = data.location;
  }
}

export default [
  {
    slug: "datapunt-amsterdam",
    name:
      "Building an open-source React/GraphQL app for the Dutch government (Amsterdam, NL)",
    role: "Full-stack Solution Engineer",
    company: "datapunt-gemeente-amsterdam",
    fulltime: true,
    location: "Amsterdam",
    categories: ["nodejs", "data", "testing-deployment", "devops"],
    dateString: "Nov. 2019 - present",
    teaser: `Helping the city of Amstersdam to pioneer in legislation advancements by
			building an open source React / GraphQL app to save time and money for civilians.
			`,
    html: `
      Work in progress...
      <a href="https://vergunningcheck.amsterdam.nl/test" target="_blank">Amsterdam Vergunningcheck</a>
    `,
    tags: [
      "open-source",
      "react",
      "graphql",
      "typescript",
      "legislation",
      "government",
      "amsterdam",
      "docker",
    ],
    endorsements: [],
  },
  {
    name: "Machine learning and architecture",
    slug: "machine-learning-and-architecture",
    company: "tellow",
    role: "Solution architect",
    fulltime: true,
    dateString: "Apr. 2019 – Oct. 2019",
    location: "Utrecht",
    teaser: `
			Implemented a classification machine learning algorithm using microservices
			to stream realtime events. Setting up a complete new architecture model.
		`,
    html: `
			<p>To provide a better user experience for customers and reduce costs I
			implemented a ${tag("machine-learning", "machine learning")}
			algorithm using ${tag("tensorflow", "Tensorflow")}. The neural
			network used classification on invoice scans to create
			bookings without the need for humans. <p>To further improve the user
			experience we wanted the machine learning service to process incoming
			data in realtime.</p>

			<h2>Realtime streaming architecture</h2>
			<p>The solution used several microservices
			communicating via binary ${tag("streams", "event streams")} using
			the ${tag("cqrs", "CQRS")} and
			${tag("event-sourcing", "event-sourcing")} patterns. Technologies
			used included ${tag("kafka", "Apache Kafka")},
			<a href="categories/nodejs">Node.js</a>, ${tag(
        "protobuf",
        "protocol buffers"
      )} ${tag("grpc", "gRPC")} and 
			${tag("subscriptions", "GraphQL-subscriptions")}.</p>
		`,
    categories: ["nodejs", "data"],
    tags: [
      "realtime",
      "graphql",
      "event-sourcing",
      "kafka",
      "neural-network",
      "machine-learning",
      "streams",
      "classification",
      "grpc",
      "tensorflow",
      "cqrs",
      "protobuf",
      "subscriptions",
      "architecture",
      "microservices",
      "green-field",
    ],
  },
  {
    name: "Static marketing site with Gatsby and GraphQL",
    slug: "static-marketing-site-gatsby-graphql",
    company: "tellow",
    role: "Frontend developer",
    fulltime: true,
    dateString: "Feb. 2019 – Mrt. 2019",
    location: "Utrecht",
    teaser: `
			The marketing website was too slow and in need of a redesign. The new, static SPA website was
			generated with the Gatsby framework. Using a serverless GraphQL-service, the website is
			able to accept user input.`,
    html: `
			<p>The <a href="https://tellow.nl/" target="_blank" rel="noopener noreferrer">marketing website</a>
			was too slow and in need of a redesign.
			
			<h2>Design and UX</h2>
			<p>New designs were implemented using a static ${tag("spa", "SPA")} which was
			generated by the ${tag("gatsby", "Gatsby")} framework. The new seupt felt like
			a major performance improvement from the start, it scaled well to a real-world application.<p>
			<p>For styling I used ${tag("styled-components", "Styled Components")},
			${tag("typographyjs", "typography.js")} and ${tag("postcss", "PostCSS")}.</p>

			<p>We wanted to have seperation of consern for our blog-posts, so we chose a headless CMS.
			The blogs were migrated from the old CMS to the headless Prismic CMS.
			
			<h2>Growth</h2>
			<p>Tellow is very focussed on data-driven development so in the process of implementing the
			redesign I integrated Google Tag Manager, Google Optimize, GDPR-compliance and
			Google-Analytics amongst others.</p>

			<h2>Hosting</h2>
			<p> With a ${tag("serverless", "serverless")} ${tag(
      "google-cloud",
      "Google Cloud"
    )}
			role running an ${tag("apollo-server", "Apollo GraphQL-service")},
			the website is able to accept user input.
		`,
    categories: ["frontend", "nodejs"],
    tags: [
      "serverless",
      "styled-components",
      "responsive",
      "graphql",
      "spa",
      "gatsby",
      "static-site",
      "universal",
      "speed",
      "google-optimize",
      "prismic",
      "circleci",
      "ab-testing",
      "apollo-server",
      "css-grid",
      "headless",
      "react",
      "google-cloud",
      "tag-manager",
      "gdpr",
      "rest",
      "google-analytics",
    ],
  },
  {
    name: "Fast Svelte powered SPA",
    slug: "resume-with-svelte",
    company: "lambert-consultancy",
    role: "Javascript engineer",
    fulltime: false,
    location: "Alkmaar (NL)",
    dateString: "Okt. 2019 - now",
    teaser: `
			Created a new online resume using Svelte and Sapper. The website was build as a portfolio
			to showcase the work I've done.
		`,
    html: `
			<p>Using ${tag("svelte", "Svelte")} and ${tag("sapper", "Sapper")} I build a new
			online resume. The site is a static, ${tag("spa", "single page application")}
			which performs really well. Even though I've done tests with Svelte and Sapper before, there was
			not time to build a fully working website.</p>

			<p>I'm pleased with the result, but tagging all projects and clients will probably take some time.
			I'm using ${tag(
        "rollup",
        "Rollup.js"
      )} instead of Webpack for the first time.</p>
			<p>Hosting and ${tag(
        "ci-cd",
        "CI/CD"
      )} is done with Google Cloud's SCM, Build and Storage solutions.</p>
		`,
    categories: ["frontend", "nodejs"],
    tags: [
      "speed",
      "spa",
      "ci-cd",
      "svelte",
      "sapper",
      "typescript",
      "responsive",
      "google-cloud",
      "rollup",
    ],
  },
  {
    name: "Hardened GraphQL server",
    slug: "hardened-graphql-server",
    company: "takeaway",
    role: "Solution engineer",
    fulltime: false,
    dateString: "Feb. 2019 – Sept. 2019",
    location: "Remote",
    fulltime: false,
    freelance: true,
    teaser: `
			Setting up a secure and high-performant GraphQL service that securely stores your favorite restaurants.
		`,
    html: `
			<p>During this project I build a secure and high-performant GraphQL service
			that securely stores favorite restaurants for the end-user.</p>
			
			<p>The focus for this project was
			to lay a solid foundation which the team used to connect more internal
			REST-services. Performance and security were very important.</p>

			<p>Users needed to be authenticated by the new authentication server via the
			old auth-server. This made GraphQL an ideal fit as a Backend as a Service.</p>
		`,
    categories: ["nodejs"],
    tags: ["graphql", "rest", "performance", "hardened", "security"],
  },
  {
    slug: "full-stack-online-community",
    name: "Full stack setup of online gardening community TuinTuin",
    role: "Co-founder and CTO",
    company: "tuintuin",
    location: "Alkmaar",
    dateString: "2011 – present",
    fulltime: false,
    categories: ["frontend", "python", "nodejs"],
    teaser: `
			Setting up an online community with technologies like Google's Firestore,
			Next.js and GraphQL.
		`,
    html: `
			I’ve build the complete solution and I
			try to keep it up to date with the latest technologies. The website uses
			Responsive web design (RWD), monorepo, internationalization (i18n), Next.js, NoSQL
			(Firestore) and is build using Node.js and Django. We host our services on Google
			Cloud and use Jest for testing.
		`,
    tags: [
      "graphql",
      "postgres",
      "google-cloud",
      "i18n",
      "l10n",
      "nosql",
      "microservices",
      "gitlab",
      "rest",
      "django",
      "jest",
      "docker",
      "monorepo",
      "responsive",
      "react",
      "flask",
    ],
    endorsements: [],
  },

  {
    slug: "mediahuis-platform-architecture-integration",
    name: "Mediahuis platform architecture and integration",
    role: "Platform architect",
    fulltime: true,
    company: "mediahuis",
    location: "Amsterdam",
    dateString: "Apr. 2018 - Feb. 2019",
    categories: ["data", "graphql", "rest", "soa", "agile"],
    teaser: `

		`,
    html: `

		`,
    tags: [],
    endorsements: [],
  },
  // old-name: instantmagazine
  // fulltime: false,
  // freelance frontend developer. Hubspot CMS, SEO
  // tags: ["i18n", "hubspot"]

  // Lead solution architect
  // Mediahuis
  // Date: Apr. 2017 – Apr. 2018
  // Location: Amsterdam
  // `
  // 	Helping our development teams setting up digital solutions that will support new business opportunities. As the Solution Architect I am responsible for keeping track of our solution lifecycle and research roadmap. I'm leading the Architecture Guild, a working group with members from all teams who define our dynamic goal architecture.
  // 	.. working on Cloud strategy, data flows, AI and ML.
  // categories: []
  // tags: ["data", 'docker', 'graphql', 'rest', 'soa', 'agile', ],
  // form-api

  {
    // Tealium -> gtm
    // analytics, ab-testing
    name: "Rebuild Telegraaf with React, GraphQL and Django API layer",
    slug: "telegraaf-rebuild-react-graphql-django",
    company: "telegraaf",
    role: "Team lead Telegraaf",
    fulltime: true,
    dateString: "Aug 2015 – Apr 2017",
    location: "Amsterdam",
    categories: ["nodejs", "frontend", "python"],
    teaser: `
			During my time as Team Lead for Telegraaf I've lead 2 scrum teams rebuilding Telegraaf.nl.
			In an agile fashion we build a completely new stack based on our core service API's.
		`,
    html: `
			During my time as Team Lead for Telegraaf I've lead 2 scrum teams rebuilding Telegraaf.nl.
			In an agile fashion we build a completely new stack based on our core service API's.
			We started with a clean slate and designed a new infrastructure which would replace our 10+
			years old website and mobile apps. The outcome was a progressive web application using
			React and GraphQL. The native iOS and Android applications reuse the same backend as
			the web app simplifying our application landscape and data flow.
		`,
    tags: [
      "graphql",
      "react",
      "responsive",
      "scrum",
      "hardened",
      "performance",
      "universal",
      "django",
      "drupal",
      "rest",
      "ci/cd",
      "gitlab",
      "headless",
      "agile",
      "scrum",
      "wbso",
    ],
    endorsements: [
      {
        person: "Roberto Kok",
        role: "Senior Backend Developer at TMG",
        __date: "June 2, 2017",
        body: `
					What immediately struck me working with André was his great passion for creating quality software and
					infrastructure. Skilled at both high-level architecture design and software engineering, he inspires
					those around him to broaden their view and work to the same high standards.
				`,
        source: "https://www.linkedin.com/in/robertokok/",
      },
    ],
  },
  {
    slug: "",
    name: "",
    role: "Frontend developer",
    company: "foleon",
    location: "Amsterdam",
    dateString: "Aug. 2017 - Aug. 2018",
    fulltime: false,
    categories: ["frontend"],
    teaser: `
  		Hubspot migration, redesign
  		raadhuis alkmaar

  	`,
    html: `

  	`,
    tags: [],
    // endorsements: []
  },
].map((p) => new Project(p));

// {
// 	slug: "",
// 	name: "",
// 	role: "Frontend developer",
// 	company: "foleon",
// 	location: "Amsterdam",
// 	dateString: "Aug. 2017 - Aug. 2018",
// 	fulltime: false,
// 	categories: ['frontend'],
// 	teaser: `
// 		Hubspot migration, redesign
// 		raadhuis alkmaar

// 	`,
// 	html: `

// 	`,
// 	tags: [],
// 	endorsements: []
// },
