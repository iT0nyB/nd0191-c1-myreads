import PropTypes from "prop-types";

const Book = ({ thisBook, shelf, onUpdateShelf }) => {

    const updateShelf = (event) => {
        let updateDTO = { "id": thisBook.id, "shelf": event.target.value };
        onUpdateShelf(updateDTO);
    };

    return (
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage:
                            `url(${thisBook.imageLinks ? thisBook.imageLinks.thumbnail : ""})`,
                    }}
                ></div>
                <div className="book-shelf-changer">
                    <select onChange={updateShelf} value={shelf ? shelf : "none"} >
                        <option value="none" disabled>
                            Move to...
                        </option>
                        <option value="currentlyReading">
                            Currently Reading
                        </option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{thisBook.title}</div>
            <div className="book-authors">{thisBook.authors ? thisBook.authors.join(', ') : ""}</div>
        </div>);
};

Book.propTypes = {
    thisBook: PropTypes.object.isRequired,
    shelf: PropTypes.string,
    onUpdateShelf: PropTypes.func.isRequired
};

export default Book;