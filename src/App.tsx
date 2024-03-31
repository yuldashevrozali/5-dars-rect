import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './pages/sign-up';
import Signin from './pages/sign-in';

function App() {


  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup />}></Route>
          <Route path='/signin' element={<Signin />}></Route>
        </Routes>
      </BrowserRouter>


  )
}

export default App;
