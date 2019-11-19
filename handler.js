const mongoose = require('mongoose');
const connectorMongodb = mongoose.connect('mongodb://localhost/serverless');
const userSchema = require('./schemas/userSchema.js');
const userModel = mongoose.model('user', userSchema, 'user');

module.exports.hello = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  connectorMongodb.then(() => {
    userModel.findOne({}, function(err, result) {
      callback(null, result);
    });
  });
  mongoose.connection.close();
  // return {
  //   statusCode: 200,
  //   body: JSON.stringify(
  //     {
  //       message: 'Go Serverless v1.0! Your function executed successfully!',
  //       input: event
  //     },
  //     null,
  //     2
  //   )
  // };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
