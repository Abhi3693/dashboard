import React from "react";
import booksData from "../data/books.json";

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      searchValue: "",
    }
  }
  handleChange = (event) => {
    this.setState({searchValue: event.target.value})
  }

  handleData = () => {
    let filteredBooks = booksData.filter((book) => {
      return book.title.toLowerCase().startsWith(this.state.searchValue.toLowerCase());
    })
    return filteredBooks;
  }

  render() {
    let books = this.handleData();
    return (
      <div className="articles">
        <input onChange={this.handleChange} className="articles-input" type="search" placeholder="Search" value={this.state.searchValue} />
        <ul className="books-holder">
          {
            books.map((book, index) => {
              return <Book key={book.isbn} {...book}/>
            })
          }
        </ul>
      </div>
    )
  }
}

function Book(props) {
  return (
    <li className="single-book">
        <img className="book-img" src={props.image} alt={props.title} />
        <h2 className="book-title">{props.title}</h2>
        <span className="book-author">{props.author}</span>
        <a className="buy-now" href={props.website}>Buy Now</a>
    </li>
  )
}

export default Books;



