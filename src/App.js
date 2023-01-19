import Cart from "./components/Cart";
import Feed from "./components/Feed";
import Header from "./components/Header";
import {  Routes, Route } from "react-router-dom";

function App() {
  return <div className="App h-[max-content] bg-slate-800">
    <Header/>
  <Routes>
  <Route path='/' element={<Feed/>}/>
  <Route path='/Cart' element={<Cart/>}/>
  </Routes> 
  </div>;
}

export default App;
