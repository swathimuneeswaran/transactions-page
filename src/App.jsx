import React from 'react';
import './App.css';
import user1 from "./images/user1.jpeg"
import user2 from "./images/user2.jpeg"
import user3 from "./images/user3.jpg"
const transactions = [
  {
    id: 1,
    name: 'Aokiji',
    date: '28 Feb 2023',
    time: '06:23 PM',
    amount: '+$13.00',
    type: 'Received',
    image: user1,
    amountStyle: 'received',
  },
  {
    id: 2,
    name: 'Kizaru',
    date: '28 Feb 2023',
    time: '06:23 PM',
    amount: '-$9.00',
    type: 'Outgoing',
    image: user2,
    amountStyle: 'outgoing',
  },
  {
    id: 3,
    name: 'Akainu',
    date: '28 Feb 2023',
    time: '06:23 PM',
    amount: '+$20.00',
    type: 'Received',
    image: user3,
    amountStyle: 'received',
  },
];

function App() {
  return (
    <div className="container">
      <div className="header">
        <h2>Last Transactions</h2>
        <a href="/" className="see-all">
          See All
        </a>
      </div>
      <div className="transaction-list">
        {transactions.map((transaction) => (
          <div className="transaction-item" key={transaction.id}>
            <img src={transaction.image} alt={transaction.name} className="avatar" />
            <div className="transaction-details">
              <h3 className="name">{transaction.name}</h3>
              <p className="date-time">
                {transaction.date} • {transaction.time}
              </p>
            </div>
            <div className="transaction-amount">
              <p className={`amount ${transaction.amountStyle}`}>{transaction.amount}</p>
              <p className="type">{transaction.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
