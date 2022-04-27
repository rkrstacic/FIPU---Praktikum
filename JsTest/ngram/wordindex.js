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

module.exports = { generateIndex };
