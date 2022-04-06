// Join
function join(arr, sep) {
	return arr.reduce((prev, curr) => prev + sep + curr);
}

console.log(join(["a", "ab", "bcd"], ", "));
