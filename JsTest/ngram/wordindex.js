let wordIndex, queue, queueInProcess;

// Checks if two arrays are equal by values (order matters)
// Source: https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript
function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

// Generates indices of all occurrences where slice matches part of the array
function* findAllSlices(phraseArr, textArr) {
    const sliceLen = textArr.length - phraseArr.length;

    for (let i = 0; i < sliceLen; i++) {
        let tempSlice = textArr.slice(i, i + phraseArr.length);

        // Phrase found in textArr
        if (arraysEqual(tempSlice, phraseArr)) {
            yield i;
        }
    }
}

// Store the phrase into wordIndex
function storeToIndex(phrase, isLastWord, nextWord) {
    let isNextBreakword = nextWord == ".";

    // Add to the dictionary if it doesn't exist and is not a stopword
    if (!wordIndex[phrase]) {
        wordIndex[phrase] = [];
    }

    // Push if not breakword
    if (!isNextBreakword && !isLastWord) {
        wordIndex[phrase].push(nextWord);
    }
}

// Processes a single phrase
function processPhrase(phrase, splitText) {
    const phraseSplit = phrase.split(" ");
    const sliceLen = splitText.length - phraseSplit.length;

    // If phrase contains breakword or has already been processed
    if (phrase.includes(".") || wordIndex[phrase]) {
        return;
    }

    // For all occurances of phrase in splitText
    for (const index of findAllSlices(phraseSplit, splitText)) {
        const nextWord = splitText[index + phraseSplit.length];
        const isLastWord = index == sliceLen;
        storeToIndex(phrase, isLastWord, nextWord);
    }
}

// Processes all phrases within queueInProcess
function processQueue(splitText) {
    for (const currentPhrase of queueInProcess) {
        for (const suggestion of wordIndex[currentPhrase]) {
            let nextPhrase = currentPhrase + " " + suggestion;
            processPhrase(nextPhrase, splitText);
            queue.push(nextPhrase);
        }
    }
}

// Processes all phrases that start with a specific word until maxdepth is reached
function deepProcessWord(word, splitText, maxdepth = 3) {
    // Breakchar doesnt change wordIndex. No suggestions are given for breakchar
    if (word == ".") {
        return;
    }

    word = word.toLowerCase();
    processPhrase(word, splitText);

    queueInProcess = [word];
    queue = [];

    for (let depth = 1; depth < maxdepth; depth++) {
        processQueue(splitText);
        queueInProcess = [...queue];
        queue = [];
    }
}

// Function that generates index for ngram
function generateIndex(source, splitterFunc, maxdepth = 3) {
    wordIndex = {};

    let splitText = splitterFunc(source).map((word) => word.toLowerCase());
    splitText.forEach((word) => {
        deepProcessWord(word, splitText, maxdepth);
    });

    return wordIndex;
}

module.exports = { generateIndex, arraysEqual };

/*
_______ Depth = 1 ________
Suggestions = (): []
Process 1


_______ Depth = 2 ________
Suggestions = (1): [2, 3]
Process 1 2
Process 1 3


_______ Depth = 3 ________
Suggestions (1 2): [5, 9]
Process 1 2 5
Process 1 2 9

Suggestions (1 3): [11]
Process 1 3 11
*/
