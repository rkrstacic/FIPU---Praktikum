module.exports = {
	croatia: {
		id: 1,
		name: "Croatia",
		parentID: 0, // Root element
	},
	istria: {
		id: 2,
		name: "Istria",
		parentID: 1,
	},
	pula: {
		id: 3,
		name: "Pula",
		parentID: 2,
	},
	rovinj: {
		id: 4,
		name: "Rovinj",
		parentID: 2,
	},
	dalmacija: {
		id: 5,
		name: "Dalmacija",
		parentID: 1,
	},

	get_all_places: function () {
		return [
			this.croatia,
			this.istria,
			this.pula,
			this.rovinj,
			this.dalmacija,
		];
	},
};
