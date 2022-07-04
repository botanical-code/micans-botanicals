const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('category', {

        name: {
            allowNull: false,
            type: DataTypes.STRING(20)

        }, 

        description: {
            allowNull: false, 
            type: DataTypes.STRING(255)
        }
    })
}