export default class Model {
	constructor(data, requiredFields) {
		requiredFields.map(field => {
			if (data[field] === undefined) {
				throw Error(
					`'${field}' is not defined for Company (${JSON.stringify(data)})`
				);
			}
		});
	}
}
