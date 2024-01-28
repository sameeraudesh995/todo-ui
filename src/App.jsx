
import './App.css'
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListTodoComponent from './components/ListTodoComponent'
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import TodoComponent from './components/TodoComponent';

function App() {
  
  return (
    <>
    <BrowserRouter> 
    <HeaderComponent/>
    <Routes>
      {/* http://localhost:8082 */}
      <Route path='/' element={<ListTodoComponent/>}></Route>
      <Route path='/todos' element ={<ListTodoComponent/>} ></Route>
      <Route path='/add-todo' element ={<TodoComponent/>} ></Route>
      <Route path='/update-todo/:id' element={<TodoComponent/>}></Route>
    </Routes>
    <FooterComponent/>
    </BrowserRouter>
   
    </>
  )
}

export default App
