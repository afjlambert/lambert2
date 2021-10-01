import companies from "../../_companies";

const lookup = new Map();
companies.forEach(company => {
	lookup.set(company.slug, JSON.stringify(company));
});

export function get(req, res, next) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
	const { slug } = req.params;

	if (lookup.has(slug)) {
		res.writeHead(200, {
			"Content-Type": "application/json"
		});

		res.end(lookup.get(slug));
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
