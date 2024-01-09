import React from "react";
import { useFormik } from "formik";
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import * as yup from "yup"
import { useNavigate } from "react-router";
import axios from "axios"
import { AUTHORAPI } from "./AuthorAPI";




const formValidationSchema = yup.object({
    image: yup.string()
        .required("Fill The Image Src"),
    author_name: yup.string()
        .min(5, "Need a Longer Author Name")
        .required("Fill The Author Name"),
    biography: yup.string()
        .min(5, "Need a Longer Description")
        .required("Fill The Description"),
    
    dob: yup.string()
        .min(6)
        .required("Fill The Publication Date"),
    

})

function Addauthor() {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: { image: "",author_name: "", biography: "", dob: "",},
        validationSchema: formValidationSchema,
        onSubmit:(values)=>{
            axios.post(`${AUTHORAPI}`, values)
            .then(res => (res.data))
            .then(() => navigate("/author"))
        }

    })
    return (
        <div>
            <h1>Add Author Record</h1>
            <form onSubmit={formik.handleSubmit}>
                <TextField id="image" name="image" label="Image" variant="outlined" fullWidth  onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.image && formik.errors.image ? formik.errors.image : ""}
               
                <TextField id="author_name" name="author_name" label="Author Name" fullWidth variant="outlined" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.author_name && formik.errors.author_name ? formik.errors.author_name : ""}
                <TextField id="biography" name="biography" label="Description" fullWidth variant="outlined" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.biography && formik.errors.biography ? formik.errors.biography : ""}
                
                <TextField id="dob" name="dob" fullWidth label="DOB" variant="outlined" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.dob && formik.errors.dob ? formik.errors.dob : ""}
               
                <Button variant="contained" color="success" type="submit">Add Author</Button>
            </form>
        </div>
    )
}

export default Addauthor