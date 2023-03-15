const router = require('express').Router();
const {
  getThoughts,
  createThought,
  getSingleThought,
  deleteThought,
  updateThought,
  createReaction,
  deleteReaction
} = require('../../controllers/thoughtController.js');

router.route('/')
  .get(getThoughts)
  .post(createThought);

router.route('/:thoughtId')
  .get(getSingleThought)
  .delete(deleteThought)
  .put(updateThought)

router.route('/:thoughtId/reactions')
  .post(createReaction)
  
router.route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction)

module.exports = router;
