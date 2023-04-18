const Quizinfo = ({ quiz }) => {
  return (
    <span className='border p-3 col-12 col-md-5 col-lg-3 m-3' key={quiz.id}>{quiz.quizname}</span>
  )
}

export default Quizinfo