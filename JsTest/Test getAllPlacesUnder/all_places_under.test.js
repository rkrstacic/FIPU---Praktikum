const all_places_under = require("./all_places_under");
const places = require("./all_places");

describe("getAllPlacesUnder testing", () => {
	test("For id 0 return Croatia, Istria, Pula, Rovinj and Dalmacija", () => {
		expect(all_places_under(0)).toStrictEqual([
			places.croatia,
			places.istria,
			places.dalmacija,
			places.pula,
			places.rovinj,
		]);
	});
	test("For id 1 return Istria, Pula, Rovinj and Dalmacija", () => {
		expect(all_places_under(1)).toStrictEqual([
			places.istria,
			places.dalmacija,
			places.pula,
			places.rovinj,
		]);
	});
	test("For id 2 return Istria, Pula, Rovinj and Dalmacija", () => {
		expect(all_places_under(2)).toStrictEqual([places.pula, places.rovinj]);
	});
});

/*

0 -> croatia, istria, pula, rovinj, dalmacija
1 -> istria, pula, rovinj, dalmacija
2 -> pula, rovinj

*/
