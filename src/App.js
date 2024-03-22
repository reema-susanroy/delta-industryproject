import logo from "./logo.svg";
import "./App.css";
import CompanyCard from '../src/components/CompanyCard/CompanyCard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CompanyCard />} />
        </Routes>
      </BrowserRouter>

        {/* <script
          async
          src="https://cse.google.com/cse.js?cx=847e676e3f84f4d97"
        ></script>
        <div className="gcse-search"></div> */}

    </div>
  );
}

export default App;
