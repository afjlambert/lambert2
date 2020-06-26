import Model from "./_model";

class Category extends Model {
  constructor(data) {
    super(data, ["slug", "name", "title"]);
    this.slug = data.slug;
    this.name = data.name;
    this.logo = data.logo;
    this.title = data.title;
    this.html = data.html;
    this.tags = data.tags || [];
  }
}

export default [
  {
    name: "Node.js",
    slug: "nodejs",
    title: "Node.js development",
    tags: [
      "graphql",
      "express",
      "apollo-server",
      "universal",
      "tensorflow.js",
      "pm2",
    ],
  },
  {
    name: "Python",
    slug: "python",
    title: "Python development",
    logo: "svg/python.svg",
    tags: [
      "django",
      "flask",
      "graphene",
      "babel",
      "sqlalchemy",
      "django-rest-framework",
      "django-admin",
      "pil",
    ],
  },
  {
    name: "Frontend",
    slug: "frontend",
    title: "Frontend development",
    tags: [
      "react",
      "next.js",
      "css",
      "svelte",
      "apollo-client",
      "css-in-js",
      "gatsby",
      "webpack",
      "sapper",
      "relay",
      "jinja",
      "babel.js",
    ],
  },

  {
    name: "Data",
    slug: "data-processing",
    title: "Data processing",
    tags: [
      "machine-learning",
      "kafka",
      "postgres",
      "nosql",
      "image-processing",
      "redis",
      "memcached",
      "rabbitmq",
      "elastic",
      "opencv",
    ],
  },
  {
    name: "Testing and deployment",
    slug: "testing-deployment",
    title: "Testing and deployment",
    tags: [
      "jest",
      "ci-cd",
      "google-cloud-build",
      "puppeteer",
      "webdriver",
      "circleci",
      "gitlab",
      "jenkins",
    ],
  },
  {
    name: "DevOps",
    slug: "devops",
    title: "DevOps and hosting",
    tags: [
      "google-cloud",
      "cdn",
      "varnish",
      "nginx",
      "haproxy",
      "uwsgi",
      "logstash",
      "docker",
      "git",
      "linux",
      "macos",
    ],
  },
  {
    name: "Growth",
    slug: "growth",
    title: "Marketing and growth",
    tags: [
      "google-analytics",
      "seo",
      "kibana",
      "ab-testing",
      "tag-manager",
      "gdpr",
      "transactional-email",
    ],
  },
  {
    name: "Hardening",
    slug: "hardening",
    title: "Security, auth and performance",
    tags: ["oauth", "bcrypt", "siege", "loader.io", "jwt"],
  },
  {
    name: "Management",
    slug: "management",
    title: "Project management",
    tags: [
      "agile",
      "scrum",
      "product-owner",
      "scrum-master",
      "performance-management",
      "wbso",
    ],
  },
].map((data) => new Category(data));
