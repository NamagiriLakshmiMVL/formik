import React,{useState} from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete'
import { Button } from "@mui/material";
import { useNavigate } from "react-router";

const PROGRAMMING_AUTHORS = [{
    "id": 1,
    "image": "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/S/amzn-author-media-prod/av02ftal4qharf1onmnqt9j3n2._SX450_CR0%2C0%2C450%2C450_.jpg",
    "author_name": " Elisabeth Robson ",
    "dob": "July 1965",
    "biography": "Elisabeth Robson is an author and software developer. She is coauthor of O'Reilly's Head First Design Patterns and Head First HTML with CSS & XHTML."
},
{
    "id": 2,
    "image": "https://pbs.twimg.com/profile_images/1717306779368087552/UMVIP8CQ_400x400.jpg",
    "author_name": "Addy Osmani",
    "dob": "March 1986",
    "biography": "Addy Osmani is an Irish software engineer, author and Public speaker who works for Google as an Engineering Manager. He is currently leading developer tooling for Google Chrome, Google's web browser."
},
{
    "id": 3,
    "image": "https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/S/amzn-author-media-prod/ppqjtm5lthar2lnjlgh6g837oa.jpg",
    "author_name": "Robin Wieruch",
    "dob": "June 1990",
    "biography": "Robin Wieruch is a German software and web engineer who is dedicated to learn and teach programming in JavaScript."
},
{
    "id": 4,
    "image": "https://images.crunchbase.com/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/v1446703460/ukctxthm2okmzlj3fwh6.jpg",
    "author_name": "Paul Done",
    "dob": "March 1978",
    "biography": "Paul Done is a Field CTO at MongoDB, Inc., having been a Solutions Architect for the past decade at MongoDB. Paul is the author of the book Practical MongoDB Aggregations and a contributing author to the book Professional Oracle WebLogic Server. "
},
{
    "id": 5,
    "image": "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/S/amzn-author-media-prod/93dcn7nn11jqlbl0spqiq7m1rk._SY450_CR1%2C0%2C450%2C450_.jpg",
    "author_name": "Walter Shields",
    "dob": "October 1991",
    "biography": "Walter Shields has worked with SQL and databases for over eighteen years, helping organizations such as Target Corporation, NYC Transit Authority, and NYC Administration for Children’s Services successfully leverage and understand their data using SQL. "
}
    , {
    "id": 6,
    "image": "https://avatars.githubusercontent.com/u/2033041?v=4",
    "author_name": "Craig Buckler",
    "dob": "July 1993",
    "biography": "Craig Buckler is an experienced Web Developer working in the UK. Craig started his career creating desktop software before moving over to the web development. Craig has worked for a number of well-known companies, including Microsoft, MSN, Thomson Reuters, and the UK & EU governments."
}]
 function Author() {
    const [author, setAuthor] = useState(PROGRAMMING_AUTHORS)
    const handleDelete = (id) =>{
      setAuthor(()=>
      author.filter((val)=>{
        return val.id !== id
       })
       )
    }
    const navigate = useNavigate()
    return (
        <div>
            <h1>Authors</h1>
            <Button variant="contained" color="success" onClick={()=>navigate('/addauthor')}>Add Author</Button>
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
                                        < EditIcon color="secondary" onClick={()=>navigate("/editauthor")}/>
                                        <DeleteIcon color="error" onClick={()=>handleDelete(item.id)}/>
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