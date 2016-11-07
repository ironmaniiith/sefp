var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/chat'); // Connect to db

var messageSchema = new Schema({
    name: String,
    message: String,
    date: {
      type: Date,
      default: Date.now
    }
});

var Message = mongoose.model('Message', messageSchema); // This is the collection by the name 'messages' in our db

module.exports = Message; // Export the Message model (used to insert, delete, update messages stored in the db)

/** Example usage of Message model:

    // Create a custom message
    var message = new Message({
       'name': 'Ironman',
       'message': 'Hey, I am Ironman!'
    });

    // Save this message in the database
    message.save(function(err, data) {
       if (err) console.log(err);
       else console.log('Saved message:', message, 'successfully.!');
    });
*/