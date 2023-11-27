const mongoose = require("mongoose");

const DriverSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    autono: {
      type: String,
      required: true,
      trim: true,
    },
    passengerOneName: {
      type: String,
      trim: true,
      default: "Passenger 1",
    },
    passengerOneIsBooked: {
      type: Boolean,
      required: true,
      default: false,
    },
    passengerOnePickup: {
      type: String,
      trim: true,
      default: "Auto Stand",
      required: true,
    },
    passengerOneDestination: {
      type: String,
      trim: true,
      default: "Unspecified",
      required: true,
    },
    passengerTwoName: {
      type: String,
      trim: true,
      default: "Passenger 2",
    },
    passengerTwoIsBooked: {
      type: Boolean,
      required: true,
      default: false,
    },
    passengerTwoPickup: {
      type: String,
      trim: true,
      default: "Auto Stand",
      required: true,
    },
    passengerTwoDestination: {
      type: String,
      trim: true,
      default: "Unspecified",
      required: true,
    },
    passengerThreeName: {
      type: String,
      trim: true,
      default: "Passenger 3",
    },
    passengerThreeIsBooked: {
      type: Boolean,
      required: true,
      default: false,
    },
    passengerThreePickup: {
      type: String,
      trim: true,
      default: "Auto Stand",
      required: true,
    },
    passengerThreeDestination: {
      type: String,
      trim: true,
      default: "Unspecified",
      required: true,
    },
    passengerFourName: {
      type: String,
      trim: true,
      default: "Passenger 4",
    },
    passengerFourIsBooked: {
      type: Boolean,
      required: true,
      default: false,
    },
    passengerFourPickup: {
      type: String,
      trim: true,
      default: "Auto Stand",
      required: true,
    },
    passengerFourDestination: {
      type: String,
      trim: true,
      default: "Unspecified",
      required: true,
    },
    driverIsBooked: {
      type: String,
      default: "null", // Options: Null, Full, Filling
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Driver", DriverSchema);
