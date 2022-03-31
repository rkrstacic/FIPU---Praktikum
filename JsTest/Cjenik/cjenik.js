const raw_data = [
	{ from: "2020-01-01", to: "2020-02-01", price: 34.5 },
	{ from: "2020-02-02", to: "2020-03-01", price: 37.0 },
	{ from: "2020-03-02", to: "2020-05-15", price: 39.0 },
	{ from: "2020-05-16", to: "2020-06-15", price: 37.0 },
];

// Vrati formatirani datuma raw_data objekta kao string
function get_date_string(item) {
	return item.from + " do " + item.to;
}

// Vrati sve formatirane datume niza raw_data objekta u jedan string
function get_all_dates(items) {
	return items.map((el) => get_date_string(el)).join(", ");
}

// Grupiranje
let result = raw_data.reduce(function (prev, curr) {
	prev[curr.price] = prev[curr.price] || [];
	prev[curr.price].push(curr);
	return prev;
}, {});

// Ispis
for (const [key, value] of Object.entries(result)) {
	console.log(`${key}: ${get_all_dates(value)}`);
}

/*
console.log("34.5 : 2020-01-01 do 2020-02-01");
console.log("37.0 : 2020-02-02 do 2020-03-01, 2020-05-15 do 2020-06-15");
console.log("39.0 : 2020-03-02 do 2020-05-15");
*/
