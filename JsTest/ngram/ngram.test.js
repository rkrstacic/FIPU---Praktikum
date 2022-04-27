const { ngram } = require("./ngram");
const { sourceText } = require("./sourceText");
const { generateIndex } = require("./wordindex");
const { splitter } = require("./splitter");

describe("splitter", () => {
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
        ["abc", "def", ".", "ghi", "email.com", "hello"];
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
});

describe.skip("ngram", () => {
    let index = undefined;
    beforeAll(() => {
        index = generateIndex(sourceText);
    });

    test("For 'my' return ['best']", () => {
        expect(ngram("My", index)).toStrictEqual(["best"]);
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
});
