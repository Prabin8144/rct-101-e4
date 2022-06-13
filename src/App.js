import { Route, Routes } from "react-router-dom";
import "./App.css";
import Products from "./components/Products/Products";
import RequiredAuth from "./hoc/RequiredAuth";
import Home from "./pages/Home";


function App() {
  return <div className="App">
    

    <Routes>
      <Route path="/home" element={<RequiredAuth> <Home/> </RequiredAuth> } />
      <Route path="/" element={<Products/>}/>
      </Routes>

    </div>;
    
}

export default App;
