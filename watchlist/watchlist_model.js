import mongoose from "mongoose";
import watchlistSchema from "./watchlist_schema";
const WatchlistModel = mongoose.model("watchlist", watchlistSchema);
export default WatchlistModel;