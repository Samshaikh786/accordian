import { useState } from 'react';
import './App.css';
import data from './Components/data'
import SingleQuestion from './Components/SingleQuestion';

function App() {
  const [questions,setQuestions]=useState(data)



  return (
    <div className="main">
      <div className='container'>
        <h4>Questions and Answers about Login</h4>
        {questions.map((question)=>{
          return <SingleQuestion key={question.id} {...question}/>
        })}
      </div>
     
    </div>
  );
}

export default App;
