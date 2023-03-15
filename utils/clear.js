const connection = require('../config/connection');
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  await User.deleteMany({});
  console.log('Users deleted')

  await Thought.deleteMany({});
  console.log('Thoughts deleted')

   connection.close()
});
