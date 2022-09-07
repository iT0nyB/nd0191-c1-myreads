import BookGrid from './BookGrid';
import PropTypes from 'prop-types';


const BookShelf = ({ title, shelfbooks, onUpdateShelf }) => {

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <BookGrid books={shelfbooks} onUpdateShelf={onUpdateShelf} />
            </div>
        </div>
    );
};

BookShelf.propTypes = {
    title: PropTypes.string.isRequired,
    shelfbooks: PropTypes.array.isRequired,
    onUpdateShelf: PropTypes.func.isRequired
}

export default BookShelf;