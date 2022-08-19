import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function MainPage({ authState }) {
  const [discrFlat, setDiscrFlat] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/qwerty')
      .then((res) => res.json())
      .then((data) => setDiscrFlat(data));
  }, []);
  const addFav = async (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <div>
      <h1 />
      <p>
        Добро пожаловать,
        {' '}
        {authState ? `${authState.email}` : 'гость!'}
      </p>
      <ul className="list-group list-group-horizontal">
        {discrFlat && discrFlat.map((el) => (
          <li key={el.id} className="list-group-item">
            <div className="card" style={{ width: '18rem', height: '30rem' }}>
              <img src={el.img} className="img-thumbnail" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  Цена:
                  {' '}
                  {el.price }
                  ₽ /мес
                </h5>
                <p className="card-text">{el.descriptions}</p>
                <p className="card-text">{el.coordinate}</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-right">
                  <a href="/" className="btn btn-secondary">Подробнее</a>
                  <Link to="/favorite/add/:id" type="submit" className="btn btn-success">Избранное</Link>
                </div>
              </div>
            </div>
          </li>

        ))}
      </ul>
    </div>
  );
}
