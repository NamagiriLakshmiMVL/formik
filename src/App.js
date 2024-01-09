import './App.css';
import Header from './Header';
import Book from './Book';
import  Author  from './Author';
import AddBook from './AddBook';
import { Route, Routes } from 'react-router-dom';
import Editauthor from './Editauthor';
import Addauthor from './Addauthor';
import EditBook from './EditBook';


function App() {
  return (
    <div>

    <Routes>
      <Route path='/' element={<Header/>}/>
      <Route path='/book' element={<Book/>}/>
      <Route path='/author' element={<Author/>}/>
       <Route path='/addbook' element={<AddBook/>}/>
       <Route path='/book/:bookid' element={<EditBook/>}/>
       <Route path='/addauthor' element={<Addauthor/>}/>
       <Route path='/author/:authorid' element={<Editauthor/>}/>
    </Routes>
    

   
    </div>
  );
}

export default App;
