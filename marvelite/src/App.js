import React, { useState } from 'react';
import Details from './components/Details';
import Questions from './components/Questions';
import Result from './components/Result';

function MarveliteApp() {
  const [step,setStep] = useState(0);
  const [name,setName] = useState("");
  const [selectedOptions,setSelectedOptions] = useState({});
  const values = { selectedOptions , name };

  const nextStep = () => {
    setStep(prevStep => prevStep + 1)
  };
  
  switch(step) {
    case 0: return (<Details nextStep={nextStep} setName={setName} values={values} />);
    case 1: return (<Questions nextStep={nextStep} values={values} setSelectedOptions={setSelectedOptions} />);
    case 2: return (<Result values={values} />);
    default: return (<Details />);
  };
};

export default MarveliteApp;