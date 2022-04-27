function splitter(text) {
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

module.exports = { splitter };
