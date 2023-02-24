import { Route, Routes } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import Home from './pages/Home';
import Videos from './pages/Videos';

function App() {
  return (
    <div>
      <div className="bg-red-600 h-20 w-screen flex justify-between items-center">
        <div className="font-sans font-extrabold text-3xl text-white animate-bounce">
          Youtube
        </div>
        <div className="text-white font-semibold mr-5 flex justify-center items-center">
          <input placeholder="Search........"></input>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <h2>Footer</h2>
    </div>
  );
}

export default App;
