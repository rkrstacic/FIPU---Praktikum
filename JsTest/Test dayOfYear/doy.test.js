const doy = require("./doy");

describe.skip("dayOfYear", () => {
	test("ako je year=2000, month=1, day=1 vrati 1", () => {
		expect(doy(2000, 1, 1)).toBe(1);
	});
	test("ako je year=2000, month=2, day=1 vrati 32", () => {
		expect(doy(2000, 2, 1)).toBe(32);
	});
	test("ako je year=2001, month=2, day=1 vrati 32", () => {
		expect(doy(2001, 2, 1)).toBe(32);
	});
	test("ako je year=2001, month=3, day=1 vrati 60", () => {
		expect(doy(2001, 3, 1)).toBe(60);
	});
	test("ako je year=2000, month=3, day=1 vrati 61", () => {
		expect(doy(2000, 3, 1)).toBe(61);
	});
	test("ako je year=2001, month=12, day=31 vrati 365", () => {
		expect(doy(2001, 12, 31)).toBe(365);
	});
	test("ako je year=2012, month=9, day=15 vrati 259", () => {
		expect(doy(2012, 9, 15)).toBe(259);
	});
	test("ako je year=2011, month=9, day=15 vrati 258", () => {
		expect(doy(2011, 9, 15)).toBe(258);
	});
	test("ako je year=2013, month=12, day=24 vrati 358", () => {
		expect(doy(2013, 12, 24)).toBe(358);
	});
	test("ako je year=2016, month=12, day=24 vrati 359", () => {
		expect(doy(2016, 12, 24)).toBe(359);
	});
});
