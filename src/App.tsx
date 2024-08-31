import { ReactElement } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing';
import Loading from './components/Loading';
import Order from './components/Order';
import Result from './components/Result';
import './index.css';

function App(): ReactElement {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/loading' element={<Loading />} />
        <Route path='/order' element={<Order />} />
        <Route path='/result' element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
