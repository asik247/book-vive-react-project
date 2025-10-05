import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../components/Uillity/addToDB";

const About = () => {
  const detailsData = useLoaderData();
  // console.log(detailsData)
  const { id } = useParams();
  const idNumber = parseInt(id);
  // console.log(idNumber)

  const singleBook = detailsData.find((book) => book.bookId === idNumber);
  // console.log(singleBook)
  const { review, image, author, yearOfPublishing, rating } = singleBook;

  const handleAddBD = (id)=>{
    addToStoredDB(id)
  }

  return (
    <div className="mt-5">
      <div className="card bg-base-100 w-96 shadow-sm min-h-[calc(100vh-287px)] container">
        <figure>
          <img src={`${image}`} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Card Title
            <div className="badge badge-secondary">{yearOfPublishing}</div>
          </h2>
          <p>{review}</p>
          <div className="card-actions justify-end">

            <button onClick={()=>handleAddBD(id)} className="btn btn-success">Mark to read</button>

            <button className="btn btn-warning">Whish List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
