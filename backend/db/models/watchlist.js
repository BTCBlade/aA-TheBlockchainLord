"use strict";
module.exports = (sequelize, DataTypes) => {
  const Watchlist = sequelize.define(
    "Watchlist",
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {}
  );
  Watchlist.associate = function (models) {
    Watchlist.belongsTo(models.User, { foreignKey: "userId" });
    //Watchlist.hasMany(models.Asset);
    Watchlist.belongsToMany(models.Asset, {
      through: "WatchlistAssetsJoins",
      foreignKey: "watchlistId",
      otherKey: "assetId",
    });
  };
  return Watchlist;
};
