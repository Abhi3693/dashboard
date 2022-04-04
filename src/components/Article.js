
import { Link, useParams } from "react-router-dom";

function Article(props) {
    let params = useParams();
    console.log(useParams())
    return (
      <div className="article-holder">
        <Link to="/articles">
            <h4 style={{ marginBottom: "1rem" }}>
              <span>
                👈{" "}
              </span>
              Go back to articles
            </h4>
        </Link>
        <h1>the slug of article is : <span className="slug">{params.slug}!</span></h1>
      </div>
    )
}

export default Article;