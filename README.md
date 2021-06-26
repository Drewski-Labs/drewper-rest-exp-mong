# RESTful with ExpressJS & MongoDB
Produced as a Drewski Labs Helper 
## APIs 
### HTTP Endpoints
| VERB | PATH | =DESCRIPTION |
| ----------- | ----------- | ----------- | 
| GET | /:key/:value | Get by Key Value
| GET | /:id |  Get by ID
| GET | / |  Get All 
| POST | /bulk | Create Many
| POST | / | Create One
| PATCH | /:id | Update one by ID
| DELETE | /:id | Delete one by ID

### Mongoose Model
``` javascript
MongooseDAL('User', UserSchema).model
```

## Implementation
./.env
``` env
DB_URL=<Mongo_DB_Connection_String>
```

./data/schemas/user-schema.js
``` javascript
const { Schema } = require('mongoose');

const UserSchema = new Schema({
    username: String, 
    email: String,
    dob: Date,
    roles: [Schema.Types.ObjectId],
    meta: Schema.Types.Mixed
});

module.exports = UserSchema;
```
./routes/api/v1/index.js

``` javascript
const express = require('express');
const { MongooseDAL, RouterGenerator } = require('drewper-rest-exp-mong');
const router = express.router();

// Mongoose Schema from user-schema.js
const UserSchema = require('../../../data/schemas/user-schema');
// Provides CRUD wrapper for Mongoose Operations
const UserCollection = new MongooseDAL('User', UserSchema);
// Aligns that MongoDB Collection helper with Express RESTFul Endpoints
router.use('/users', RouterGenerator(UserCollection));

module.exports = router;
```
./app.js
``` javascript
const express = require('express');
// ... more express generator lines
const db = require('./drews-rest-exp-mong');
const v1Router = require('./routes/api/v1');

const app = express();

// ... more express generator lines
app.use(logger('dev'));

// Sets up initial Connection to Mongo using Mongoose
db.connect()
    .then(() => {
        app.use(express.json());
        // ... more express generator lines

        app.use('/v1', v1Router);

        // ... more express generator lines
    })
    .catch((err) => {
        res.render('error');
    });

modules.exports = app;
```
