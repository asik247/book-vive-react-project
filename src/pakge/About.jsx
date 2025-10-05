import React from "react";
import { useLoaderData, useParams } from "react-router";

const About = () => {
  const detailsData = useLoaderData();
  // console.log(detailsData)
  const { id } = useParams();
  const idNumber = parseInt(id);
  // console.log(idNumber)

  const singleBook = detailsData.find((book) => book.bookId === idNumber);
  // console.log(singleBook)
  const { review, image,author,yearOfPublishing,rating } = singleBook;

  return (
    <div className="mt-5">
      <div className="card bg-base-100 w-96 shadow-sm min-h-[calc(100vh-287px)] container">
        <figure>
          <img src={`${image}`} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Card Title
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{review}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
