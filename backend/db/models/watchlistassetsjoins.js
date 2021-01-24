'use strict';
module.exports = (sequelize, DataTypes) => {
  const WatchlistAssetsJoins = sequelize.define('WatchlistAssetsJoins', {
    watchlistId: DataTypes.INTEGER,
    assetId: DataTypes.INTEGER
  }, {});
  WatchlistAssetsJoins.associate = function(models) {
    // associations can be defined here
  };
  return WatchlistAssetsJoins;
};