'use strict';
module.exports = (sequelize, DataTypes) => {
  const PortfolioAssetsJoins = sequelize.define('PortfolioAssetsJoins', {
    portfolioId: DataTypes.INTEGER,
    assetId: DataTypes.INTEGER
  }, {});
  PortfolioAssetsJoins.associate = function(models) {
    // associations can be defined here
  };
  return PortfolioAssetsJoins;
};