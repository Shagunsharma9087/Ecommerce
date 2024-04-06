import logo from './logo.svg';
import './App.css'
import Signup from './Signup'
import Home from './Home'
import CartItems from './CartItems';
import'./DataItems.css'
import Login from './Login'
import Navigation from './Navigation';
import './Signup.css'
import { BrowserRouter, Route, Routes,Link} from 'react-router-dom'
import './Login.css'
import './Navigation.css'
function App() {
  return (
    <div className="App" id="Root">
      <div id ="header">Apna Bazar </div>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation/>}>
        <Route index path="register" element={<Signup/>}></Route>
        <Route path="login" element={<Login/>}></Route>
        <Route index element={<Home/>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
