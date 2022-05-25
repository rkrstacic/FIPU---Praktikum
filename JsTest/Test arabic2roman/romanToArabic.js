function romanToArabic(roman) {
    let value = 0;
    for (let i = 0; i < roman.length; i++) {
        let current = char_to_int(roman.charAt(i));
        let next = char_to_int(roman.charAt(i + 1));
        value += ((current >= next) * 2 - 1) * current;
    }
    return value;
}

function char_to_int(character) {
    switch (character) {
        case "I":
            return 1;
        case "V":
            return 5;
        case "X":
            return 10;
        case "L":
            return 50;
        case "C":
            return 100;
        case "D":
            return 500;
        case "M":
            return 1000;
        default:
            return -1;
    }
}

console.log(romanToArabic("IV"));
console.log(romanToArabic("XXIV"));
console.log(romanToArabic("XLIV"));
console.log(romanToArabic("DC"));
