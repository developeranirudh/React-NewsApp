/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect} from 'react';
import { useState } from 'react';
import Newsitem from './Newsitem';
// import data from './sampledata.json';
import './News.css';
import Sipnner from './Sipnner';
export default function News(props) {
const[load,setload]=useState(true);
const [page,Setpage]=useState(1);
const [newsdata,Setnewsdata]=useState([]);
const[sizes,Setsizes]=useState("");
    const apidata= async()=>  
    { 
    const data= await fetch(`https://newsapi.org/v2/top-headlines?category=${props.category}&apiKey=${process.env.REACT_APP_NEWS_API}&page=${page}&PageSize=15`);
    const res= await data.json()
      Setnewsdata(res.articles);
      Setsizes(res.totalResults/10);
      // console.log(res.totalResults/10)
      setload(false);
  }
  // console.log(sizes);
useEffect(()=>
{   
    apidata();

 },[]);

 const pagePreHandler=async()=>
 {
  setload(true);
    const newsdata= await fetch(`https://newsapi.org/v2/top-headlines?category=${props.category}&apiKey=${process.env.REACT_APP_NEWS_API}&page=${page}&PageSize=10`);
    const res= await newsdata.json()
  Setnewsdata(res.articles);
  Setpage((page)-1);
setload(false);
 }
 const pageNextHandler=async()=>
 {  
  setload(true);
    const newsdata= await fetch(`https://newsapi.org/v2/top-headlines?category=${props.category}&apiKey=${process.env.REACT_APP_NEWS_API}&page=${page}&PageSize=10`);
    const res= await newsdata.json()
  Setnewsdata(res.articles);
  Setpage((page)+1);
  setload(false);
 }
//  console.log(page);
// const news newsdata;
// console.log(news);
   const newsitem= newsdata.map((element) => {
         let a=110;        
         return( 
             <Newsitem  key={a*Math.random()} imgurl={element.urlToImage?element.urlToImage:"https://cdn.pixabay.com/photo/2017/06/26/19/32/news-2444888_960_720.jpg"}title= {element.title?element.title.slice(0,44):""} description={element.description?element.description.slice(0,65):""}  urlnews={element.url}></Newsitem>
            );
    });
    // console.log(page,sizes);//
    // console.log(newsitem);
    return (
        <>  
         <h1 id="h1">Top Headlines</h1>
       
       
          <div className="shownews">
        {load===true ?<Sipnner/>:newsitem}
        </div>
        <div className="pagebtn">
        <button type="button" disabled={page<=1?true:false} className="btn btn-dark" id="p1" onClick={pagePreHandler}>Previous</button>
        <button type="button" className="btn btn-dark"disabled={page<sizes?false:true} id="n1"onClick={pageNextHandler}>Next</button>
   
        </div>
        <br></br>
        <br></br>

    </>
        
    );

}