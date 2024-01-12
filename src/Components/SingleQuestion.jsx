import React, { useState } from 'react';

const SingleQuestion = ({info,title}) => {
  const [show ,setShow]=useState(false)
    
    return (
      <article className='section'>
       <div className='ques-section'>
       <p className='para'>{title}</p>
        {show ? <button onClick={()=>setShow(!show)}>-</button> : <button onClick={()=>setShow(!show)}>+</button>}
       </div>
       {show ? <p>{info}</p>: <></> }
      </article>
    );
};

export default SingleQuestion;