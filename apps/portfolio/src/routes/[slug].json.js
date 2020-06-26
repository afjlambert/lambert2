import tags from "../_tags";

export function get(req, res, next) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
	const { slug } = req.params;
	const tag = tags.find(p => p.slug === slug);

	if (tag) {
		res.writeHead(200, {
			"Content-Type": "application/json"
		});
		res.end(
			JSON.stringify({
				tag
			})
		);
	} else {
		res.writeHead(404, {
			"Content-Type": "application/json"
		});
		res.end(
			JSON.stringify({
				message: `Not found`
			})
		);
	}
}
