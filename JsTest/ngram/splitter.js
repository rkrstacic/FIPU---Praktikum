function splitter_v1(text) {
    const breakchars = [".", "!", "?"];

    // Consider triple dot as a dot
    text = text.replaceAll("...", ".");

    // Truncate last char if it is a breakchar
    if (breakchars.includes(text[text.length - 1])) {
        text = text.slice(0, -1);
    }

    // Generate RegEx pattern for breakchar detection
    const escaped = breakchars.map((c) => c.replaceAll(/./g, "\\$& "));
    const reg = new RegExp(escaped.join("|"), "g");

    // Using RegEx object detect breakchars and split them
    return text.replaceAll(reg, " . ").split(" ");
}

const breakchars = [".", "!", "?", ":"];
const nonadditive = [",", '"'];
const breaktoken = ".";
let splitted, currentWord;

// Handler function for end of word
function endOfWordHandler(includeBreak = false) {
    // console.log(currentWord);
    if (currentWord != "") {
        splitted.push(currentWord);
    }
    if (includeBreak) {
        splitted.push(breaktoken);
    }
    currentWord = "";
}

// Main splitter function
function splitter_v2(text) {
    let stopWordReached = false;
    let stopWordChar = "";

    splitted = [];
    currentWord = "";

    for (const char of text) {
        const breakSkippable = char == " " || nonadditive.includes(char);

        // Breakchar management
        if (breakchars.includes(char)) {
            stopWordReached = true;
            stopWordChar = char;
        }

        // Valid breakpoint
        else if (stopWordReached && breakSkippable) {
            stopWordReached = false;
            endOfWordHandler((includeBreak = char == " "));
        }

        // Invalid breakpoint
        else if (stopWordReached && !breakSkippable) {
            stopWordReached = false;
            currentWord += stopWordChar + char;
        }

        // End of word
        else if (char == " ") {
            endOfWordHandler();
        }

        // Non additive characters
        else if (nonadditive.includes(char)) {
        }

        // Normal character
        else {
            currentWord += char;
        }
    }

    endOfWordHandler();
    return splitted;
}

module.exports = { splitter: splitter_v2 };
