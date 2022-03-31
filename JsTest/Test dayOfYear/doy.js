module.exports = (year, month, day) => {
	day += --month * 31 - Math.floor((month - (month > 7)) / 2);

	if (month > 1) {
		day -= 2 - ((0 == year % 4 && 0 != year % 100) || 0 == year % 400);
	}

	return day;
};

/*
module.exports = (year, month, day) => {
	return day + --month * 31 - Math.floor((month - (month > 7)) / 2) - (month > 1) * (2 - ((0 == year % 4 && 0 != year % 100) || 0 == year % 400));
};
*/
