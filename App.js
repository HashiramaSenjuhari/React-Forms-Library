// App.jsx
import React from 'react';
import RegistrationForm from './components/RegistrationForm.jsx';

const App = () => {
  return (
    <div style={appContainerStyle}>
      <RegistrationForm />
    </div>
  );
};

const appContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};

export default App;
