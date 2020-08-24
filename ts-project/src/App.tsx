import React from 'react';
import Greeting from './Greeting';

function App() {
  const onShowName = (name: string) => {
    console.log(`${name} says hello`);
  };

  return (
    <div className="App">
      <Greeting name='dasol' onClick={onShowName} />
    </div>
  );
}

export default App;