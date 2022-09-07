import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ListBooks from "./ListBooks";
import SearchBooks from "./SearchBooks";
import * as BooksAPI from "../BooksAPI";
import "../css/App.css";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };

    getBooks();
  }, []);

  const updateShelf = (updateDTO) => {

    const getBook = async (dto) => {
      const book = await BooksAPI.get(dto.id);

      const updateBook = async () => {
        await BooksAPI.update(book, dto.shelf);
        await BooksAPI.getAll().then((res) => {
          setBooks(res);
        }).catch(error => console.log(error.message));
      };

      updateBook();
    };

    getBook(updateDTO);
  };

  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<ListBooks books={books} onUpdateShelf={updateShelf} />}></Route>
        <Route exact path="/search" element={<SearchBooks books={books} onUpdateShelf={updateShelf} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
