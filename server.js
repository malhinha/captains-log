/*********************
SETUP
**********************/

/* ENVIRONMENT CONFIG */
require('dotenv').config();


/* EXPRESS SETUP */
const express = require('express');
const app = express();
const methodOverride = require('method-override');
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
app.use(methodOverride('_method'));

// needed for serving css, js, html files
app.use(express.static('public'));


/*********************
SEED ROUTES
**********************/

/*
SEED SOME DATA
*/

app.get('/log/seed', (req, res) => {
  Log.create([
    {
      title:'Captain\'s Log, Stardate 43198.7',
      entry:'The Enterprise remains in standard orbit while we investigate the tragedy which has struck the away team. Lieutenant Marla Aster, ship\'s archaeologist, has been killed on what should have been a routine mission. Whatever the explanation, it will not bring back a valued and trusted officer.',
      shipIsBroken:false
    },
    {
      title:'Captain\'s log, Stardate 43205.6',
      entry:'We have arrived at Orelious IX to chart the battle in which the Menthars and Promellians fought to their mutual extinction. Among the ruins, we have found a relic – a Promellian battle cruiser that has withstood the centuries.',
      shipIsBroken:false
    },
    {
      title:'Captain\'s Log, Stardate 43349.2',
      entry:'An unidentified distress signal has led to the discovery of a crashed Romulan vessel on the surface of Galorndon Core, a Federation planet. We have recovered one survivor, but Lieutenant Commander La Forge did not report back with the away team and is still missing.',
      shipIsBroken:false
    }
  ], (err, data) => {
    res.redirect('/logs');
  })
});


/*********************
I.N.D.U.C.E.S. ROUTES
**********************/

/*
INDEX
*/

app.get('/logs/', (req, res) => {
  Log.find({}, (err, foundLogs) => {
    if (err) {
      res.status(404).send({
        msg: err.message
      })
    } else {
      res.render('Index', {
        logs: foundLogs
      })
    }
  })
});


/*
NEW
*/

app.get('/logs/new', (req, res) => {
  res.render('New');
});


/*
DELETE
*/

app.delete('/logs/:id', (req, res) => {
  Log.findByIdAndDelete(req.params.id, (err, foundLog) => {
    if(err) {
      res.status(404).send({
        msg: err.message
      });
    } else {
      res.redirect('/logs')
    }
  });
});



/*
UPDATE
*/

app.put('/logs/:id/', (req, res) => {
  // set right values per checkbox selection/non selection
  if (req.body.shipIsBroken === 'on') {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }
  Log.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedLog) => {
    if (err) {
      res.status(404).send({
        msg: err.message
      })
    } else {
      res.render('Show', {
        log: updatedLog
      })
    }
  })
});



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

  Log.create(req.body, (err, createdLog) => {
    if(err){
      res.status(404).send({
        msg: err.message
      })
    } else {
      console.log(createdLog);
      res.redirect('/logs');
    }
  })
});



/*
EDIT
*/

app.get('/logs/:id/edit', (req, res) => {
  Log.findById(req.params.id, (err, foundLog) => {
    if (err) {
      res.status(404).send({
        msg: err.message
      })
    } else {
      res.render('Edit', {
        log: foundLog
      })
    }
  })
});



/*
SHOW
*/

app.get('/logs/:id', (req, res) => {
  Log.findById(req.params.id, (err, foundLog) => {
    if (err) {
      res.status(404).send({
        msg: err.message
      })
    } else {
      res.render('Show', {
        log: foundLog
      })
    }
  })
});


/*********************
PORT LISTENER
**********************/

app.listen(PORT, () => {
  console.log('I\'m hearing you port', PORT);
});
