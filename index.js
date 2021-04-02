const { connect, MongooseDataAccessLayer } = require('./dal-generator');
const routeGenerator = require('./route-generator');

module.exports = {
    connect, 
    MongooseDataAccessLayer,
    routeGenerator
}