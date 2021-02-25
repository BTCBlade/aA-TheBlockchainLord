"use strict";
module.exports = (sequelize, DataTypes) => {
  const Portfolio = sequelize.define(
    "Portfolio",
    {
      name: DataTypes.STRING,
      cashUSD: DataTypes.DECIMAL,
      createdByUserId: DataTypes.INTEGER,
      followedByUsers: DataTypes.ARRAY(DataTypes.INTEGER),
    },
    {}
  );
  Portfolio.associate = function (models) {
    // associations can be defined here
    Portfolio.belongsTo(models.User, { foreignKey: "createdByUserId" });
    //Portfolio.hasMany(models.Asset);
    Portfolio.belongsToMany(models.Asset, {
      through: "PortfolioAssetsJoins",
      foreignKey: "portfolioId",
      otherKey: "assetId",
    });
  };
  return Portfolio;
};
