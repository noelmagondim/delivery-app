const Product = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    urlImage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
      tableName: 'products',
      timestamps: false,
      underscored: true,
  });

  Product.associate = (models) => {
    Product.hasMany(models.SaleProduct, { foreignKey: 'productId', as: 'salesProducts' });
  };

  return Product;
}

module.exports = Product;
