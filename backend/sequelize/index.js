const { Sequelize } = require('sequelize');
const { applyAssociations } = require('./associations');
const productDefiner = require('./models/product.model');
const categoryDefiner = require('./models/category.model');

const sequelize = new Sequelize('postgres://fjmfaudv:3mHYklewh-Sv2NCB36Z6baEL7HNOoK1f@jelani.db.elephantsql.com/fjmfaudv')

productDefiner(sequelize);
categoryDefiner(sequelize);

applyAssociations(sequelize);

module.exports = { sequelize };