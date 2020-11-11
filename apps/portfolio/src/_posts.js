const filter = true;

const posts = [
  {
    title: "Rust lang",
    published: false,
    slug: "rust-lang",
    tags: ["rust", "graphql", "types"],
    html: `
			Recently ...
		`,
  },
  {
    title: "First blog is up!",
    published: true,
    slug: "first-blog",
    date: Date.UTC(2020, 11, 11),
    tags: ["blog"],
    categories: ["growth"],
    teaser: `
    Finally... I found the time to finish porting one of my old
      blog-posts to this relatively new site. Why am I doing this?
      `,
    html: `
      <p>To the exact day almost, one year ago since I finished v1
      of this site. The initial version already had a Blog section
      in it, but was never published.</p>
      
      <p>I would like to collect my work in this blog to get into contact
      with other devs, to learn from and inspire each other.</p>

      <p>For now, it's only one (well actually 3 including
        the one you are reading and 
        <a href="/blog/do-you-really-need-that-backend/">this one</a>) blog-posts
      while trying I'm to find time to port the other posts.</p>

      <p>Hope to get into contact with yall! Contact me
      <a href="/contact/">if you think we should talk</a>.</p>
		`,
  },
  {
    title: "Do you really need that backend?",
    published: true,
    date: Date.UTC(2019, 11, 15),
    slug: "do-you-really-need-that-backend",
    categories: ["frontend"],
    tags: [], //"stateless"],
    teaser: `When building a new solution, how do you decide if you need a
		backend solution at all?`,
    html: `
    <p>When building a new solution, how do you decide if you need a
    backend solution at all?</p>
    
    <p><em>More detailis coming soon...</em></p>`,
    _html: `
		<p>In a recent interview I was told a new backend was needed
		to fascilitate a frontend application's need for a quiz-like app.</p>

		Shoot yourself in the foot? Andere beeldspraak?
		
		in your current solution... ask yourself, do you really need your backend?
		
		- what am i persisting? do i really need that?
		- how dynamic is my content?
		- how big a % of my users actually needs a session?

		Some downsides of dynamic solutions include
		- setting up and maintaining a database cluster
		- backups
		- consider your time-to-market
		
		For high traffic / high available solutions this includes
		- setting up load balancers, handle sticky sessions / round robin
		- caching solutions, which creates ....
		- penetration testing
		- load testing
		
		# static site generators et al.


		# seo
		your service might need server-rendered pages too...


		Think outside of the box... Traditional webstacks are ...
In a time of serverless developments....
		`,
  },

  /*
	iPhone CSS3 Reflection test
	This is a demo I made for the iPhone, but should also work in Safari.
	If you hover any of the pictures it should become semi-transparant.
	When testing the reflection capabilities of the webkit-engine it
	supprised me that I didn’t find any bugs. However, I can’t say the
	same thing about border-radius. In the following test you will see
	how reflection mimics the original perfectly, it even reflects the
	bugs of border-radius very nice ;)
	#iPhone #reflection #CSS3 #opacity #reflection #demos


	iPhone Carousel test
This is a demo I made to test the webkit CSS 3D transform and
animation features. I used as little as javascript as possible
to fully test these new features. On an iPhone you can also interact
with this widget by tapping and dragging.
Read more » 3d CSS3 carousel
#iPhone #carousel #CSS3 #3d #transform #animation #box-shadow #opacity





*/

  {
    title: "Lazy loading json-widgets",
    slug: "lazy-loading-json-widgets",
    tags: ["javascript", "json", "performance"],
    teaser: `Making this Account-page much faster by switching from XML to JSON, and
      async loading the data to improve the time-to-first-render.`,
    published: true,
    company: "telegraaf",
    // date: "2008",
    categories: ["frontend"],
    html: `
      <p><em>Update nov. 2020: The project is still working and looking almost the
      same as when I helped build it. Looks a bit old school but also amazing that
      browsers are so good at supporting older sites.</em></p>

      <p>JavaScript Object Notation (JSON) is a lightweight data-interchange format.
      It’s faster and often easier to generate and evaluate than XML.<p>

      <p>For TMG I created a general purpose Javascript framework a while ago. It's
      being used by a couple websites including <a href="https://www.telegraaf.nl/">
      telegraaf.nl</a>.</p>
      
      <p>For Speurdersindekrant I now build a plugin on the TMG-javascript framework for
      async json fetching. Using this plugin the Account-page now loads much faster and
      lazy-loads the different modules on the page. With the (Java) backend
      is a matter of minutes to create advanced dynamic widgets.
      To check this out create an account on <a href="https://www.speurdersindekrant.nl/">
      Speurdersindekrant.nl</a>.
	  `,
    tags: [
      "json",
      "client-server",
      "performance",
      "xml",
      "lazy-loading",
      "async",
    ],
  },

  //   Cross browser custom TinyMCE implementation
  // Richt text editor
  // For Speurdersindekrant.nl I implemented a customized version of TinyMCE.
  // With this Rich Text Editor (WYSIWYG) customers can make their own
  // advertisements from scratch. No need for a design studio, it’s fully
  // self service. With a subset of HTML and CSS send from the client to
  // the server, the backend generates a PDF and a preview-jpg. You can
  // view the demo here (dutch only).
  // #javascript #framework #RichText #RTE #XHTML #editor #PDF #WYSIWYG #speurders

  //   Javascript Framework
  // TMG Javascript framework
  // For the Telegraaf (TMG) I developed a lightweight Javascript Framework to
  // simplify the development process. Because not everybody completely understands
  // the difference between browsers it’s hard to create cross-browser javascript.
  // Now my colleagues and I spend more time creating nice applications and less
  // time debugging. One example of the TMG-Javascript Framework is the live
  // soccer-widget on Telegraaf.nl.
  // At this moment Telegraaf.nl and Speurdersindekrant.nl make use of my
  // Javascript framework.
  // #javascript #framework #frontend #development #Web 2.0 #widgets #Telegraaf #speurders

  // {
  // 	title: "",
  // 	slug: "",
  // 	tags: [],
  // 	html: `
  // 		todo
  // 	`
  // },
];

export default filter ? posts.filter((p) => p.published) : posts;
