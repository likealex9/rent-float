import React, { useEffect, useState } from 'react';
import Page from './Page';

export default function MainPage({ setDiscrFlat, discrFlat, authState }) {
  const filtration = -1;
  useEffect(() => {
    fetch('/qwerty')
      .then((res) => res.json())
      .then((data) => setDiscrFlat(data));
  }, []);

  return (
    <div>
      <p>
        Добро пожаловать,
        {' '}
        {authState ? `${authState.email}` : 'гость!'}
      </p>
      <ul className="d-flex flex-wrap justify-content-around">
        {discrFlat && discrFlat.map((el) => <Page el={el} authState={authState} />)}
      </ul>
    </div>
  );
}
