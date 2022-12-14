import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Navbar({
  authState, setAuthState, discrFlat, setDiscrFlat
}) {
  const navigate = useNavigate();
  const logoutHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/login/logout');
    if (response.ok) {
      setAuthState(null);
      navigate('/');
    }
  };

  const changeFlat = async (e) => {
    console.log(e.target.value);
    const response = await fetch(`/appdata/${e.target.value}`);

    const data = await response.json();
    setDiscrFlat(data);
  };

  return (

    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand fs-1 fw-light" to="/">RENT APARTMENT</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            {/* <li className="bg-secondary.bg-gradient">
              <NavLink className="nav-link active fw-light" aria-current="page" to="/">Home</NavLink>
            </li> */}
          </ul>

          <select onChange={changeFlat} className="form-select w-25 position-relative" aria-label="Default select example">
            <option>Категории</option>
            <option value="1">Аппартаменты</option>
            <option value="2">Квартиры</option>
          </select>
          {!authState
            ? (
              <>
                <NavLink to="/signup" className="btn btn-success m-2"><strong>Регистрация</strong></NavLink>
                <NavLink to="/login" className="btn btn-outline-success m-2">Войти</NavLink>
              </>
            ) : (
              <>
                <NavLink to={`/houses/${authState.id}`} className="btn btn-success m-2"><strong>Добавить</strong></NavLink>
                <NavLink to={`/favorite/${authState.id}`} className="btn btn-success m-2"><strong>Избранное</strong></NavLink>

                <a onClick={logoutHandler} className="btn btn-logout-success m-2 fw-light" href="logout">Выход</a>
              </>
            )}
        </div>
      </div>
    </nav>
  );
}
