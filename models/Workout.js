const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
   day: {
    type: Date,
    default: function (){
        new Date()
    },
  },

exercises: [{
    workoutType: String,
        name: String,
        duration: Number,
        weight: Number,
        reps: Number,
        sets: Number,
}]

});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;