import React from "react";
import {articalcontent} from './Artical-Content';
import {ArticalsPage} from '../components/ArticalsPage';

export const ArticalPage = ({match}) =>{
const name = match.params.name;
const artical =  articalcontent.find(artical=>artical.name === name);
const articallist = articalcontent.filter(artical=>artical.name!==name);
if(!artical) return <h1>Artical does not exit!</h1>
return (
  <>
    <h1>{artical.name}</h1>
<p>{artical.content}</p>
<br/>
<h3>Other Artical's List</h3>
<ArticalsPage articals = {articallist} />
  </>
)};