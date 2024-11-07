let { DataTypes, sequelize } = require("../lib/");

let company = sequelize.define("company", {
 id: {
   type: DataTypes.INTEGER,
   primaryKey: true,
 },
 name: DataTypes.TEXT,
 industry: DataTypes.TEXT,
 foundedYear: DataTypes.TEXT,
 headquarters: DataTypes.TEXT,
 revenue: DataTypes.INTEGER
});

module.exports = {
 company
};