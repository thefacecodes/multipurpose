import React, { useEffect, useState } from "react";
import loader from "./loading.png";

function News() {
  const [Article, postArticle] = useState(null);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=gb&apiKey=4635367aa9d14f48b62d050fb3499f57"
    )
      .then((response) => response.json())
      .then(postArticle);
  }, []);

  if (Article) {
    return (
      <div className="news">
        <h1>Home of latest News</h1>
        <div className="news-items">
          {Article.articles.map((item, index) =>
            item.urlToImage ? (
              <div key={index}>
                <img src={item.urlToImage} alt="" />
                <div>
                  <h3>{item.title}</h3>
                  <p className="author">Published by {item.author}</p>
                  <p>{item.description}</p>
                  <a href={item.url}>Read more</a>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div className="news">
        <div className="pre-loader">
          <img src={loader} alt="" />
        </div>
      </div>
    );
  }
}

// .addEventListener("load", () => {
//     document.querySelector(".pre-loader").style.opacity = 0;
// })

export default News;
