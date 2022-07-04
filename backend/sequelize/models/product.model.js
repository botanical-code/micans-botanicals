const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('product', {

        name: {
            allowNull: false,
            type: DataTypes.STRING(50)
        }, 

        description: {
            allowNull: false, 
            type: DataTypes.STRING(255)
        }, 

        price: {
            allowNull: false, 
            type: DataTypes.INTEGER
        }, 

        picture: {
            allowNull: false,
            type: DataTypes.STRING(255)
        }
    })
}