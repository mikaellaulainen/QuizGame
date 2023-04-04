const mongoose = require('mongoose')

const quizSchema = new mongoose.Schema({
  quizname: {
    type:String,
    required: true
  },
  questions: {
    type: Array,
    required:true
  }
})

module.exports = mongoose.model('Quiz', quizSchema)