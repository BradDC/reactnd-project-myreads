import React from "react";
import { Link } from "react-router-dom";

class ListBooks extends React.Component {
  render() {
    const { books, handleChange } = this.props;

    let booksCurrentlyReading = books.filter(function(book) {
      return book.shelf === "currentlyReading";
    });
    let booksWantToRead = books.filter(function(book) {
      return book.shelf === "wantToRead";
    });
    let booksRead = books.filter(function(book) {
      return book.shelf === "read";
    });
    //let booksNone = books.filter(function(book) { return book.shelf === "none" })

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {booksCurrentlyReading.map(book => (
                    <li key={book.id}>
                      <div className="book">
                        {console.log(book)}
                        <div className="book-top">
                          <div
                            className="book-cover"
                            style={{
                              width: 128,
                              height: 193,
                              backgroundImage: `url(${
                                book.imageLinks.thumbnail
                              }`
                            }}
                          />
                          <div className="book-shelf-changer">
                            <select
                              value="none"
                              onChange={val => {
                                handleChange(book, val.target.value);
                              }}
                            >
                              <option value="none" disabled>
                                Move to...
                              </option>
                              <option value="currentlyReading">
                                Currently Reading
                              </option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read </option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.author}</div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {booksWantToRead.map(book => (
                    <li key={book.id}>
                      <div className="book">
                        {console.log(book)}
                        <div className="book-top">
                          <div
                            className="book-cover"
                            style={{
                              width: 128,
                              height: 193,
                              backgroundImage: `url(${
                                book.imageLinks.thumbnail
                              }`
                            }}
                          />
                          <div className="book-shelf-changer">
                            <select
                              value={book.shelf}
                              onChange={val => {
                                handleChange(book, val.target.value);
                              }}
                            >
                              <option value="none" disabled>
                                Move to...
                              </option>
                              <option value="currentlyReading">
                                Currently Reading
                              </option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read </option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.author}</div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {booksRead.map(book => (
                    <li key={book.id}>
                      <div className="book">
                        {console.log(book)}
                        <div className="book-top">
                          <div
                            className="book-cover"
                            style={{
                              width: 128,
                              height: 193,
                              backgroundImage: `url(${
                                book.imageLinks.thumbnail
                              }`
                            }}
                          />
                          <div className="book-shelf-changer">
                            <select
                              value={book.shelf}
                              onChange={val => {
                                handleChange(book, val.target.value);
                              }}
                            >
                              <option value="none" disabled>
                                Move to...
                              </option>
                              <option value="currentlyReading">
                                Currently Reading
                              </option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read </option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.author}</div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search"> </Link>
        </div>
      </div>
    );
  }
}

export default ListBooks;
