import * as watchlistdoa from "./watchlist_dao.js";

function WatchlistRoutes(app) {
  const createWatchlist = async (req, res) => {
    try{
      console.log("creating");
      const watchlist = await watchlistdoa.createWatchlist(req.body);
      res.json(watchlist);
    }
    catch {
      console.error("Error creating watchlist", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  const findWatchlistByUserID = async (req, res) => {
    try {
      console.log(req.params.userId);
      const watchlist = await watchlistdoa
        .findWatchlistByUserID(req.params.userId)
        .populate("userId");
      console.log(watchlist);
      res.json(watchlist);
    } catch (error) {
      console.error("Error fetching watchlist by user ID", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  const updateWatchlist = async (req, res) => {
    const { watchlistId } = req.params;
    const status = await watchlistdoa.updateWatchlist(watchlistId, req.body);
    res.json(status);
  };

  const deleteWatchlist = async (req, res) => {
    const status = await watchlistdoa.deleteWatchlist(req.params.watchlistId);
    res.json(status);
  };

  app.post("/api/watchlist", createWatchlist);
  app.get("/api/watchlist/:userId", findWatchlistByUserID);
  app.put("/api/watchlist/:watchlistId", updateWatchlist);
  app.delete("/api/watchlist/:watchlistId", deleteWatchlist);
}

export default WatchlistRoutes;
