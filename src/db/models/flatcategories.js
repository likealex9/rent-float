const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class flatCategories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.flat, { foreignKey: 'id_category' });
    }
  }
  flatCategories.init({
    categorie: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'flatCategories',
  });
  return flatCategories;
};
