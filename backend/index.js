require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(express.json())

const url = process.env.MONGODB_URI

mongoose.set('strictQuery',false)
mongoose.connect(url).then(res => {
  console.log('SUCCESFULLY CONNECTED TO DATABASE')
}).catch((error) => {
  console.log(`FUCKED UP CONNECTION TO DB: ${error.message}`)
})

const quizSchema = new mongoose.Schema({
  quizname:{
    type:String,
    required:true
  },
  questions: {
    type:Array,
    required:true
  }
})

const Quiz = mongoose.model('Quiz', quizSchema)

app.get('/api/quizzes', (req,res) => {
  Quiz.find({}).then(quizzes => {
    res.json(quizzes)
  })
})

app.post('/api/quizzes',(req,res) => {
  const quiz = new Quiz({
    quizname: req.body.quizname,
    questions: req.body.questions
  })
  quiz.save().then(savedQuiz => {
    res.json(savedQuiz)
  })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`APP IS LIVE ON ${PORT}`)
})