import React from "react";
import { Link } from "react-router-dom";
import articlesData from "../data/articles.json";

class Articles extends React.Component {
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
    let filteredArticles = articlesData.filter((article) => {
      return article.title.toLowerCase().startsWith(this.state.searchValue.toLowerCase())
    })
    return filteredArticles;
  }

  render() {
    let articles = this.handleData();
    return (
      <div className="articles">
        <input onChange={this.handleChange} className="articles-input" type="search" placeholder="Search" value={this.state.searchValue} />
        <ul className="articles-holder">
          {
            articles.map((article, index) => {
              return (
                <li key={article.slug} className="articles-list">
                  <Link  to={`/article/${article.slug}`}>
                    <p>{article.title}</p>
                  </Link>
                  <span>{article.author}</span>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default Articles;