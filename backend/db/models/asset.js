"use strict";
module.exports = (sequelize, DataTypes) => {
  const Asset = sequelize.define(
    "Asset",
    {
      cmcId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      symbol: DataTypes.STRING,
      tags: DataTypes.ARRAY(DataTypes.STRING(64)),
      quotes: DataTypes.TEXT,
      assetDetails: DataTypes.TEXT,
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
