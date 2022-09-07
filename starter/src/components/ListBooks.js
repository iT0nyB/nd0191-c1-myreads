import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';
import { useState, useEffect } from 'react';

const ListBooks = ({ books, onUpdateShelf }) => {

    const [currentlyReading, setCurrentlyReading] = useState([]);
    const [wantToRead, setWantToRead] = useState([]);
    const [read, setRead] = useState(books.filter(book => book.shelf === "read"));

    useEffect(() => {
        const refresh = () => {
            setCurrentlyReading(books.filter(book => book.shelf === "currentlyReading"));
            setWantToRead(books.filter(book => book.shelf === "wantToRead"));
            setRead(books.filter(book => book.shelf === "read"))
        };

        refresh();
    }, [books]);

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <BookShelf key="cr" title="Currently Reading" shelfbooks={currentlyReading} onUpdateShelf={onUpdateShelf} />
                    <BookShelf key="wtr" title="Want To Read" shelfbooks={wantToRead} onUpdateShelf={onUpdateShelf} />
                    <BookShelf key="r" title="Read" shelfbooks={read} onUpdateShelf={onUpdateShelf} />
                </div>
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
    );
};

ListBooks.propTypes = {
    books: PropTypes.arrayOf(Object).isRequired,
    onUpdateShelf: PropTypes.func.isRequired
};

export default ListBooks;