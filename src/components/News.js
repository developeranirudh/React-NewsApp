import React,{useEffect} from 'react';
import { useState } from 'react';
import Newsitem from './Newsitem';
// import data from './sampledata.json';
import './News.css';
import Sipnner from './Sipnner';
export default function News() {
const [btndisable,Setbtndisable]=useState(0);
 const [newsdata,Setnewsdata]=useState([]);
    const apidata= async()=>  
    {
        const newsdata= await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=26dc02fb8f6f45dc993313592a075d1b&page=1");
        const res= await newsdata.json()
      Setnewsdata(res.articles);
    }
useEffect(()=>
{   
    apidata();

 },[]);
 const pagePreHandler=async()=>
 {
    const newsdata= await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=26dc02fb8f6f45dc993313592a075d1b&page=1");
    const res= await newsdata.json()
  Setnewsdata(res.articles);
  Setbtndisable(0);
 }
 const pageNextHandler=async()=>
 {
    const newsdata= await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=26dc02fb8f6f45dc993313592a075d1b&page=2");
    const res= await newsdata.json()
  Setnewsdata(res.articles);
  Setbtndisable(1);
 }
 
// const news newsdata;
// console.log(news);
   const newsitem= newsdata.map((element) => {
         let a=110;        
         return( 
             <Newsitem  key={a*Math.random()} imgurl={element.urlToImage?element.urlToImage:"https://cdn.pixabay.com/photo/2017/06/26/19/32/news-2444888_960_720.jpg"}title= {element.title?element.title.slice(0,44):""} description={element.description?element.description.slice(0,65):""}  urlnews={element.url}></Newsitem>
            );
    });
    
    // console.log(newsitem);
    return (
        <>  
         <h1 id="h1">Top Headlines</h1>
         <Sipnner/>
          <div className="shownews">
        {newsitem}
        </div>
        <div className="pagebtn">
        <button type="button" disabled={!btndisable} class="btn btn-danger" id="p1" onClick={pagePreHandler}>Previous</button>
        <button type="button" disabled={btndisable}class="btn btn-danger" id="n1"onClick={pageNextHandler}>Next</button>
        </div>
        <br></br>
        <br></br>

    </>
        
    );

}