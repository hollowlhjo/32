import React, { useState } from 'react';

function Greeting(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [fullName, setFullName] = useState('');
  const [inputValue, setInputValue] = useState(''); // Додайте стан для збереження введеного імені

  const handleLogin = () => {
    setFullName(inputValue);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setFullName('');
    setLoggedIn(false);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  if (loggedIn) {
    return (
      <div>
        <p>Ласкаво просимо, {fullName}!</p>
        <button onClick={handleLogout}>Вийти з облікового запису</button>
      </div>
    );
  } else {
    return (
      <div>
        <p>Будь ласка, увійдіть в обліковий запис.</p>
        <input
          type="text"
          placeholder="Введіть ваше ім'я"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleLogin}>Увійти в обліковий запис</button>
      </div>
    );
  }
}

export default Greeting;