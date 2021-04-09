const mongoose = require('mongoose');

// day: new Date().setDate(new Date().getDate()-7),
// exercises: [
//   {
//     type: "resistance",
//     name: "Bench Press",
//     duration: 20,
//     weight: 300,
//     reps: 10,
//     sets: 4
//   }

// exercises: [
//   {
//     type: "cardio",
//     name: "Running",
//     duration: 25,
//     distance: 4
//   }
// ]

// const Comment = new Schema({
//   name: { type: String, default: 'hahaha' },
//   age: { type: Number, min: 18, index: true },
//   bio: { type: String, match: /[a-z]/ },
//   date: { type: Date, default: Date.now },
//   buff: Buffer
// });

// const MyModel = mongoose.model('ModelName', mySchema);

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
