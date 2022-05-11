const { ngram } = require("./ngram");
const { sourceText } = require("./sourceText");
const { generateIndex } = require("./wordindex");
const { splitter } = require("./splitter");

describe.skip("splitter", () => {
    test("For 'abc' return ['abc']", () => {
        expect(splitter("abc")).toStrictEqual(["abc"]);
    });
    test("For 'abc def' return ['abc', 'def']", () => {
        expect(splitter("abc def")).toStrictEqual(["abc", "def"]);
    });
    test("For 'abc def. ghi' return ['abc', 'def', '.', 'ghi']", () => {
        const expected = ["abc", "def", ".", "ghi"];
        expect(splitter("abc def. ghi")).toStrictEqual(expected);
    });
    test("For 'abc def. ghi email.com hello...' return ['abc', 'def', '.', 'ghi', 'email.com', 'hello']", () => {
        const expected = ["abc", "def", ".", "ghi", "email.com", "hello"];
        expect(splitter("abc def. ghi email.com hello...")).toStrictEqual(
            expected
        );
    });
    test("For 'abc! def. ghi email.com hello...' return ['abc', '.', 'def', '.', 'ghi', 'email.com', 'hello', '.']", () => {
        const expected = ["abc", ".", "def", ".", "ghi", "email.com", "hello"];
        expect(splitter("abc! def. ghi email.com hello...")).toStrictEqual(
            expected
        );
    });
    test(`For 'I say: "hello, how are you?"' return ['I', 'say', '.', 'hello', 'how', 'are', 'you']`, () => {
        const expected = ["I", "say", ".", "hello", "how", "are", "you"];
        expect(splitter('I say: "hello, how are you?"')).toStrictEqual(
            expected
        );
    });
});

describe("ngram", () => {
    let index = undefined;
    beforeAll(() => {
        index = generateIndex(sourceText, splitter);
    });

    test("For 'my' return ['best']", () => {
        expect(ngram("my", index)).toStrictEqual(["best"]);
    });

    test("For 'i' return ['have', 'am', 'say']", () => {
        expect(ngram("i", index)).toStrictEqual(["have", "am", "say"]);
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
});
