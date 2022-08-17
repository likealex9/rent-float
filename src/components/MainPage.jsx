import React, { useEffect } from 'react';
// import axios from 'axios';

export default function MainPage() {
  // useEffect(() => {
  //   axios('http://localhost:3000/');
  // }, [])

  useEffect(() => {
   fetch('http://localhost:3000/qwerty')
  }, [])

  return (
    <div>MainPage </div>
  );
}
