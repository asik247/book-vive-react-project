import React, { useEffect, useState, } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStroedBook } from "../components/Uillity/addToDB";
import MainCard from "./MainCard";

const ReadList = () => {
    const [readList,setReadList] = useState([]);
   
    const data = useLoaderData()
    // console.log(data)

    useEffect(()=>{
        const dbData = getStroedBook()
        // console.log(dbData)
        const convertedData = dbData.map(id=>parseInt(id))
        console.log(convertedData)
        const myReadList = data.filter(book=>convertedData.includes(book.bookId));
       setReadList(myReadList)

    },[])
  return (
    <div className="container">
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>Book i read {readList.length}</h2>
          {
            readList.map(b=><MainCard key={b.bookId}singleData={b}></MainCard>)
          }
        </TabPanel>
        <TabPanel>
          <h2>My Wish list</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
