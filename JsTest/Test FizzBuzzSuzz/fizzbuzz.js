module.exports = (n) => {
	let result = "";

	result += "Fizz".repeat(!(n % 3));
	result += "Buzz".repeat(!(n % 5));
	result += "Suzz".repeat(!(n % 7));

	return result;
};
