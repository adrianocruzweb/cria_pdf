import React from 'react';
import './App.css';
import './styles.css';
import User from './components/User/User';

function App() {

  const data = [
    { firstName: "John", lastName: "Smath" },
    { firstName: "Paul", lastName: "Smeth" },
    { firstName: "Cody", lastName: "Smith" },
    { firstName: "Jordan", lastName: "Smoth" },
    { firstName: "Jim", lastName: "Smuth" },
  ]

  return (
    <div className="App">
      <div className='pdf'>
        {data.map(user => <User user={user} key={user.lastName}/>)}
      </div>
    </div>
  );
}

export default App;
