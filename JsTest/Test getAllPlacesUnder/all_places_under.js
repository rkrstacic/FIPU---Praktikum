const places = require("./all_places");
const allPlaces = places.get_all_places();

/*
// Old solution
module.exports = (place_id) => {
	let getChildById = (id) => allPlaces.filter((p) => p.parentID == id);
	let queue = getChildById(place_id);
	let result = [];

	while (queue.length > 0) {
		let current = queue.shift();
		result.push(current);
		queue.push(...getChildById(current.id));
	}

	return result;
};
*/

// Tree implementation for Places
class TreeNode {
	constructor(value) {
		this.value = value;
		this.descendants = allPlaces
			.filter((place) => place.parentID == value.id)
			.map((place) => new TreeNode(place));
	}

	// Helper print function
	print(space = 0) {
		console.log("  ".repeat(space), "L", this.value);
		this.descendants.forEach((place) => place.print(space + 1));
	}
}

// Tree init
let place_root = new TreeNode({
	id: 0,
	name: "root",
	parentID: -1,
});

// Helper node search function
function node_search(search_id) {
	let stack = [];
	stack.push(place_root);

	while (stack.length > 0) {
		let node = stack.pop();

		// Node found
		if (node.value.id == search_id) {
			return node;
		}

		// If descendants exist, push to stack
		else if (node.descendants.length > 0) {
			stack = stack.concat(node.descendants);
		}
	}

	return -1;
}

// Main function
function get_all_places_under(place_id) {
	let node = node_search(place_id);
	let queue = [node];
	let result = [];

	while (queue.length > 0) {
		let current = queue.shift();
		result = result.concat(current.descendants);
		queue = queue.concat(current.descendants);
	}

	return result.map((tree_node) => tree_node.value);
}

module.exports = (place_id) => {
	return get_all_places_under(place_id);
};
