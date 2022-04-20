/*
let map = {
    I: ["have", "am"],
    have: ["been"],
    good: [],
    My: ["best"],
};
*/

// I have been good. My best friend is not a fish. I am home.

function generateIndex(source) {
    let splitText = source.split(" ");
    const wordIndex = {};

    splitText.forEach((word, i) => {
        if (!wordIndex[word]) {
            wordIndex[word] = [];
        }

        wordIndex[word].push(splitText[i + 1]);
    });

    return wordIndex;
}

module.exports = { generateIndex };
