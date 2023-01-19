import React, { Fragment, useState } from 'react';
import BookInfo from "../component/BookInfo"
import "./book.css"
import { books } from "./books";   //EXPORT 3:22
import { greeting } from "../testing/test"; //EXPORT


// @ 2 object 
// const Book = () => {
//     const firstBook = {
//         authorName: "James Cameron",
//         price: "70"
//     }
//     const secondBook = {
//         authorName: "Ranjith Kumar HN",
//         price: "84"
//     }
//     const productHeader = "Book Bazar"
//     return (
//         <Fragment>
//             <div className="booklist">
//                 <h1>{productHeader}</h1>
//                 <img src="https://cdn.downtoearth.org.in/library/large/2020-11-10/0.50338900_1604994159_soe-2021.jpg" alt="bookname" height="250" width="250" />
//                 <BookInfo authorName={firstBook.authorName} price={firstBook.price}>
//                     <p>As it turns out, there are a couple ways to achieve this:
//                         <br />
//                     You can pass a render function to your component.
//                    </p>
//                 </BookInfo>

//                 <img src="https://cdn.downtoearth.org.in/library/large/2020-11-10/0.50338900_1604994159_soe-2021.jpg" alt="bookname" height="250" width="250" />
//                 <BookInfo authorName={secondBook.authorName} price={secondBook.price} />
//             </div>
//         </Fragment >

//     )
// }

const Book = () => {
    const [name, setName] = useState('')
    const productHeader = "Book Bazar"
    const changeName = () => {
        if (name === "") {
            setName("Ranjith");
        }
        else if (name === "Ranjith") {
            setName("")
        }

    }

    return (

        <Fragment>
            <h1 onMouseOver={() => { changeName() }}>{productHeader}&nbsp;{greeting} &nbsp;{name}</h1>
            <div className="booklist">
                <BookInfo books={books} />
            </div>
        </Fragment >
    )
}

export default Book
