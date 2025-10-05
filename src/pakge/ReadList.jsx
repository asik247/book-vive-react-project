import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStroedBook } from "../components/Uillity/addToDB";
import MainCard from "./MainCard";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const [short,setShort] = useState('');

  const data = useLoaderData();
  // console.log(data)

  useEffect(() => {
    const dbData = getStroedBook();
    // console.log(dbData)
    const convertedData = dbData.map((id) => parseInt(id));
    // console.log(convertedData);
    const myReadList = data.filter((book) =>
      convertedData.includes(book.bookId)
    );
    setReadList(myReadList);
  }, []);

  const handleShort = (type)=>{
    setShort(type)

    if(type==='Pages'){
        const shordByPages = [...readList].sort((a,b)=>a.totalPages-b.totalPages)
        setReadList(shordByPages)
    }
    if(type==='Rating'){
        const shordByRating = [...readList].sort((a,b)=>a.rating-b.rating)
        setReadList(shordByRating)
    }
  }



  return (
    <div className="container">
      <details className="dropdown">
        <summary className="btn m-1">Short by:{short?short:""}</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <a onClick={()=>handleShort('Pages')}>Pages</a>
          </li>
          <li>
            <a onClick={()=>handleShort('Rating')}>Rating</a>
          </li>
        </ul>
      </details>

      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>Book i read {readList.length}</h2>
          {readList.map((b) => (
            <MainCard key={b.bookId} singleData={b}></MainCard>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>My Wish list</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
