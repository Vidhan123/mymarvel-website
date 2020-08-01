import React from 'react';
import data from './data/data.json';

function useQlogic(props,qId,setqId,setDisable) {
  const {values,setSelectedOptions} = props;
  const {selectedOptions} = values;

  const handleChange = (e) => {
    const {id,value} = e.target;
    setDisable(false);
    setSelectedOptions({...selectedOptions,[qId]:{"value":value,"isChecked":id}});
  }

  const forward = (e) => {
    e.preventDefault();
    qId < 4 ? setqId(prevqNo => prevqNo + 1) : props.nextStep();
    setDisable(true);
  };

  const myQuestions = data.map(data => {
    return (
      <React.Fragment key={data.id}>
        <div className="container-fluid mt-3">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-md-6 col-lg-5 col-xl-4">
              <div className="card" id="questions">
                <img className="card-img-top" src={data.image} alt="displayImage" />
                <div className="card-body">
                <h5 className="card-title">{data.question}</h5>
                </div>
              </div>
              <div className="card mt-3" id="options">
                <div className="class-body">
                <p className="card-text">Select your answer<span className="required"> *</span></p>
                <div className="custom-control custom-radio">
                <input type="radio" id="o1" name="options" value={data.options[0]} className="custom-control-input" onChange={handleChange}/>
                <label className="custom-control-label" htmlFor="o1">{data.options[0]}</label>
                </div>
                <div className="custom-control custom-radio">
                <input type="radio" id="o2" name="options" value={data.options[1]} className="custom-control-input" onChange={handleChange}/>
                <label className="custom-control-label" htmlFor="o2">{data.options[1]}</label>
                </div>
                <div className="custom-control custom-radio">
                <input type="radio" id="o3" name="options" value={data.options[2]} className="custom-control-input" onChange={handleChange}/>
                <label className="custom-control-label" htmlFor="o3">{data.options[2]}</label>
                </div>
                <div className="custom-control custom-radio">
                <input type="radio" id="o4" name="options" value={data.options[3]} className="custom-control-input" onChange={handleChange} />
                <label className="custom-control-label" htmlFor="o4">{data.options[3]}</label>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )})
  return [myQuestions,forward]
};

export default useQlogic;