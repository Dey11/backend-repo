const router = require("express").Router();
const { signUp, getDriverInfo, finishRide } = require("../controllers/driver");
const { bookUser } = require("../controllers/user");

router
  .post("/sign-up", signUp)
  .post("/finishRide", finishRide)
  .get("/get-driver-info/:email", getDriverInfo)
  .get("/reserve-ride/:pickup/:drop/:seats", bookUser);
// .get("/get-passenger-status", getPassengerStatus);

module.exports = router;
