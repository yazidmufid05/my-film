// App.js
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Popular from './pages/Popular';
import Add from './pages/Add';
import Layout from './components/Layout/Layout';
import { useState } from 'react';
import DataMovie from './utils/constants/DataMovie';
import GlobalStyle from './components/Global/GlobalStyle';
import Upcoming from './pages/Upcoming';
import Detail from './pages/movie/Detail';
function App() {
  const [data, setData] = useState(DataMovie);

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path='/' element={<Home item={data} setItem={setData} />} />
          <Route path='popular' element={<Popular />} />
          <Route path='/add' element={<Add item={data} setItem={setData} />} />
          <Route path='/upcoming' element={<Upcoming />} />
          <Route path='/movie/:id' element={<Detail />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
