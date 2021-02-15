const mongoose = require("mongoose")

const Schema = mongoose.Schema

const friendSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },

    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model("Friend", friendSchema)