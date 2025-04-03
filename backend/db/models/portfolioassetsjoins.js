"use strict";
module.exports = (sequelize, DataTypes) => {
  const PortfolioAssetsJoins = sequelize.define(
    "PortfolioAssetsJoins",
    {
      portfolioId: DataTypes.INTEGER,
      assetId: DataTypes.INTEGER,
      quantityOfAsset: DataTypes.DECIMAL,
      costAvg: DataTypes.DECIMAL,
      history: DataTypes.ARRAY(DataTypes.TEXT),
    },
    {}
  );
  PortfolioAssetsJoins.associate = function (models) {
    // associations can be defined here
  };
  return PortfolioAssetsJoins;
};
