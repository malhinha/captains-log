const {Schema, model} = require('mongoose');
// pull individual functions/objects from uber mongoose object as infividual const's

const logSchema = new Schema(
  {
  title: {type: String, required: true},
  entry: {type: String, required: true},
  shipIsBroken: {type: Boolean, required: true, default: true}
  },
  { timestamps: true }
);

// defines collection name via plural of first parameter
const Log = model('Log', logSchema);

module.exports = Log;
