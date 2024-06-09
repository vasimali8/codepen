import React, { useState } from "react";


import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { Controlled, Controlled as ControlledEditor } from 'react-codemirror2';
import{Box , styled} from "@mui/material";
import { CloseFullscreen } from '@mui/icons-material';

const Heading = styled(Box)`
background: #444857;
display:flex;
padding: 9px 12px;`

const Header = styled(Box)`
display: flex;
justify-content:space-between;
background:#444857;

color:#AAEBC;

font-weight:700;
`

const Container = styled(Box)`
flex-grow:1;
flex-basic:0;
display:flex;
flex-direction:column;
padding: 0 8px 8px;

`

export default function Editor({heading ,icon ,color , value , onChange}) {
   const [open , setOpen] = useState(true);
    const handleChange = (editor , data , value)=>{
        onChange(value);
    }
  return (
    <>
      <Container style={open ? null : {flexGrow : 0}}>
        <Header>
          <Heading style={{color:'#ffff'}} >
            <Box component="span"  style={{background: color , height:20 , width:20 , display:'flex' , placeContent:'center' , borderRadius: 5 , marginRight:5 , paddingBottom:5 , color:'#ffff'}}>{icon}</Box>
            {heading}
          </Heading>
          <CloseFullscreen 
       
          style={{color:'#ffff',cursor:'pointer'}}
   
          onClick={() => setOpen(prevState => !prevState)}/>
        </Header>
        <ControlledEditor 
    
        fontSize = 'small'
        syle={{}}
        className="controlled-editor" 
        value={value}
        onBeforeChange={handleChange}
        options={{
            theme:'material',
            lineNumbers:true
        }}  />
      </Container>
    </>
  );
}
