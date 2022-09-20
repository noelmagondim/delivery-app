const Sale = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sales', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    userId: { 
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sellerId: {
     type: DataTypes.INTEGER,
     allowNull: false,
    },
    totalPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    deliveryAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deliveryNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    saleDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
      timestamps: false,
      tableName: 'sales',
      underscored: true,
  });
  Sale.associate = (models) => {
    Sale.belongsTo(models.User, { as: 'user', foreignKey: 'userId'});
    Sale.belongsTo(models.User, { as: 'seller', foreignKey: 'sellerId'})
  };
  return Sale;
};

module.exports = Sale;
