import React, { useEffect, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete'
import { useNavigate } from "react-router";
import { Button } from "@mui/material";
import axios from 'axios'
import { BOOKAPI } from "./BookAPI";



function Book() {

    const [book, setBook] = useState([])

    const getProduct = () =>{
        axios.get(`${BOOKAPI}`)
        .then((res)=>setBook(res.data))
    }
    useEffect(()=>getProduct(),[])


  


const navigate = useNavigate()
    return (
        <div>
            <h1 style={{textAlign:"center",color:"brown"}}>Books</h1>
            <div style={{display:"flex"}}>
            <Button style={{marginLeft:"900px"}} variant="contained" color="success" onClick={()=>navigate('/addbook')}>Add Book</Button>
            <Button style={{marginLeft:"50px"}} variant="contained" color="success" onClick={() => navigate('/')}>BACK</Button>
            </div>
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
                                        <EditIcon color="secondary" onClick={()=>navigate(`/book/${book.id}`)}/>
                                        <DeleteIcon color="error" onClick={() => axios.delete(`${BOOKAPI}/${book.id}`)
                                        .then(()=>getProduct())} />
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