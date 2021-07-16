const {sequelize, DataTypes, Model} = require('./db');


class Menu extends Model {}

Menu.init({
    description: DataTypes.TEXT,
    menu_item: DataTypes.STRING,
    cost: DataTypes.FLOAT
},{
    sequelize,
    timestamps: false
})

module.exports = {Menu};