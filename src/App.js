import React from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import ListBooks from "./ListBooks";
import SearchBooks from "./SearchBooks";

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  handleChange(bookOb, shelfName) {
    bookOb.shelf = shelfName;
    BooksAPI.update(bookOb, shelfName)
      .then(
        this.setState(state => ({
          books: state.books.filter(b => b.id !== bookOb.id)
        }))
      )
      .then(this.setState(state => ({ books: state.books.concat([bookOb]) })));
  }

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={({ history }) => (
            <ListBooks books={this.state.books} handleChange={this.handleChange} />
          )}
        />
        <Route
          exact
          path="/search"
          render={({ history }) => (
            <SearchBooks books={this.state.books} handleChange={this.handleChange} />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
