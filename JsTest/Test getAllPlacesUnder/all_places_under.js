const places = require("./all_places");

module.exports = (place_id) => {
	let result = [];
	let queue = getChildById(place_id);

	while (queue.length != 0) {
		let current = queue.shift();
		result.push(current);
		queue.push(...getChildById(current.id));
	}

	return result;
};

function getChildById(id) {
	return places.get_all_places().filter((p) => p.parentID == id);
}
