module.exports = (sequelize, DataTypes) => {
  const Link = sequelize.define('Link', {
    name: {
      type: DataTypes.STRING,
      allowNull: false      
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false      
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Link.associate = (models) => {
    Link.belongsTo(models.Technology, {
      foreignKey: 'technologyId',
      allowNull: false,
      onDelete: 'CASCADE'
    });
  };

  return Link;
};
