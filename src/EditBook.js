import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import * as yup from "yup"
import axios from "axios";
import { useNavigate } from "react-router";
import {BOOKAPI} from "./BookAPI";
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
    const [product, setProduct] = useState(null)
   
    const getProduct = () => {
        axios.get(`${BOOKAPI}/${bookid}`)
            .then((res) => setProduct(res.data))
            


    }

    useEffect(() => getProduct(), [])

    const formik = useFormik({
        initialValues: {image:"one", title: "two", author_name:"three", description:"four", isbn: "five", publicationDate: "six", pages:"seven"},
        validationSchema: formValidationSchema,
        onSubmit: (values) => {
            console.log(values)
            axios.put(`${BOOKAPI}/${bookid}`, values)
                .then(() => navigate("/book"))
        }

    })
    return (
        <div>
            <h1>Edit Book Record</h1>
            <form onSubmit={formik.handleSubmit}>
                <TextField id="image" name="image"  variant="outlined" fullWidth onChange={formik.handleChange} value={formik.values.image}onBlur={formik.handleBlur} />
                {formik.touched.image && formik.errors.image ? formik.errors.image : ""}
                <TextField id="title" name="title"  variant="outlined" fullWidth onChange={formik.handleChange} value={formik.values.title} onBlur={formik.handleBlur} />
                {formik.touched.title && formik.errors.title ? formik.errors.title : ""}
                <TextField id="author_name" name="author_name"  value={formik.values.author_name} fullWidth variant="outlined" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.author_name && formik.errors.author_name ? formik.errors.author_name : ""}
                <TextField id="description" name="description"  fullWidth variant="outlined" value={formik.values.description} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.description && formik.errors.description ? formik.errors.description : ""}
                <TextField id="isbn" name="isbn"  fullWidth variant="outlined" onChange={formik.handleChange}value={formik.values.isbn} onBlur={formik.handleBlur} />
                {formik.touched.isbn && formik.errors.isbn ? formik.errors.isbn : ""}
                <TextField id="publicationDate" name="publicationDate" fullWidth variant="outlined" value={formik.values.publicationDate}onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.publicationDate && formik.errors.publicationDate ? formik.errors.publicationDate : ""}
                <TextField id="pages" name="pages" variant="outlined" fullWidth onChange={formik.handleChange} value={formik.values.pages} onBlur={formik.handleBlur} />
                {formik.touched.pages && formik.errors.pages ? formik.errors.pages : ""}
                <Button variant="contained" color="success" type="submit">Add Book</Button>
            </form>
        </div>
    )
}

export default EditBook