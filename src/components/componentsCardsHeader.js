import React from 'react';

const CardsHeader = ({ children }) => {
  const {
    client_name,
    table,
    createdAt,
    processedAt,
    status,
  } = children;
  const dtcreatedAt = new Date(createdAt);
  const dtprocessedAt = new Date(processedAt);
  const orderTime = `${dtcreatedAt.toLocaleDateString()} - ${dtcreatedAt.getHours()}:${dtcreatedAt.getMinutes()}`;
  const timeNow = new Date();
  const time = `${timeNow.toLocaleDateString()} - ${timeNow.getHours()}:${timeNow.getMinutes()}`;
  const preparationSecond = Math.abs(dtprocessedAt) - dtcreatedAt



  return (
    <div>
      <div className="card-table-info">
        <p className="text-card">Table:</p>
        <p className="title-number-card">{table}</p>
      </div>

      <div>
        <p className="title-card">
          {' '}
          Client: <span className="title-card">{client_name}</span>
        </p>
        <p className="title-card">
          {' '}
          Order Time: <span className="text-card">{orderTime}</span>
        </p>
        <p className="title-card">
          {' '}
          Time: <span className="text-card">{time}</span>
        </p>
        <p className="title-card">
          {' '}
          Status: <span className="title-card">{status}</span>
        </p>
      </div>
    </div>
  );
};

export default CardsHeader;
