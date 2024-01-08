import React, { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete'
import { useNavigate } from "react-router";
import { Button } from "@mui/material";
const PROGRAMMING_BOOKS = [{
    "id": 1,
    "image": "https://iotvnaw69daj.i.optimole.com/cb:n2y9~6666f/w:325/h:486/q:mauto/f:best/https://www.codeinwp.com/wp-content/uploads/2021/04/Head-first-HTML-and-CSS.jpg",
    "title": "Head First HTML and CSS",
    "description": "Elisabeth Robson and Eric freeman collaborated to create a one-of-a-kind book that explains pretty much everything about static web page construction in a simplistic manner.",
    "author_name": " Elisabeth Robson ",
    "isbn": "0596159900",
    "publicationdate": "09/03/2012",
    "pages": 762
},
{
    "id": 2,
    "image": "https://learning.oreilly.com/library/cover/9781098139865/250w/",
    "title": "Learning JavaScript Design Patterns",
    "description": "Author Addy Osmani shows you how to apply modern design patterns to JavaScript and React—including modules, mixins, observers, and mediators.",
    "author_name": "Addy Osmani",
    "isbn": "9781098139872",
    "publicationdate": "May 2023",
    "pages": 320
},
{
    "id": 3,
    "image": "https://i1.sndcdn.com/artworks-5x9nnAE0irju0heL-9Z8eOA-t500x500.jpg",
    "title": "The Road to React",
    "description": "The book is very clear, technical, and easy to understand. The author also explains best practices and the nature of reactions.",
    "author_name": "Robin Wieruch",
    "isbn": "9781720043997",
    "publicationdate": "November 2017",
    "pages": 394
},
{
    "id": 4,
    "image": "https://www.mongodb.com/developer/_next/image/?url=https%3A%2F%2Fimages.contentstack.io%2Fv3%2Fassets%2Fblt39790b633ee0d5a7%2Fblt28d67a372bc7f093%2F65036a005e99806c7203218d%2FMongoDB_Practical_Aggregations.png&w=750&q=75",
    "title": "Practical MongoDB Aggregations",
    "description": "This technical guide takes you on a data-driven journey by teaching you how to streamline data manipulation, resolve data processing bottlenecks, and optimize pipelines.",
    "author_name": "Paul Done",
    "isbn": "9781835080641",
    "publicationdate": " Sept 2023",
    "pages": 312
},
{
    "id": 5,
    "image": "https://m.media-amazon.com/images/I/61hF76tmuYL._SY342_.jpg",
    "title": "SQL Quickstart Guide",
    "description": "In SQL QuickStart Guide You'll The basic structure of databases—what they are, how they work, and how to successfully navigate them",
    "author_name": "Walter Shields",
    "isbn": "9781945051920",
    "publicationdate": "November 2015",
    "pages": 348
},
{
    "id": 6,
    "image": "https://uploads.sitepoint.com/wp-content/uploads/2023/02/1675897765nodejsn2n-240x300.jpeg",
    "title": "Node.js: Novice to Ninja",
    "description": "This book starts with the basics and works its way up to the advanced concepts used in applications. ",
    "author_name": "Craig Buckler",
    "isbn": "9781098141011",
    "publicationdate": "July 2022",
    "pages": 410
}]

function Book() {

    const [book, setBook] = useState(PROGRAMMING_BOOKS)


    const handleDelete = (id) => {
        setBook(() => book.filter((val) => val.id !== id))
    }


const navigate = useNavigate()
    return (
        <div>
            <h1>Books</h1>
            <Button variant="contained" color="success" onClick={()=>navigate('/addbook')}>Add Book</Button>
           
            <div className="Root">
                {book.map((book) => {
                    return (
                        <div className="root">
                            <div className="card">
                                <div>
                                    <img width="200px" height="200px" src={book.image} alt={book.title} />
                                </div>
                                <div>
                                    <h4>Title : {book.title} </h4>
                                    <h4>Author Name : {book.author_name}</h4>
                                    <h4>Description : {book.description}</h4>
                                    <h4>ISBN Number : {book.isbn}</h4>
                                    <h4>Publication Date : {book.publicationdate}</h4>
                                    <h4>Pages : {book.pages}</h4>
                                    <div className="editdelete">
                                        <EditIcon color="secondary" onClick={()=>navigate('/editbook')}/>
                                        <DeleteIcon color="error" onClick={() => handleDelete(book.id)} />
                                    </div>
                                </div>

                            </div>
                        </div>
                    )

                })}
            </div >
        </div>
    )
}


export default Book