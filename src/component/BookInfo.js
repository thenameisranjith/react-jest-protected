import React from "react";
import { Fragment } from "react";
import "../container/book.css";

const BookInfo = (props) => {
  //const { authorName, price, children } = props  //object destructring
  const clickHandler = (e) => {
    console.log(e);
    alert("welcome");
    console.log(e.target);
  };

  return (
    <>
      {props.books.map((e, i) => {
        return (
          <div key={i}>
            <img src={e.image} alt="bookname" height="250" width="250" />
            <h3 onClick={() => console.log(e.authorName)}>{e.authorName}</h3>
            <h4>{e.price}</h4>
            <button type="submit" onClick={clickHandler}>
              Get
            </button>
          </div>
        );
      })}
    </>
  );
};

export default BookInfo;
