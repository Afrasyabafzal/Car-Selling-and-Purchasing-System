const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Car = new Schema({
    id: {
        type: Number
     },
      name: {
          type: String
      },
      price: {
          type: Number
      },
      category: {
          type: String
      },
      date_added: {
          type: Date
      },
      location: {
          type: String
      },
      rating: {
          type: Number
      },
      img :{
          type: String
      }
}, {
   collection: 'car'
})

module.exports = mongoose.model('Car', Car);