const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user, { foreignKey: 'id_user' });
      this.belongsTo(models.flat, { foreignKey: 'id_flat' });
    }
  }
  favorite.init({
    id_user: DataTypes.INTEGER,
    id_flat: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'favorite',
  });
  return favorite;
};
