import React from "react";
import { Link } from "react-router";

const MainCard = ({ singleData }) => {
  // console.log(singleData)
  const {bookId, bookName, totalPages, image, author, tags,rating } = singleData;
  return (
    <Link to={`/details/${bookId}`}>
    <div className="card bg-base-100 w-full shadow-md mt-5">
      <figure className="bg-gray-200 w-[200px] mx-auto p-3" >
        <img className="h-[200px]" src={`${image}`} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-primary">{totalPages}</div>
          <div className="badge badge-primary">{rating}</div>
        </h2>
        <p>{author}</p>
        <div className="card-actions justify-end">
          <div className="flex gap-5">
            {tags.map((tag,ind) =>  (
              
              <button key={ind} className="btn">{tag } </button>
            ))}
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default MainCard;
