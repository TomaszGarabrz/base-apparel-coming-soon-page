import React, {useState} from "react";
import "./App.css"

import arrowImg from './images/icon-arrow.svg';
import alertImg from './images/icon-error.svg'


const App = () => {

  const [isSubmmited, setIsSubmmited] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
 

  const handleSubmit = () => {
  
    if(inputValue.length === 0 ) {
      setIsSubmmited(true)
      setErrorMessage('Email input is empty, please provide an email')
    } else if (!inputValue.includes('@') || inputValue.length <= 5){
      setIsSubmmited(true)
      setErrorMessage('Please provide an email')
    } else {
      setIsSubmmited(false)
    
      setInputValue('')
      setSuccessMessage('Gratulacje');

      setTimeout(() => {
        setSuccessMessage('')
      }, 2000)
    }
  }

  return (
    <div className="wrapper">
      <div className="page__wrapper">

        <div className="page__content--logo">
              <div className="page__conent--circle">
                <div className="page__conent--circle--inner"></div>
              </div>
              <p>Base Apparel</p>
        </div>

        <div className="page__content__wrapper">
          <div className="page__conent--title">
            <h1>We're <span>Comming Soon</span></h1>
          </div>
          <div className="page__conent--text">
            <p>Hello fellow shoppers! We're currently building our new fashion store. 
  Add your email below to stay up-to-date with announcements and our launch deals.</p>
          </div>
          <div className="page__content--input">
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)}type="email" placeholder="Email Address" />
            {isSubmmited && <img src={alertImg} alt="error" />}
            <button onClick={() => handleSubmit()}>
              <img src={arrowImg} alt="arrow" />
            </button>
            {isSubmmited && <p className="error">{errorMessage}</p>}
            <p className="success">{successMessage}</p>
          </div>     
        </div>

        <div className="page__image__wrapper"></div>
      </div>

      
    </div>
  );
}

export default App;
