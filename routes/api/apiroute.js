const mongoose = require('mongoose');
const Workout = require('../../models/Workout');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const router = require('express').Router();

router.get('/workouts', (req, res) => {
  Workout.find()
    .lean()
    .then((data) => {
      data.forEach((id) => {
        const durationArr = [];
        id.exercises.forEach((exercise) => {
          durationArr.push(exercise.duration);
        });
        const totalDuration = durationArr.reduce((a, b) => a + b);
        Object.assign(id, { totalDuration: totalDuration });
      });
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

//When New Workout clicked - created new entry in DB
router.post('/workouts', (req, res) => {
  console.log('workout created');
  Workout.create({})
    .then((data) => res.json(data))
    .catch((err) => {
      console.log('err', err);
      res.json(err);
    });
});

//Updated new entry in DB with workout information
router.put('/workouts/:id', (req, res) => {
  const id = req.params.id;
  const body = req.body;
  console.log(JSON.stringify(req.body));
  Workout.findOneAndUpdate(
    { _id: id },
    { $push: { exercises: body } },
    { new: true }
  )
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get('/workouts/range', (req, res) => {
  Workout.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
