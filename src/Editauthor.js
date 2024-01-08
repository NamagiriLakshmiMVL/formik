import React from "react";
import { useFormik } from "formik";
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import * as yup from "yup"



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

function Editauthor() {
    const formik = useFormik({
        initialValues: { image: "", title: "", author_name: "", description: "", isbn: "", publicationDate: "", pages: "" },
        validationSchema: formValidationSchema,
        onSubmit:(values)=>{
            console.log("values",values)
        }

    })
    return (
        <div>
            <h1>Edit Author Record</h1>
            <form onSubmit={formik.handleSubmit}>
                <TextField id="image" name="image" label="Image" variant="outlined" fullWidth  onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.image && formik.errors.image ? formik.errors.image : ""}
                <TextField id="title" name="title" label="Title" variant="outlined" fullWidth onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.title && formik.errors.title ? formik.errors.title : ""}
                <TextField id="author_name" name="author_name" label="Author Name" fullWidth variant="outlined" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.author_name && formik.errors.author_name ? formik.errors.author_name : ""}
                <TextField id="description" name="description" label="Description" fullWidth variant="outlined" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.description && formik.errors.description ? formik.errors.description : ""}
                <TextField id="isbn" name="isbn" label="ISBN Number" fullWidth variant="outlined"onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.isbn && formik.errors.isbn ? formik.errors.isbn : ""}
                <TextField id="publicationDate" name="publicationDate" fullWidth label="Publication Date" variant="outlined" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.publicationDate && formik.errors.publicationDate ? formik.errors.publicationDate : ""}
                <TextField id="pages" name="pages" label="Pages" variant="outlined"fullWidth onChange={formik.handleChange} onBlur={formik.handleBlur}  />
                {formik.touched.pages && formik.errors.pages ? formik.errors.pages : ""}
                <Button variant="contained" color="success">Add Book</Button>
            </form>
        </div>
    )
}

export default Editauthor