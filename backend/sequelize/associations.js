function applyAssociations(sequelize) {
    const { category, product } = sequelize.models;

    category.hasMany(product);
    product.belongsto(category);
}

module.exports = { applyAssociations };