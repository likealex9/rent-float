import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Page({ el, authState }) {
  const [buttonState, buttonSetState] = useState(true);
  const addHandler = async (e, id) => {
    e.preventDefault();
    const response = await fetch(`/favorite/add/${id}`, { method: 'PUT' });
    if (response.ok) buttonSetState(false);
  };
  return (
    <li className="list-group-item">
      <div
        className="card"
        style={{
          width: '25rem', height: '30rem', borderWidth: '0.5', borderColor: 'darkgrey', boxShadow: '11px 14px 9px 1px  silver'
        }}
      >
        <img src={el.img} className="card-img-top" style={{ height: '20rem' }} alt="..." />
        <div className="card-body d-flex flex-column justify-content-end">
          <h5 className="card-title">
            Цена:
            {' '}
            {el.price}
            ₽
          </h5>
          <p className="card-text">{el.descriptions}</p>
          <p className="card-text">{el.coordinate}</p>
          { authState && (
            <div className="d-grid gap-2 d-md-flex  justify-content-md-right">
              <Link to={`/houses/edit/${el.id}`} className="btn btn-secondary" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Подробнее</Link>
              {buttonState && <button onClick={(e) => addHandler(e, el.id)} to={`/favorite/add/${el.id}`} type="submit" className="btn btn-success">Добавить в избранное</button>}
              {!buttonState && <button type="submit" className="btn btn-success" disabled> Добавить в избранное</button>}
            </div>
          )}
        </div>
      </div>
    </li>
  );
}
