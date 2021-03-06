import projects from "../../_projects";

export function get(req, res, next) {
  // the `slug` parameter is available because
  // this file is called [slug].json.js
  const { slug } = req.params;
  const project = projects.find((p) => p.slug === slug);
  let index = projects.indexOf(project);
  const nextP = projects[index - 1];
  const prevP = projects[index + 1];

  if (project) {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end(
      JSON.stringify({
        project,
        next: nextP ? { slug: nextP.slug, name: nextP.name } : null,
        prev: prevP ? { slug: prevP.slug, name: prevP.name } : null,
      })
    );
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json",
    });
    res.end(
      JSON.stringify({
        message: `Not found`,
      })
    );
  }
}
