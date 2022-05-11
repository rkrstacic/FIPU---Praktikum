const { ngram } = require("./ngram");
const { sourceText } = require("./sourceText");
const { generateIndex, arraysEqual } = require("./wordindex");
const { splitter } = require("./splitter");

// N-gram unit testing
describe.skip("ngram", () => {
    let index = undefined;
    beforeAll(() => {
        index = generateIndex(sourceText, splitter);
    });

    test("For 'my' return ['best']", () => {
        expect(ngram("my", index)).toStrictEqual(["best"]);
    });
    test("For 'I' return ['have', 'am', 'say']", () => {
        expect(ngram("I", index)).toStrictEqual(["have", "am", "say"]);
    });
    test("For 'good' return []]", () => {
        expect(ngram("good", index)).toStrictEqual([]);
    });
    test("For 'friend' return ['is']]", () => {
        expect(ngram("friend", index)).toStrictEqual(["is"]);
    });
    test("For 'I have' return ['been']]", () => {
        expect(ngram("I have", index)).toStrictEqual(["been"]);
    });
    test("For 'I have been' return ['good']]", () => {
        expect(ngram("I have been", index)).toStrictEqual(["good"]);
    });
    test("For 'been good' return []]", () => {
        expect(ngram("been good", index)).toStrictEqual([]);
    });
    test("For 'My best friend' return ['is']]", () => {
        expect(ngram("My best friend", index)).toStrictEqual(["is"]);
    });
    test("For 'qokyprpirqp' return []]", () => {
        expect(ngram("qokyprpirqp", index)).toStrictEqual([]);
    });
    test("For '' return []]", () => {
        expect(ngram("", index)).toStrictEqual([]);
    });
});

// arraysEqual unit testing
describe.skip("arraysEqual", () => {
    test("For [1], [1] return 'true'", () => {
        expect(arraysEqual([1], [1])).toBe(true);
    });
    test("For [1], [2] return 'false'", () => {
        expect(arraysEqual([1], [2])).toBe(false);
    });
    test("For [1, 2], [1, 2] return 'true'", () => {
        expect(arraysEqual([1, 2], [1, 2])).toBe(true);
    });
    test("For [1, 2, 'abc'], [1, 2, 'abc'] return 'true'", () => {
        expect(arraysEqual([1, 2, "abc"], [1, 2, "abc"])).toBe(true);
    });
    test("For [1, 'abc', 2], [1, 2, 'abc'] return 'false'", () => {
        expect(arraysEqual([1, "abc", 2], [1, 2, "abc"])).toBe(false);
    });
    test("For [1, '', 2, 3], [1, '', 2] return 'false'", () => {
        expect(arraysEqual([1, "", 2, 3], [1, "", 2])).toBe(false);
    });
    test("For [], [1] return 'false'", () => {
        expect(arraysEqual([], [1])).toBe(false);
    });
    test("For [], [] return 'true'", () => {
        expect(arraysEqual([], [])).toBe(true);
    });
});
