import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import {DebounceInput} from 'react-debounce-input';

class ListBooks extends React.Component {

  state = { query: '',
            results: undefined }

    
  updateQuery = (query) => {
      this.setState( { query: query })
      
      BooksAPI.search(query).then( (results) => { 
        if(results.error) {this.setState({ results: undefined }) }
        else {this.setState({ results: results }) }
       })
      console.log(this.state.results)
    }

    
    render() {
      const { query, results } = this.state
      const { handleChange } = this.props

        return (
            <div className="search-books">
            <div className="search-books-bar">
            <Link to="/" className="close-search"> </Link> 
              <div className="search-books-input-wrapper">
                <DebounceInput placeholder="Search by title or author" value={query}
                minLength={3}
                debounceTimeout={400}
                onChange={(event) => this.updateQuery(event.target.value)}/>
              </div>
            </div>
     
{results !== undefined &&  (
            <div className="search-books-results">
                       <ol className="books-grid">
                       
                   { results.map( (book) => (
                      <li key={book.id}>
                        <div className="book">
                        {console.log(typeof book.imageLinks.thumbnail) }
                          <div className="book-top">

    {  book.imageLinks.thumbnail !== undefined && 
               <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail}`}}></div>
    }
     


                          
                            
                          
                          
                            <div className="book-shelf-changer">
                              <select value={book.shelf} onChange={ (val) => {handleChange(book, val.target.value)}}>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read </option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.author}</div>
                        </div>
                    </li> )) }
                    </ol>

</div> )}
          </div>
        ) } }
export default ListBooks
