import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import * as BooksAPI from "../BooksAPI";
import BookGrid from "./BookGrid";


const SearchBooks = ({ books, onUpdateShelf }) => {

    const [query, setQuery] = useState("");

    const [filteredBooks, setFilteredBooks] = useState([]);

    const updateQuery = (query) => {
        setQuery(query.trim());
    };

    useEffect(() => {
        let mounted = true;
        if (query.length > 3 && query !== "") {
            const searchBooks = async () => {
                const foundBooks = await BooksAPI.search(query, 20);
                if (mounted) {
                    foundBooks.map(book => (
                        books.forEach(shelvedBook => {
                            if (book.title === "Anna Freud") console.log(shelvedBook);
                            if (book.id === shelvedBook.id) {
                                book.shelf = shelvedBook.shelf;
                            }
                        })

                    ));
                    console.log(foundBooks.filter(book => book.shelf));
                    setFilteredBooks(foundBooks);
                }
            };

            searchBooks();
        } else {
            if (mounted) {
                setFilteredBooks([]);
            }
        }

        return () => {
            mounted = false;
        };
    }, [query, books]);

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link
                    className="close-search"
                    to="/"
                >
                    Close
                </Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                        value={query}
                        onChange={(event) => updateQuery(event.target.value)}
                    />
                </div>
            </div>
            <div className="search-books-results">
                <BookGrid books={filteredBooks} onUpdateShelf={onUpdateShelf} />
            </div>
        </div>
    );
};

SearchBooks.propTypes = {
    books: PropTypes.arrayOf(Object).isRequired,
};

export default SearchBooks;