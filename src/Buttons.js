import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function Buttons(){
    const navigate = useNavigate()
    return(
        <div className="btn">
           <Button variant="contained" color="success" onClick={()=>navigate('/book')}>Book Records</Button>
           <Button variant="contained" color="success" onClick={()=>navigate('/author')}>Author Records</Button>
          
        </div>
    )
}

export default Buttons