const places = require("./all_places");
const allPlaces = places.get_all_places();

// Tree class
class TreeNode {
	constructor() {
		this.value = {};
		this.descendants = [];
	}
}

function construct_place_tree(all_places, id = 0) {
	return all_places
		.filter((place) => place.parentID === id)
		.map((place) => {
			let tree_node = new TreeNode();
			tree_node.value = place;
			tree_node.descendants = construct_place_tree(all_places, place.id);
			return tree_node;
		});
}

// Helper node search function
function node_search(place_root, search_id) {
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

// Tree init
let place_root = new TreeNode();
place_root.value = { id: 0, name: "root", parentID: -1 };
place_root.descendants = construct_place_tree(allPlaces, place_root.value.id);

// Main function
function get_all_places_under(place_id) {
	let node = node_search(place_root, place_id);
	let queue = [node];
	let result = [];

	while (queue.length > 0) {
		let current = queue.shift();
		result = result.concat(current.descendants);
		queue = queue.concat(current.descendants);
	}

	return result.map((tree_node) => tree_node.value);
}

module.exports = (place_id) => get_all_places_under(place_id);
