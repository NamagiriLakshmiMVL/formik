import React, { useState,useEffect } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete'
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import { AUTHORAPI } from "./AuthorAPI";
import axios from "axios"

function Author() {
    const [author, setAuthor] = useState([])

    const getProduct = () => {
        axios.get(`${AUTHORAPI}`)
            .then((res) => setAuthor(res.data))
    }
    useEffect(() => getProduct(), [])

    const navigate = useNavigate()
    return (
        <div>
            <h1 style={{textAlign:"center",color:"brown"}}>Authors</h1>
            <Button style={{marginLeft:"1100px"}} variant="contained" color="success" onClick={() => navigate('/addauthor')}>Add Author</Button>
            <div className="Root">

                {author.map((item) => {
                    return (
                        <div className="root">
                            <div className="card">
                                <div>
                                    <img width="200px" height="200px" src={item.image} alt={item.author_name} />
                                </div>
                                <div>
                                    <h4>Name : {item.author_name} </h4>
                                    <h4>Biography : {item.biography}</h4>
                                    <h4>DOB : {item.dob}</h4>
                                    <div className="editdelete">
                                        < EditIcon color="secondary" onClick={() => navigate(`/author/${item.id}`)} />
                                        <DeleteIcon color="error" onClick={() =>  axios.delete(`${AUTHORAPI}/${item.id}`)
                                        .then(()=>getProduct())} />
                                    </div>
                                </div>

                            </div>
                        </div>

                    )
                })}


            </div>

        </div>
    )
}

export default Author