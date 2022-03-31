const places = require("./all_places");
const allPlaces = places.get_all_places();

module.exports = (place_id) => {
	let getChildById = (id) => allPlaces.filter((p) => p.parentID == id);
	let queue = getChildById(place_id);
	let result = [];

	while (queue.length != 0) {
		let current = queue.shift();
		result.push(current);
		queue.push(...getChildById(current.id));
	}

	return result;
};
