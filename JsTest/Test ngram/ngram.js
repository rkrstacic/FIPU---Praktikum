function ngram(searchTerm, index) {
    searchTerm = searchTerm.toLowerCase();
    return index[searchTerm] ?? [];
}

module.exports = { ngram };
