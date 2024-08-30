import React from 'react';
import './App.css';
// auto import by pressing ctrl space
import InputField from './components/InputField';

// App -cosnt arrow function instead of function
// App type is defined as a react functional component
const App: React.FC = () => {
  return (
    <div className="App">
      <span className='heading'> Taskify</span>
      <InputField />
    </div>
  );
}

export default App;
