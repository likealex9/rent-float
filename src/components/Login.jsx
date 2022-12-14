import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ setAuthState }) {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: '',
    password: '',
  });

  const changeHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(input),
    });
    if (response.ok) {
      const data = await response.json();
      setAuthState(data);
      navigate('/');
    } else {
     setError('Вы не зарегестрировались или ввели непраивльные данные');
      // navigate('/signup');
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-5">
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="loginName" className="form-label">Почта</label>
            <input
              value={input.email}
              onChange={changeHandler}
              type="email"
              name="email"
              className="form-control"
              id="loginName"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="loginPassword" className="form-label">Пароль</label>
            <input
              value={input.password}
              onChange={changeHandler}
              type="password"
              name="password"
              className="form-control"
              id="loginPassword"
            />
          </div>
          <div className="row justify-content-center mt-3">
            <button type="submit" className="btn btn-outline-success">Войти</button>
            {/* <button type="button" onClick={() => setError(true)}>Test</button> */}
            {error && <div style={{ color: 'red', background: 'yellow' }}>неверный пароль или почта</div>}
          </div>
        </form>
      </div>
    </div>
  );
}
