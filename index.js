const { connect, MongooseDAL } = require('./dal-generator');
const routeGenerator = require('./route-generator');

module.exports = {
    connect, 
    MongooseDAL,
    routeGenerator
}