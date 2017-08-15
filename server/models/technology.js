module.exports = (sequelize, DataTypes) => {
  const Technology = sequelize.define('Technology', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    description: DataTypes.TEXT,
    url: DataTypes.STRING
  });
  
  Technology.associate = (models) => {
    Technology.belongsTo(models.User, {
      foreignKey: 'createdBy',
      allowNull: false,
      onDelete: 'CASCADE'
    });

    Technology.hasMany(models.Link, {
      foreignKey: 'technologyId',
      as: 'links'
    });

    Technology.hasMany(models.Vote, {
      foreignKey: 'voteTechnologyId',
      as: 'votes'
    });

    Technology.hasMany(models.Review, {
      foreignKey: 'reviewTechnologyId',
      as: 'reviews'
    });
  };

  return Technology;
};
