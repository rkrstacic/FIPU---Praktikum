const { splitter } = require("./splitter");

// Splitter unit testing
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
