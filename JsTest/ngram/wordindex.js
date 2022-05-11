// I have been good. My best friend is not a fish. I am home.

function generateIndex(source) {
    let splitText = source.split(" ");
    const wordIndex = {};

    splitText.forEach((word, i) => {
        let isStopWord = false;
        const lastChar = word.slice(-1);

        // Handling comma
        if (lastChar == ",") {
            word = word.slice(0, -1);
        }

        // Handling dot
        if (lastChar == ".") {
            word = word.slice(0, -1);
            isStopWord = true;
        }

        if (!wordIndex[word]) {
            wordIndex[word] = [];
        }

        if (!isStopWord) {
            wordIndex[word].push(splitText[i + 1]);
        }
    });

    return wordIndex;
}

function generateIndex_v2(source, splitterFunc) {
    let splitText = splitterFunc(source);
    const wordIndex = {};

    splitText.forEach((word, i) => {
        word = word.toLowerCase();
        let isBreakword = word != ".";
        let isNextBreakword = splitText[i + 1] != ".";
        let isLastWord = splitText.length - 1 != i;

        // Add to the dictionary if it doesn't exist and is not a stopword
        if (!wordIndex[word] && isBreakword) {
            wordIndex[word] = [];
        }

        // Push if not breakword
        if (isBreakword && isNextBreakword && isLastWord) {
            wordIndex[word].push(splitText[i + 1]);
        }
    });

    console.log(wordIndex);
    return wordIndex;
}

module.exports = { generateIndex: generateIndex_v2 };
