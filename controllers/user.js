const DriverSchema = require("../models/driverModel");

exports.bookUser = async (req, res) => {
  const { pickup, drop, seats } = req.params;
  try {
    const driver = await DriverSchema.findOne({ driverIsBooked: "filling" });
    var freeSeats = 0;

    if (driver) {
      const autono = driver.autono;

      if (!driver.passengerFourIsBooked) {
        freeSeats++;
      }
      if (!driver.passengerThreeIsBooked) {
        freeSeats++;
      }
      if (!driver.passengerTwoIsBooked) {
        freeSeats++;
      }

      if (seats === freeSeats || seats > freeSeats) {
        if (freeSeats === 1) {
          const updatedDriver = await DriverSchema.findOneAndUpdate(
            { autono },
            {
              passengerFourDestination: drop,
              passengerFourIsBooked: true,
              passengerFourPickup: pickup,
            }
          );
        } else if (freeSeats === 2) {
          const updatedDriver = await DriverSchema.findOneAndUpdate(
            { autono },
            {
              passengerFourDestination: drop,
              passengerFourIsBooked: true,
              passengerFourPickup: pickup,
              passengerThreeDestination: drop,
              passengerThreeIsBooked: true,
              passengerThreePickup: pickup,
            }
          );
        } else {
          const updatedDriver = await DriverSchema.findOneAndUpdate(
            { autono },
            {
              driverIsBooked: "full",
              passengerFourDestination: drop,
              passengerFourIsBooked: true,
              passengerFourPickup: pickup,
              passengerThreeDestination: drop,
              passengerThreeIsBooked: true,
              passengerThreePickup: pickup,
              passengerTwoDestination: drop,
              passengerTwoIsBooked: true,
              passengerTwoPickup: pickup,
            }
          );
        }
      } else if (freeSeats > seats) {
        if ((freeSeats === 3 || freeSeats === 2) && seats === 1) {
          const updatedDriver = await DriverSchema.findOneAndUpdate(
            { autono },
            {
              passengerTwoDestination: drop,
              passengerTwoIsBooked: true,
              passengerTwoPickup: pickup,
            }
          );
        } else if (freeSeats === 3 && seats === 2) {
          const updatedDriver = await DriverSchema.findOneAndUpdate(
            { autono },
            {
              passengerThreeDestination: drop,
              passengerThreeIsBooked: true,
              passengerThreePickup: pickup,
              passengerTwoDestination: drop,
              passengerTwoIsBooked: true,
              passengerTwoPickup: pickup,
            }
          );
        }
      }
      res.status(200).json({ autono: autono });
    } else {
      const driver = await DriverSchema.findOneAndUpdate(
        { driverIsBooked: "null" },
        { driverIsBooked: "filling" },
        { returnNewDocument: true }
      );
      var freeSeats = 4;
      const autono = driver.autono;
      if (seats === 4) {
        const updatedDriver = await DriverSchema.findOneAndUpdate(
          { autono },
          {
            driverIsBooked: "full",
            passengerOnePickup: pickup,
            passengerOneDestination: drop,
            passengerOneIsBooked: true,
            passengerTwoPickup: pickup,
            passengerTwoDestination: drop,
            passengerTwoIsBooked: true,
            passengerThreePickup: pickup,
            passengerThreeDestination: drop,
            passengerThreeIsBooked: true,
            passengerFourPickup: pickup,
            passengerFourDestination: drop,
            passengerFourIsBooked: true,
          },
          { returnNewDocument: true }
        );
        res.status(200).json({ autono: autono });
      } else if (seats === 3) {
        const updatedDriver = await DriverSchema.findOneAndUpdate(
          { autono },
          {
            passengerOnePickup: pickup,
            passengerOneDestination: drop,
            passengerOneIsBooked: true,
            passengerTwoPickup: pickup,
            passengerTwoDestination: drop,
            passengerTwoIsBooked: true,
            passengerThreePickup: pickup,
            passengerThreeDestination: drop,
            passengerThreeIsBooked: true,
          },
          { returnNewDocument: true }
        );
        res.status(200).json({ autono: autono });
      } else if (seats === 2) {
        const updatedDriver = await DriverSchema.findOneAndUpdate(
          { autono },
          {
            passengerOnePickup: pickup,
            passengerOneDestination: drop,
            passengerOneIsBooked: true,
            passengerTwoPickup: pickup,
            passengerTwoDestination: drop,
            passengerTwoIsBooked: true,
          },
          { returnNewDocument: true }
        );
        res.status(200).json({ autono: autono });
      } else {
        const updatedDriver = await DriverSchema.findOneAndUpdate(
          { autono },
          {
            passengerOnePickup: pickup,
            passengerOneDestination: drop,
            passengerOneIsBooked: true,
          },
          { returnNewDocument: true }
        );
        res.status(200).json({ autono: autono });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error!" });
  }
};
