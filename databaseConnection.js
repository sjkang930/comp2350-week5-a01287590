const mysql = require('mysql2');

const is_heroku = process.env.IS_HEROKU || false;
// mysql://v3yrm8s87w5zaqhh:rehh25cbxqq7ho4m@lfmerukkeiac5y5w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/b3d62wund54zoe75
const dbConfigHeroku = {
	host: "lfmerukkeiac5y5w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
	user: "v3yrm8s87w5zaqhh",
	password: "rehh25cbxqq7ho4m",
	database: "b3d62wund54zoe75",
	multipleStatements: false,
};

const dbConfigLocal = {
	host: "lfmerukkeiac5y5w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
	user: "v3yrm8s87w5zaqhh",
	password: "rehh25cbxqq7ho4m",
	database: "b3d62wund54zoe75",
	multipleStatements: false,
};
//mysql://v3yrm8s87w5zaqhh:claoehzuijpmz6a9@lfmerukkeiac5y5w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/b3d62wund54zoe75
if (is_heroku) {
	var database = mysql.createPool(dbConfigHeroku);
}
else {
	var database = mysql.createPool(dbConfigLocal);
}

module.exports = database;
		