
import './App.css'
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListTodoComponent from './components/ListTodoComponent'
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  
  return (
    <>
    <BrowserRouter> 
    <HeaderComponent/>
    <Routes>
      {/* http://localhost:8082 */}
      <Route path='/' element={<ListTodoComponent/>}></Route>
      <Route path='/todos' element ={<ListTodoComponent/>} ></Route>

    </Routes>
    <FooterComponent/>
    </BrowserRouter>
   
    </>
  )
}

export default App
