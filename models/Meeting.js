const mongoose = require("mongoose");

// Define Meeting Schema
const meetingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true, // Remove extra whitespace
  },
  date: {
    type: Date,
    required: true,
  },
  users: {
    type: [String], // List of user IDs or names
    default: [],
  },
  agenda: {
    type: String, // Optional meeting agenda
    default: "",
    trim: true,
  },
  isRecording: {
    type: Boolean, // Flag to check if the meeting is being recorded
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically set when the meeting is created
  },
  updatedAt: {
    type: Date,
    default: Date.now, // Automatically update when the meeting is modified
  },
});

// Update the `updatedAt` field automatically on save
meetingSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

// Create and export the Meeting model
const Meeting = mongoose.model("Meeting", meetingSchema);

module.exports = Meeting;
