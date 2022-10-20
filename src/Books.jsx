import React, { useEffect, useState } from "react";
import "./Books.css";
import loader from "./loading.png";

function Books() {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    fetch("http://openlibrary.org/subjects/love.json")
      .then((response) => response.json())
      .then((data) => setBooks(data.works))
      .catch((error) => console.log(error));
  });

  if (books) {
    return (
      <div className="books">
        <h2>Books</h2>
        {books.map((book) => (
          <p>{book.title}</p>
        ))}
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

export default Books;
