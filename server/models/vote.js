const User = require('../models').User;
const Technology = require('../models').Technology;

module.exports = (sequelize, DataTypes) => {
  const Vote = sequelize.define('Vote', {});
  
  Vote.associate = (models) => {
    Vote.belongsTo(models.User, {
      foreignKey: 'voteUserId',
      allowNull: false,
      onDelete: 'CASCADE'
    });

    Vote.belongsTo(models.Technology, {
      foreignKey: 'voteTechnologyId',
      allowNull: false,
      onDelete: 'CASCADE'
    });
  };

  return Vote;
};
