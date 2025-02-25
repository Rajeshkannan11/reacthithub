import React, { useRef } from 'react';

const Form = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const focusNextField = (nextRef) => {
    nextRef.current.focus();
  };

  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" ref={nameRef} />
          <button type="button" onClick={() => focusNextField(emailRef)}>Next</button>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" ref={emailRef} />
          <button type="button" onClick={() => focusNextField(passwordRef)}>Next</button>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" ref={passwordRef} />
        </div>
      </form>
    </div>
  );
};

export default Form;
