const Question = ({ item }) => {
  return (
    <div className='border border-dark p-3 mx-auto'>
      <p className='h5'>Question: {item.questionName}</p>
      <p>Correct answer: {item.correctAnswer}</p>
      <p>False answer 1: {item.wrongAnswer1}</p>
      <p>False answer 2: {item.wrongAnswer2}</p>
    </div>
  )
}

export default Question