module.exports = (sequelize, _DataTypes) => {
  const SalesProducts = sequelize.define('salesProducts',
    {},
    { timestamps: false, tableName: 'salesProducts' });

    sales.associate = (models) => {
    models.BlogPost.belongsToMany(models.Categorie, {
      as: 'categories',
      through: PostsCategorie,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });

    models.Categorie.belongsToMany(models.BlogPost, {
      as: 'blogposts',
      through: PostsCategorie,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return SalesProducts;
