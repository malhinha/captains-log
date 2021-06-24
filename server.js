/*********************
SETUP
**********************/

/* ENVIRONMENT CONFIG */
require('dotenv').config();


/* EXPRESS SETUP */
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


/* DATA SETUP */
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

mongoose.connection.once('open', () => {
  console.log('connected to the goose');
})

const Log = require('./models/log');


/* REACT SETUP */
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


/* MIDDLEWARE SETUP */
app.use((req, res, next) => {
  console.log('+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-');
  console.log('I run before all routes');
  console.log('+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-');
  next();
}); // not really needed, here for demonstrative purposes

// needed for req.body
app.use(express.urlencoded({extended: true}));

// needed for delete function
const methodOverride = require('method-override');
app.use(methodOverride('_method'));


/*********************
SEED ROUTES
**********************/

/*
SEED SOME DATA
*/


/*********************
I.N.D.U.C.E.S. ROUTES
**********************/

/*
INDEX
*/


/*
NEW
*/

app.get('/logs/new', (req, res) => {
  res.render('New');
});


/*
DELETE
*/



/*
UPDATE
*/



/*
CREATE
*/

app.post('/logs', (req, res) => {
  // set right values per checkbox selection/non selection
  if (req.body.shipIsBroken === 'on') {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }

  res.send(req.body);
});



/*
EDIT
*/



/*
SHOW
*/



/*********************
PORT LISTENER
**********************/

app.listen(PORT, () => {
  console.log('I\'m hearing you port', PORT);
});
