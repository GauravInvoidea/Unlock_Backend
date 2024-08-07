const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ObjectId = Schema.Types.ObjectId;

// Custom schema type to store either ObjectId or string
const ObjectIdOrString = {
  type: Schema.Types.Mixed,
  validate: {
    validator: function (value) {
      // Check if the value is either an ObjectId or a string
      return (
        mongoose.Types.ObjectId.isValid(value) || typeof value === "string"
      );
    },
    message: "Value must be either ObjectId or string",
  },
};

const StartupChallengesSchema = new Schema({
  challengeName: { type: String, required: true },
  challengeDetails: { type: String, required: true },
  thumbnailImage: { type: String, required: true },
  bannerImage: { type: String },
  category: { type: Schema.Types.ObjectId, required: true, ref: 'categories' },
  location: { type: String, required: true },
  challengeDate: { type: Date, required: true },

  postedBy: { type: Schema.Types.ObjectId, required: true, ref: 'User' },

  slug: { type: String, required: true },
  registrationStartDate: { type: Date, required: true },
  registrationEndDate: { type: Date, required: true },
  resultDate: { type: Date, required: true },
  prizeAmount: { type: Schema.Types.Decimal128, required: true },
  type: { type: String, required: true }, // "premium" or "normal"
  registrationFee: { type: Schema.Types.Decimal128, required: true }, // If type is "premium"
  paymentStatus: { type: Number, default: 0 }, // 0 => unpaid, 1 => paid
  status: { type: Number, default: 0 }, // 0 => pending, 1 => pending for approval, 2 => Approved, 3 => Rejected
  whoCanParticipate: { type: String, required: true },
  company: { type: String, required: true }

}, { timestamps: true });

module.exports = mongoose.model("StartupChallenge", StartupChallengesSchema);


// category: { type: Schema.Types.ObjectId, required: true, ref: 'categories' },