import React from 'react';

function Details(props) {
  const {values,setName} = props;

  const forward = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  return (
    <React.Fragment>
    <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><a href="http://mymarvel.epizy.com/index.html?i=1">Home</a></li>
      <li className="breadcrumb-item active" aria-current="page">Marvelite</li>
    </ol>
    </nav>
    <div className="container-fluid mt-3 mb-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-6 col-lg-5 col-xl-4">
          <div className="card" id="top">
            <div className="card-body">
              <h4 className="card-title">Marvelite - What's Your Avengers Movie IQ?</h4>
              <p className="card-text">Since we have spent countless hours watching these movies, we are all pretty savvy about the goings on of the films.</p>
              <p className="card-text">How well do you know the Marvel Cinematic Universe though?</p>
              <p className="card-text">Are you worthy of calling yourself a Marvelite? Score above 99% to prove yourself.</p>
              <p className="card-text">Take the quiz and find out...</p>
              <p className="card-text required">* Required</p>
            </div>
          </div>
          <div className="card mt-3" id="nameCard">
            <div className="form-group card-body">
              <label htmlFor="name">Name<span className="required"> *</span></label>
              <input type="text" className="form-control" id="name" placeholder="Your name" value={values.name} onChange={(e) => setName(e.target.value)} />
            </div>
          </div>
          <br />
          <button className="btn" onClick={forward} disabled={values.name.trim().length>0?false:true}>Let's Start</button>
        </div>
      </div>
    </div>
    </React.Fragment>
  )
};

export default Details;

