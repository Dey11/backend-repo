const DriverSchema = require("../models/driverModel");

exports.signUp = async (req, res) => {
  const { name, email, password, autono, uid } = req.body;
  //   console.log(req.body);
  const newDriver = DriverSchema({
    name,
    email,
    password,
    autono,
  });
  //   console.log(newDriver);

  try {
    await newDriver.save();
    res.status(200).json({ message: "Driver has been signed up." });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server error! Driver has not been signed up." });
  }
};

exports.getDriverInfo = async (req, res) => {
  const { email } = req.params;
  try {
    const driver = await DriverSchema.findOne({ email });
    // console.log(driver);
    res.status(200).json(driver);
  } catch (error) {
    res.status(500).json({ message: "Server Error!" });
  }
};

exports.finishRide = async (req, res) => {
  const { num, autono } = req.body;
  try {
    if (num === 1) {
      const driver = await DriverSchema.findOneAndUpdate(
        { autono },
        {
          passengerOneIsBooked: false,
          passengerOnePickup: "Auto Stand",
          passengerOneDestination: "Unspecified",
        },
        { returnNewDocument: true }
      );
      res.status(200).json(driver);
    } else if (num === 2) {
      const driver = await DriverSchema.findOneAndUpdate(
        { autono },
        {
          passengerTwoIsBooked: false,
          passengerTwoPickup: "Auto Stand",
          passengerTwoDestination: "Unspecified",
        },
        { returnNewDocument: true }
      );
      res.status(200).json(driver);
    } else if (num === 3) {
      const driver = await DriverSchema.findOneAndUpdate(
        { autono },
        {
          passengerThreeIsBooked: false,
          passengerThreePickup: "Auto Stand",
          passengerThreeDestination: "Unspecified",
        },
        { returnNewDocument: true }
      );
      res.status(200).json(driver);
    } else {
      const driver = await DriverSchema.findOneAndUpdate(
        { autono },
        {
          passengerFourIsBooked: false,
          passengerFourPickup: "Auto Stand",
          passengerFourDestination: "Unspecified",
        },
        { returnNewDocument: true }
      );
      res.status(200).json(driver);
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error!" });
  }
};
