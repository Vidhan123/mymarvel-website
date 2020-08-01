import React, { useState } from 'react';
import useQlogic from './useQlogic';

function Questions(props) {
  const [qId,setqId] = useState(0);
  const [isDisabled,setDisable] = useState(true);

  const [myQuestions,forward] = useQlogic(props,qId,setqId,setDisable)

  return(
    <React.Fragment>
    <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><a href="http://mymarvel.epizy.com/index.html?i=1">Home</a></li>
      <li className="breadcrumb-item active" aria-current="page">Marvelite</li>
    </ol>
    </nav>
    <div>
      {myQuestions[qId]}
      <div className="container-fluid mt-3 mb-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-6 col-lg-5 col-xl-4">
            <button className="btn" onClick={forward} disabled={isDisabled}>Next</button>
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>
  )
};

export default Questions;