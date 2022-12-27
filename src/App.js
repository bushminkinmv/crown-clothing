import { Route, Routes } from 'react-router-dom';

import Authentication from './components/routes/authentication/authentication';
import Home from './components/routes/home/home.component';
import Navigation from './components/routes/navigation/navigation.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
