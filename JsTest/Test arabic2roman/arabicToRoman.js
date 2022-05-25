let RomanDigits = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
};

// Get biggest integer from RomanKeys that can be subtracted from n
function getBiggest(n) {
    for (const num of Object.keys(RomanDigits).reverse()) {
        if (n >= num) {
            return num;
        }
    }
}

// Main function
function arabicToRoman(n) {
    if (n > 3999) {
        return "Number too big";
    }
    if (n < 0) {
        return "Number too small";
    }

    let roman = "";

    while (n > 0) {
        let biggest = getBiggest(n);
        n -= biggest;
        roman = roman.concat(RomanDigits[biggest]);
    }

    return roman;
}

module.exports = { arabicToRoman };
