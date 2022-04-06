const fizzBuzz = require("./fizzbuzz");

describe.skip("fizzBuzz", () => {
	test("ako je x=3 vrati fizz", () => {
		expect(fizzBuzz(3)).toBe("Fizz");
	});
	test("ako je x=5 vrati Buzz", () => {
		expect(fizzBuzz(5)).toBe("Buzz");
	});
	test("ako je x=15 vrati FizzBuzz", () => {
		expect(fizzBuzz(15)).toBe("FizzBuzz");
	});
	test("ako nije djeljiv s 3 i 5 vrati prazan string", () => {
		expect(fizzBuzz(4)).toBe("");
	});
	test("ako je x=6 vrati fizz", () => {
		expect(fizzBuzz(6)).toBe("Fizz");
	});
	test("ako je x=10 vrati fizz", () => {
		expect(fizzBuzz(10)).toBe("Buzz");
	});
	test("ako je x=30 vrati fizz", () => {
		expect(fizzBuzz(30)).toBe("FizzBuzz");
	});
	test("ako je x=7 vrati Suzz", () => {
		expect(fizzBuzz(7)).toBe("Suzz");
	});
	test("ako je x=14 vrati Suzz", () => {
		expect(fizzBuzz(14)).toBe("Suzz");
	});
	test("ako je x=105 vrati FizzBuzzSuzz", () => {
		expect(fizzBuzz(105)).toBe("FizzBuzzSuzz");
	});
});
