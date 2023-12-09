import WatchlistModel from "./watchlist_model";

export const createWatchlist = (watchlist) => WatchlistModel.create(watchlist);

export const findWatchlistByUserID = (userId) => WatchlistModel.find({ userId });

export const updateWatchlist = (watchlistId, watchlist) =>
  WatchlistModel.updateOne({ _id: watchlistId }, { $set: watchlist });

export const deleteWatchlist = (watchlistId) => watchlistID.deleteOne({ _id: watchlistId });
