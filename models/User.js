const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thought',
      },
    ],
    friends: [
      {
      type: Schema.Types.ObjectId,
      ref: 'user',
      },
    ],
  }, 
  {
    virtuals: {
      friendCount: {
        get() {
          return this.friends.length
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

const User = model('user', userSchema);

module.exports = User;

//Create a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.