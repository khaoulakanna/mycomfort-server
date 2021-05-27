const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dataSchema = new Schema(
  {
    user: {
      email: String
    },
    zoneId: {
      type: Number,
    },
    climat: {
      type: String,
    },
    activity: {
      type: String,
    },
    clothing: {
      type: String,
    },
    date: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Data = mongoose.model("Data", dataSchema);

module.exports = Data;
