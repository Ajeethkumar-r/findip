import { useState } from 'react';
import { BrowserRouter as Main, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
function App() {
  const [login, setLogin] = useState(false);
  return (
    <Main>
      <Routes>
        <Route path='/' element={<Login verify={[login, setLogin]} />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </Main>
  );
}

export default App;
