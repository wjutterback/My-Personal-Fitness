const mongoose = require('mongoose');
const Workout = require('../../models/Workout');

mongoose.connect('mongodb://localhost/workout', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const router = require('express').Router();

router.get('/workouts', (req, res) => {
  Workout.find()
    .then((data) => {
      console.log(data[8]);
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post('/workouts', (req, res) => {
  console.log('workout created');
});

router.put('/workouts/:id', (req, res) => {
  const id = req.params.id;
  console.log('updated workout');
});

router.get('/workouts/range', (req, res) => {
  console.log('workout range retrieved');
});

module.exports = router;
