const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutTable = new Schema({
  day: { type: Date },
  exercises: [
    {
      type: {
        type: String,
      },
      name: {
        type: String,
      },
      duration: {
        type: Number,
        min: 0,
      },
      weight: {
        type: Number,
        min: 0,
      },
      reps: {
        type: Number,
        min: 0,
      },
      sets: {
        type: Number,
        min: 0,
      },
      distance: {
        type: Number,
        min: 0,
      },
    },
  ],
});

const Model = mongoose.model('Workout', workoutTable);

module.exports = Model;
