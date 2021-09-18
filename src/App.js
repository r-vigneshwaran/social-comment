import React, { useState } from 'react';
import Sidebar from 'components/Sidebar';
import Main from 'Main';

function App() {
  const [active, setActive] = useState(false);
  return (
    <>
      <Sidebar active={active} setActive={setActive} />
      <Main active={active} />
    </>
  );
}

export default App;
