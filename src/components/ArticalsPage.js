import React from 'react';
import { Link } from 'react-router-dom';
import '../css/nav.css';

export const ArticalsPage  = ({articals}) =>{
 return(
     <>
      {articals.map((artical,key)=>(
      <>
      <Link className="decor" key ={key} to={`/artical/${artical.name}`}>
      <h2>{artical.name}</h2>
    <p>{artical.content.substring(0,50)}...</p>
      </Link>
      <br/>
      </>
    ))}
     </>
 )
}