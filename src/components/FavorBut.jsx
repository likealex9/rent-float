import React, { useEffect } from 'react';

export default function FavorBut() {
  // console.log('hello');
  // const addFavor = async (e) => {
  //   e.preventDefault();
  //   const response = await fetch ('/favorite', {
  //     metod: POST
  //   })

  // }
  useEffect(() => {
    fetch('')
  });

  return (
    <li className="list-group-item">
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
            <Link to="/favorite/add/:id" type="submit" className="btn btn-success">Добавить в избранное</Link>
          </div>
        </div>
      </div>
    </li>

  );
}
