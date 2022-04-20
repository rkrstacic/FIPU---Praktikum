const { ngram } = require("./ngram");
const { sourceText } = require("./sourceText");
const { generateIndex } = require("./wordindex");

describe("ngram", () => {
    let index = undefined;
    beforeAll(() => {
        index = generateIndex(sourceText);
    });

    test("For 'my' return ['best']", () => {
        expect(ngram("My", index)).toStrictEqual(["best"]);
    });

    test("For 'I' return ['have', 'am']", () => {
        expect(ngram("I", index)).toStrictEqual(["have", "am"]);
    });

    test("For 'good' return []]", () => {
        expect(ngram("good", index)).toStrictEqual([]);
    });
});
