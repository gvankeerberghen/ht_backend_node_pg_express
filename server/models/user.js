module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  User.associate = (models) => {
      User.hasMany(models.Technology, {
        foreignKey: 'createdBy',
        as: 'createdTechnologies',
      });

      User.hasMany(models.Vote, {
        foreignKey: 'voteUserId',
        as: 'votes',
      });

      User.hasMany(models.Review, {
        foreignKey: 'reviewUserId',
        as: 'reviews',
      });
  };

  return User;
};
