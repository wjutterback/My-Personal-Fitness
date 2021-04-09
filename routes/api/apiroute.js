const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/workout', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const router = require('express').Router();

router.get('/workouts', (req, res) => {
  console.log('getLastWorkout Triggered, /api/workouts fetched');
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
