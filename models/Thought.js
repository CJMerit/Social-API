const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction')

// Schema to create a course model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280
    },
    createdDate: {
      type: Date,
      default: Date.now(),
    },
    username: {
      type: String,
      required: true
    },
    reactions: [reactionSchema]
  },
  {
    virtuals: {
      reactionCount: {
        get() {
          return this.reactions.length
        }
      }
    }
  },
  {
    toJSON: {
      virtuals: true,
    }
  }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
