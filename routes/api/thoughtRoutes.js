const router = require('express').Router();
const {

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
  .delete(deleteReaction)

module.exports = router;
