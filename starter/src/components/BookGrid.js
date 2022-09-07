import Book from "./Book";
import PropTypes from 'prop-types';
import ErrorMsg from "./ErrorMsg";

const BookGrid = ({ books, onUpdateShelf }) => {
    return (
        <ol className="books-grid">
            {
                books.error ?
                    <ErrorMsg />
                    :
                    books.map((book) => (
                        <li key={book.id}>
                            <Book thisBook={book} shelf={book.shelf} onUpdateShelf={onUpdateShelf} />
                        </li>
                    ))
            }


        </ol>
    );
};

BookGrid.propTypes = {
    books: PropTypes.array,
    onUpdateShelf: PropTypes.func.isRequired
}

export default BookGrid;