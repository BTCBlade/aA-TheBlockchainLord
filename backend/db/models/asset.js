"use strict";
module.exports = (sequelize, DataTypes) => {
  const Asset = sequelize.define(
    "Asset",
    {
      symbol: DataTypes.STRING,
      fullName: DataTypes.STRING,
      assetDetails: DataTypes.JSON,
      assetCategories: DataTypes.ARRAY(DataTypes.STRING(64)),
      backupUSDPrice: DataTypes.NUMERIC,
    },
    {}
  );
  Asset.associate = function (models) {
    // associations can be defined here
    Asset.belongsToMany(models.Portfolio, {
      through: "PortfolioAssetsJoins",
      foreignKey: "assetId",
      otherKey: "portfolioId",
    });
    Asset.belongsToMany(models.Watchlist, {
      through: "WatchlistAssetsJoins",
      foreignKey: "assetId",
      otherKey: "watchlistId",
    });
  };
  return Asset;
};
