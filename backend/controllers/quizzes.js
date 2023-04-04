const quizzesRouter = require('express').Router()
const Quiz = require('../models/quiz')

quizzesRouter.get('/', (req,res) => {
  Quiz.find({}).then(quizzes => {
    res.json(quizzes)
  })
})

quizzesRouter.get('/:id', (req, res, next) => {
  Quiz.findById(req.params.id).then(
    quiz => {
      if(quiz){
        res.json(quiz)
      }else{
        res.status(404).end()
      }
    }
  ).catch(error => next(error))
})

quizzesRouter.post('/', (req,res,next) => {
  const body = req.body

  const quiz = new Quiz({
    quizname: body.quizname,
    questions: body.questions
  })

  quiz.save().then(savedQuiz => {
    res.json(savedQuiz)
  }).catch(error => next(error))
})

module.exports = quizzesRouter