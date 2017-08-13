module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    text: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }); 
  
  Review.associate = (models) => {
    Review.belongsTo(models.User, {
      foreignKey: 'reviewUserId',
      allowNull: false,
      onDelete: 'CASCADE'
    });

    Review.belongsTo(models.Technology, {
      foreignKey: 'reviewTechnologyId',
      allowNull: false,
      onDelete: 'CASCADE'
    });
  };

  return Review;
};
