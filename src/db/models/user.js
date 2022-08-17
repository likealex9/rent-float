const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.favorite, { foreignKey: 'id_user' });
      this.hasMany(models.flatCategories, { foreignKey: 'id_user' });
    }
  }
  user.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};
