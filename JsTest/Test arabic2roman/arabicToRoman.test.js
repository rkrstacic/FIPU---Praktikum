const { arabicToRoman } = require("./arabicToRoman");

describe("Arabic To Roman", () => {
    test("For 1 return 'I'", () => {
        expect(arabicToRoman(1)).toBe("I");
    });
    test("For 2 return 'II'", () => {
        expect(arabicToRoman(2)).toBe("II");
    });
    test("For 3 return 'III'", () => {
        expect(arabicToRoman(3)).toBe("III");
    });
    test("For 5 return 'V'", () => {
        expect(arabicToRoman(5)).toBe("V");
    });
    test("For > 3999 return 'Number too big'", () => {
        expect(arabicToRoman(4000)).toBe("Number too big");
    });
    test("For < 0 return 'Number too small'", () => {
        expect(arabicToRoman(-10)).toBe("Number too small");
    });
    test("For 4 return 'IV'", () => {
        expect(arabicToRoman(4)).toBe("IV");
    });
    test("For 8 return 'VIII'", () => {
        expect(arabicToRoman(8)).toBe("VIII");
    });
    test("For 9 return 'IX'", () => {
        expect(arabicToRoman(9)).toBe("IX");
    });
    test("For 10 return 'X'", () => {
        expect(arabicToRoman(10)).toBe("X");
    });
    test("For 14 return 'XIV'", () => {
        expect(arabicToRoman(14)).toBe("XIV");
    });
    test("For 19 return 'XIX'", () => {
        expect(arabicToRoman(19)).toBe("XIX");
    });
    test("For 24 return 'XXIV'", () => {
        expect(arabicToRoman(24)).toBe("XXIV");
    });
    test("For 29 return 'XXIX'", () => {
        expect(arabicToRoman(29)).toBe("XXIX");
    });
    test("For 40 return 'XL'", () => {
        expect(arabicToRoman(40)).toBe("XL");
    });
});
