
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import { AppProvider } from './AppContext';
import { ListPorduct } from './ListPorduct';
import { UserProfile } from './UserProfile';
import { Checkout } from './Checkout';
import Test from './Test';


const App = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<ListPorduct />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
