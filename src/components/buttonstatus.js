import React from 'react';
import RequestOptions from './object/requestOptions';
import CallAPI from '../services/api';

const Button = ({ status, id }) => {
  const nameLS = JSON.parse(localStorage.getItem('currentUser'));
  const { token } = nameLS;
  const validation = status === 'pending';
  const [condition, setCondition] = React.useState(validation);

  function handleClick(event) {
    const body = event.target.innerText.toLowerCase();
    const method = RequestOptions.put(token, body);
    const URL = `https://lab-api-bq.herokuapp.com/orders/${id}`;
    setCondition(!condition);
    CallAPI(URL, method);
  }

  return <button onClick={handleClick}>{condition ? 'Doing' : 'Done'}</button>;
};

export default Button;
