// Currrent combination
let cc = 1;

const combinations = [
	["#21A3A3", "#135757", "#00D3BA", "#207373"],
	["#477FF0", "#03379e", "#1F2A3C", "#4141cc"],
	["#8D4BF2", "#4e05bc", "#8D4BF2", "#4e05bc"],
];

export const themeL = {
	palette: {
		type: "light",
		primary: {
			main: combinations[cc][0],
		},
		secondary: {
			main: combinations[cc][1],
		},
	},
};

export const themeD = {
	palette: {
		type: "dark",
		primary: {
			main: combinations[cc][0],
		},
		secondary: {
			main: combinations[cc][2],
		},
	},
};
