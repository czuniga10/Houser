const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const session = require('express-session')
require('dotenv').config();

const app = express();
app.use( bodyParser.json() );
app.use( cors() );


// connecting database
massive( process.env.CONNECTION_STRING )
.then(dbInstance => {
    app.set('db', dbInstance)
    // console.log('initializing db') 
    // return dbInstance.init()
})
.catch((e) => console.log(e))


//controllers
const houseController = require('./controllers/house_controller');
const userController = require('./controllers/user_controller');

// //middleware
const checkForSession = require('./middleware/checkForSession');



app.use( session({
    secret: 'shh, its a secret',
    resave: false,
    saveUninitialized: false
}));

app.use( checkForSession );
app.use( express.static('./houser/build') );

    


//--user endpoints
app.post( '/api/auth/login', userController.login );
app.post( '/api/auth/register', userController.register );
app.get( '/api/auth/logout', userController.logout );

//--house endpoints
app.post( '/api/properties', houseController.create );
app.get( '/api/properties', houseController.getAll );
app.get( '/api/properties/filter', houseController.filter );
app.delete( '/api/properties/:id', houseController.delete );

const port = 3000;
app.listen( port, () => { console.log(`================================\n Server listening on port ${port}.\n================================`); } );


