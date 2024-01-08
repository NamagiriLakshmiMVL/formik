import './App.css';
import Header from './Header';
import Book from './Book';
import  Author  from './Author';
import AddBook from './AddBook';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>

    <Routes>
      <Route path='/' element={<Header/>}/>
      <Route path='/book' element={<Book/>}/>
      <Route path='/author' element={<Author/>}/>
       <Route path='/addbook' element={<AddBook/>}/>

    </Routes>

   
    </div>
  );
}

export default App;
