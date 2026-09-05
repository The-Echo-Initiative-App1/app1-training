import Student from './Student.jsx'

function App(){
  return(
    <>
      <Student name="anna" age={15} isStudent={true}/>
      <Student name="jack" age={18} isStudent={false}/>
      <Student name="mel" age={50} isStudent={false}/>
      <Student name="alice" age={27} isStudent={true}/>
      <Student/>
    </>)
}
export default App