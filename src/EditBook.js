import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import * as yup from "yup"
import axios from "axios";
import { useNavigate } from "react-router";
import { BOOKAPI } from "./BookAPI";
import { useParams } from "react-router-dom";



const formValidationSchema = yup.object({
    image: yup.string()
        .required("Fill The Image Src"),
    title: yup.string()
        .min(5, "Need a Longer Book Name")
        .required("Fill The Book Name"),
    author_name: yup.string()
        .min(5, "Need a Longer Author Name")
        .required("Fill The Author Name"),
    description: yup.string()
        .min(5, "Need a Longer Description")
        .required("Fill The Description"),
    isbn: yup.number()
        .min(5, "Need a Longer ISBN Number")
        .required("Fill The ISBN Number"),
    publicationDate: yup.string()
        .min(6)
        .required("Fill The Publication Date"),
    pages: yup.number()
        .min(5)
        .required("Fill The Book Page"),

})

function EditBook() {
    const { bookid } = useParams();
    const navigate = useNavigate();
   const formik = useFormik({
        initialValues: { image: "", title: "", author_name: "", description: "", isbn: "", publicationDate: "", pages: "" },
        validationSchema: formValidationSchema,
        onSubmit: values => {
            console.log(values)
            axios.put(`${BOOKAPI}/${bookid}`, values)
                .then(() => navigate("/book"))
               
        },


    })

    return (
        <div  className="edit">
        <div>
            <h1>Edit Book Record</h1>
            <form onSubmit={formik.handleSubmit}>
                <lable>Image Src:</lable>
                <TextField id="image" name="image" variant="outlined" onChange={formik.handleChange} value={formik.values.image} onBlur={formik.handleBlur} />
                {formik.touched.image && formik.errors.image ? formik.errors.image : ""}
                <br/>
                <label>Title:</label>
                <TextField id="title" name="title" variant="outlined"  onChange={formik.handleChange} value={formik.values.title} onBlur={formik.handleBlur} />
                {formik.touched.title && formik.errors.title ? formik.errors.title : ""}
               <br/>
               <label>Author Name:</label>
               
                <TextField id="author_name" name="author_name" value={formik.values.author_name}  variant="outlined" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.author_name && formik.errors.author_name ? formik.errors.author_name : ""}
               <br/>
               <label>Description:</label>
                <TextField id="description" name="description"  variant="outlined" value={formik.values.description} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.description && formik.errors.description ? formik.errors.description : ""}
                <br/>
                <label>ISBN Number:</label>
                
                <TextField id="isbn" name="isbn"  variant="outlined" onChange={formik.handleChange} value={formik.values.isbn} onBlur={formik.handleBlur} />
                {formik.touched.isbn && formik.errors.isbn ? formik.errors.isbn : ""}
                <br/>
                <label>Publication Date</label>
                
                <TextField id="publicationDate" name="publicationDate"  variant="outlined" value={formik.values.publicationdate} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.publicationDate && formik.errors.publicationDate ? formik.errors.publicationDate : ""}
                <br/>
                <label>Pages:</label>
                
                <TextField id="pages" name="pages" variant="outlined"  onChange={formik.handleChange} value={formik.values.pages} onBlur={formik.handleBlur} />
                {formik.touched.pages && formik.errors.pages ? formik.errors.pages : ""}
               <br/>
                <Button variant="contained" color="success" type="submit">Edit Book</Button>
               
            </form>
        </div>
        </div>
    )
}

export default EditBook