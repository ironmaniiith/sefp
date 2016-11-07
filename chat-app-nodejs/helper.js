var Message = require('./models/Message');

// List of parameters to exclude while retrieving data from database
var excludeParams = {
    // _id: false,
    __v: false
};

/** 
  * insertMessage:
  *    Inserts the message with given parameters into the database
  *
  *  @param {String} [message] Message to insert into database
  *  @param {String} [name] Name correspondint to the given message
  *  @param {Function} [callBack] The callback function
  *                               The first parameter passed to callBack function is `true` if no error occurs, else `false`
  */
function insertMessage(message, name, callBack) {
    var msg = Message({
        message: message,
        name: name
    });

    // Store the message into the database
    // The save method written below is 'asynchronous' method
    msg.save(function(err, data) {
        var status, output;
        if (err) {
            // throw (err);
            status = false;
            output = err;
        }
        else {
            // console.log('Message successfully inserted');
            status = true;
            output = 'Message successfully inserted!';
        }
        if (callBack) callBack(status, output);
    });
}

/** 
  * getAllMessages:
  *    Extracts all the messages from the databases
  *
  *  @param {Function} [callBack] The callback function to which all the messages are passed
  *                               The first parameter passed to callBack function is `true` if no error occurs, else `false`
  */
function getAllMessages(callBack) {
    Message.find({}, excludeParams, function(err, messages) {
        // console.log(messages);
        var status, output;
        if (err) {
            // throw (err);
            status = false;
            output = err;
        }
        else {
            // console.log('Extracted messages:', messages);
            status = true;
            output = messages;
        }
        if (callBack) callBack(status, output);
    });
}

/** 
  * getMessageById:
  *    Extracts the message corresponding to the given id
  *
  *  @param {String} [id] The callback function to which all the messages are passed
  *  @param {Function} [callBack] The callback function to which all the messages are passed
  *                               The first parameter passed to callBack function is `true` if no error occurs, else `false`
  */
function getMessageById(id, callBack) {
    Message.findById(id, excludeParams, function(err, message) {
        var status, output;
        if (err) {
            // throw (err);
            status = true;
            output = err;
        }
        else {
            // console.log('Extracted the message:', message);
            status = true;
            output = message;
        }
        if (callBack) callBack(status, output);
    });
}

/** 
  * deleteAllMessages:
  *    Deletes all the messages from the databases
  *
  *  @param {Function} [callBack] The callback function to which all the messages are passed
  */
function deleteAllMessages(callBack) {
    Message.remove({}, function(err) {
        var status, output;
        if (err) {
            // throw (err);
            status = false;
            output = 'Some error occured';
        }
        else {
            // console.log('Extracted messages:', messages);
            status = true;
            output = 'All messages successfully deleted';
        }
        if (callBack) callBack(status, output);
    });
}


module.exports = {
    deleteAllMessages: deleteAllMessages,
    insertMessage: insertMessage,
    getAllMessages: getAllMessages,
    getMessageById: getMessageById
};

/** Below are the demo usage of the above functions

1. To insert a message into the db, do this:
=> 
    insertMessage('This is my message', 'Ironman')
    // Will print 'Message successfully inserted' on successfull insertion

2. To retrieve all the messages from the db, do this:
=>
    getAllMessages(function(messages) {
        console.log('The extracted messages are:', messages);
    });

3. To retrieve a particular message by id, do this:
=>
    getMessageById('5820326f1888e842c55d8bc0', function(message) {
        console.log(message);
    });
*/
